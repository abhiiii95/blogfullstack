import React from 'react';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-3 p-2 border rounded">
          <h2 className="font-semibold">{blog.title}</h2>
          <p>{blog.content}</p>
          <small>Author: {blog.author}</small>
        </div>
      ))}
    </div>
  );
}
