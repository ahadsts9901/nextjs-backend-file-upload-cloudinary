import fs from "fs"
import { v2 as cloudinary } from "cloudinary"
import "dotenv/config"

// cloudinary api keys
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// function to upload file on cloudinary
export const uploadOnCloudinary = (file, folder) => {

    return new Promise(async (resolve, reject) => {
        try {

            if (!file) {
                reject(new Error("File not provided"))
                return null
            }

            const buffer = await file.arrayBuffer()
            const bytes = Buffer.from(buffer)

            // upload file
            cloudinary.uploader.upload_stream({
                resource_type: "auto",
                folder: folder
            }, async (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result) // object of uploaded file including public url
            }).end(bytes)


        } catch (error) {

            reject(error)

        }
    })

}