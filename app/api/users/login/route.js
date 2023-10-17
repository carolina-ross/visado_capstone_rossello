import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import User from "@/models/users.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(request){
    try {
        await dbConnection();

        
        const { email , password } = await request.json();

        const user = await User.findOne({ email });

        if (!user) {
          return NextResponse.json(
            { success: false, message: "This user doesn´t exits." },
            { status: 400 }
          );
        }

        //Compare password

        const isPasswordCorrect = bcrypt.compareSync(password , user.password);

        if(!isPasswordCorrect){
            return NextResponse.json(
                { success: false, message: "The password is incorrect." },
                {status: 403}
            );
        }

        const token =  jwt.sign( user.toJSON() , process.env.PRIVATE_KEY_TOKEN);
    
        return NextResponse.json({ success: true, data: user , token }, {
          status: 201,
        });

    } catch (error) {

        return NextResponse.json({ success: false, message: error.message } , { status: 500})

    }

}