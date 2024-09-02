"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import { BlogItemPropsType } from "@/Components/BlogItem";
import Image from "next/image";
import Footter from "@/Components/Footter";
import Link from "next/link";

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [data, setData] = useState<BlogItemPropsType | null>(null);

  const fetchBlogData = () => {
    const blog = blog_data.find((blog) => blog.id == Number(id));
    if (blog) {
      setData(blog);
      return;
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="logo"
              width={180}
              className="w-[130px] sm:w-auto cursor-pointer"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="arrow" width={20} />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data?.title}
          </h1>
          <Image
            src={data.author_img}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white rounded-sm"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p className="">{data?.description}</p>
        {[1, 2, 3].map((item) => {
          return (
            <>
              <h3 className="my-5 text-[18px] font-semibold">
                Step {item}: Self-Reflection and Goal.
              </h3>
              <p className="my-3">
                Learn How To Build A Full Stack Blog Website Using Next JS And
                MongoDB | Create A Full Stack Blog App / News website using Next
                JS | Next JS Project tutorial step by step 2024
              </p>
              <p className="my-3">
                Learn How To Build A Full Stack Blog Website Using Next JS And
                MongoDB | Create A Full Stack Blog App / News website using Next
                JS | Next JS Project tutorial step by step 2024
              </p>
            </>
          );
        })}
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB
          | Create A Full Stack Blog App / News website using Next JS | Next JS
          Project tutorial step by step 2024
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footter />
    </>
  );
};

export default BlogDetail;
