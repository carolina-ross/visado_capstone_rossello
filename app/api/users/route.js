import User from "@/models/users.schema";
import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function GET(){

}

export async function POST(request){
    try {
        await dbConnection();

        const { name, email, username , password } = await request.json();
    
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          return NextResponse.json(
            { success: false, message: "User already exists" },
            { status: 400 }
          );
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({
          username,
          name,
          email,
          password: hashedPassword,
        });

        const token =  jwt.sign( user.toJSON() , process.env.PRIVATE_KEY_TOKEN);

    
        return NextResponse.json({ success: true, data: user , token }, {
          status: 201,
        });

    } catch (error) {

        return NextResponse.json({ success: false, message: error.message } , { status: 500})

    }

}