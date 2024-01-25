import "../../mongodb.mjs";
import { NextResponse } from 'next/server';
import { uploadOnCloudinary } from "../../cloudinary.mjs";

export const POST = async (req, res) => {

    const formData = await req.formData();
    const file = formData.get('file');

    const uploadedFile = await uploadOnCloudinary(file, "we-app-nextjs/posts") // file and folder where you want to upload on cloudinary

    console.log(uploadedFile.url); // public uploaded url

    return NextResponse.json({
        message: "success",
        url: uploadedFile.url,
    })

};