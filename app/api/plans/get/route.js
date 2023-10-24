import { NextResponse } from "next/server";
import Plan from "@/models/plans.schema"
import User from "@/models/users.schema"
import dbConnection from "@/lib/dbConnection";
import jwt from "jsonwebtoken";

export async function POST(request){

    try {

        await dbConnection();
        let { destination, citizenship } = await request.json();

        citizenship = citizenship.trim().toLowerCase();

        destination = destination.trim().toLowerCase();

        const plan = await Plan.findOne({destination: destination , citizenship: citizenship});

        if( plan ){
            return NextResponse.json(
                { success: true, data: plan },
                { status: 200 }
            );
        }

        const urlAPI = `${process.env.VISA_API_URL}/visa/country/${destination}/${citizenship}`;

        const response = await fetch(urlAPI , {
            headers: { 
                'Content-Type': 'application/json' , 
                'X-RapidAPI-Key' : process.env.X_RAPIDAPI_KEY, 
                'X-RapidAPI-Host' : process.env.X_RAPIDAPI_HOST
            }
        });

        if( response.status  === 429){
            return NextResponse.json(
                {message: 'This information is not yet available. Please try again later' ,  success: false },
                {status: 429}
            )
        }

        const data = await response.json();

        const newPlan = await Plan.create({
            destination,
            citizenship,
            visa_details: data
        });

        return NextResponse.json(
            { success: true, data: newPlan }, 
            { status: 200}
        );
        
    }catch(error){
        return NextResponse.json({ success: false, message: error.message } , { status: 500})
    }

}
