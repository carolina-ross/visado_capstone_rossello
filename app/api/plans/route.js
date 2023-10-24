import { NextResponse } from "next/server";
import Plan from "@/models/plans.schema"
import User from "@/models/users.schema"
import dbConnection from "@/lib/dbConnection";
import jwt from "jsonwebtoken";

export async function POST( request ){

    try{

        await dbConnection();

        const { token , plan_id  } = await request.json();

        const tokenUser = jwt.verify(token , process.env.PRIVATE_KEY_TOKEN);
    
        const data = await User.updateOne({ _id: tokenUser._id } , {$push : { plans: plan_id }});
    
        return NextResponse.json(
            { success: true, data: data }, 
            { status: 200}
        );
        
    }catch(error){
        return NextResponse.json({ success: false, message: error.message } , { status: 500})
    }

    
}