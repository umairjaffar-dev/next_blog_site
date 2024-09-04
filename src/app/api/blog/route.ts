import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/models";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

// End Piont to add Blog
export async function POST(request: NextRequest) {
  const formData = await request.formData(); // store form data
  const timeStamp = Date.now();

  const image = formData.get("image") as File;
  const imageByteData = await image.arrayBuffer(); //read file as an array buffer
  const buffer = Buffer.from(imageByteData); //convert array buffer to node buffer
  const path = `./public/${timeStamp}_${image.name}`; //store file in public folder
  await writeFile(path, buffer); //  write file to public folder
  const imageUrl = `/${timeStamp}_${image.name}`; // construct url

  //  Now take other data and store in data base.
  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: imageUrl,
    category: formData.get("category"),
    author: formData.get("author"),
    authorImg: formData.get("authorImg"),
  };

  try {
    await BlogModel.create(blogData);
    console.log("Blog Added");

    return NextResponse.json({ success: true, message: "Blog Added" });
  } catch (error) {
    console.error("Failed to add blog:", error);
    return NextResponse.json({ success: false, message: "Blog not added" });
  }
}

// api end piont to get blogs.
export async function GET(request: NextRequest) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ message: "Get blog with specific id", blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ message: "API Working", blogs });
  }
}
