"use client";
import { useState } from "react";
import { blog_data } from "../../Assets/assets";
import BlogItem from "./BlogItem";

const menus = ["All", "Technology", "Startup", "Lifestyle"];
const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const filterBlogsData = blog_data.filter((item) => {
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
          return <BlogItem key={item.id} blogData={item} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
