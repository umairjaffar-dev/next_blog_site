"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../Assets/assets";
import { title } from "process";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  category: "Startup",
  author: "umairjaffar",
  authorImg: "/author_img.png",
};
const AddProduct = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState(initialState);

  const onChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image ?? "");
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message); // show success
      setData(initialState);
      setImage(null);
    } else {
      toast.error("Error");
    }
  };

  return (
    <form className="pt-5 sm:pt-12 px-5 sm:pl-16" onSubmit={onSubmitHandler}>
      <p className="text-lg capitalize">Upload thumbnail</p>
      <label htmlFor="image">
        <Image
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt=""
          className="mt-4"
        />
      </label>
      <input
        type="file"
        id="image"
        hidden
        required
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            setImage(files[0]);
          }
        }}
      />
      <p className="text-xl mt-4">Blog Title</p>
      <input
        type="text"
        placeholder="Type here"
        required
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        name="title"
        value={data.title}
        onChange={onChangeHandler}
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        placeholder="Write some text here..."
        rows={4}
        required
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        name="description"
        value={data.description}
        onChange={onChangeHandler}
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        value={data.category}
        onChange={onChangeHandler}
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>
      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        Add
      </button>
    </form>
  );
};

export default AddProduct;
