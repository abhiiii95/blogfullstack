import { connectDB } from "@/lib/mongodb";
import blogModel from "@/models/blogModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    let data = await blogModel.find();
    // console.log("data: ", data);

    return NextResponse({
      status: true,
      data,
    });
  } catch (error) {
    console.log("error: ", error);

    return NextResponse(
      {
        status: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
};
