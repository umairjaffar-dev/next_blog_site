"use client";
import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

export type BlogType = {
  author: string;
  authorImg: string;
  category: string;
  date: string;
  description: string;
  image: string;
  title: string;
  _id: string;
};

const menus = ["All", "Technology", "Startup", "Lifestyle"];
const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<Array<BlogType>>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log("blogs", blogs);
  if (blogs.length === 0) return <div>Blogs List Empty</div>;

  const filterBlogsData = blogs.filter((item) => {
    if (menu === "All") {
      return item;
    }
    return item.category === menu;
  });

  return (
    <div>
      <div className="flex justify-center gap-5 my-10">
        {menus.map((item) => {
          return (
            <button
              key={item}
              className={
                menu === item ? "bg-black text-white py-1 px-4 rounded-sm" : ""
              }
              onClick={() => setMenu(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filterBlogsData.map((item) => {
          return <BlogItem key={item._id} blogData={item} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
