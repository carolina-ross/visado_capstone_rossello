import User from "@/models/users.schema";
import Plan from "@/models/plans.schema";
import dbConnection from "@/lib/dbConnection";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(request){
    
    try{

        await dbConnection();

        const { token } = await request.json();

        const tokenUser = jwt.verify(token , process.env.PRIVATE_KEY_TOKEN);

        console.log("tokenUser" , tokenUser) 
 
        const user = await User.findById(tokenUser._id).populate({
            path: 'plans', 
            model: Plan
        }).exec();

        return NextResponse.json(
            { success: true, data: user }, 
            { status: 200}
        );

    }catch(error){
        return NextResponse.json({ success: false, message: error.message } , { status: 500})
    }

}


export async function DELETE(request){
    
    try{

        await dbConnection();

        const { token , plan_id } = await request.json();

        const tokenUser = jwt.verify(token , process.env.PRIVATE_KEY_TOKEN);
 
        const user = await User.findOneAndUpdate(
            {_id : tokenUser._id},
            { $pull: { plans: plan_id } },
            { new: true }
        )

        return NextResponse.json(
            { success: true, data: user }, 
            { status: 200}
        );

    }catch(error){
        return NextResponse.json({ success: false, message: error.message } , { status: 500})
    }
}