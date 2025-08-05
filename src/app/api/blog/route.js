import { NextResponse } from 'next/server';

import connectDB from '../../../../lib/config';

import Blog from '../../../../models/Blog';

export async function GET() {
  await connectDB();

  const blogs = await Blog.find({});
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const { title, content, author } = body;

  const blog = await Blog.create({ title, content, author });
  return NextResponse.json(blog, { status: 201 });
}
