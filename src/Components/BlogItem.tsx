import Image, { StaticImageData } from "next/image";
import { assets } from "../../Assets/assets";
import Link from "next/link";

export type BlogItemPropsType = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  date: number;
  category: string;
  author: string;
  author_img: StaticImageData;
};
const BlogItem = ({ blogData }: { blogData: BlogItemPropsType }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white hover:shadow-[-7px_7px_0px_#000000] border border-black">
      <Link href={`/blog/${blogData.id}`}>
        <Image
          src={blogData.image}
          alt="image"
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {blogData.category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {blogData.title}
        </h5>
        <p className="mb-3 text-gray-700 text-sm tracking-tight">
          {blogData.description}
        </p>

        <Link
          href={`/blog/${blogData.id}`}
          className="inline-flex items-center gap-2 cursor-pointer"
        >
          <span className="font-semibold text-center text-xs">Read More </span>
          <Image
            src={assets.arrow}
            alt="read more arrow"
            width={12}
            height={12}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
