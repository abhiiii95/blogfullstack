import AboutBanner from '@/Common/Components/AboutBanner/AboutBanner'
import Link from 'next/link';
import React from 'react'
import BlogCard from './blogCard/BlogCard';
import styles from "./blog.module.scss";

const Blog = () => {
    const bannerData = [{
        id:1,
        route:"",
        routeText:"Blogs"
    }]
    const blogListTestData = [
        {
          title: "Stop Using CSS Wrong in Next.js — Learn the Right Way",
          routPath: "/blog/right-way-to-use-css-in-nextjs",
          description:
            "Most developers misuse CSS in Next.js. This blog explains the correct, scalable, and production-ready ways to style your apps.",
          thumbnail:
            "https://res.cloudinary.com/demo/image/upload/v1700000000/sample.png",
          imgageAlt: "Correct ways to use CSS in Next.js applications",
          updatedAt: "2026-01-07T09:22:23.007+00:00",
        },
        {
          title: "Most Next.js Apps Fail at Scale — Here’s How Big Teams Build Frontends",
          routPath: "/blog/scalable-nextjs-frontend-architecture",
          description:
            "Learn how large teams architect scalable Next.js frontends using best practices, patterns, and real-world lessons.",
          thumbnail:
            "https://res.cloudinary.com/demo/image/upload/v1700000000/sample.png",
          imgageAlt: "Scalable frontend architecture using Next.js",
          updatedAt: "2026-01-07T09:22:23.007+00:00",
        },
        {
          title: "React Hooks You Must Master in 2025 (With Real Examples)",
          routPath: "/blog/react-hooks-you-must-master",
          description:
            "A practical guide to essential and advanced React hooks with real-world examples you can directly use in projects.",
          thumbnail:
            "https://res.cloudinary.com/demo/image/upload/v1700000000/sample.png",
          imgageAlt: "Essential React hooks with real-world examples",
          updatedAt: "2026-01-07T09:22:23.007+00:00",
        },
      ];
      
  return (
    <>
      <AboutBanner banner={bannerData} heading={"About Us – Your Trusted Travel Booking Platform"}/>
      <section className={styles?.blogWrapper}>
        <div className='container'>
            <div className={styles?.blogContent}>
                {
                    blogListTestData?.map((val,i)=>{
                        return <div className={styles?.blogItem} key={i}><BlogCard {...val}/></div>
                    })
                }
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Blog
