import blogModel from "@/models/blogModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    let data = await blogModel();
    console.log("data: ", data);

    return NextResponse({
      status: true,
      data,
    });
  } catch (error) {
    return NextResponse(
      {
        status: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
};
