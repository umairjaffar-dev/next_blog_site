import Image from "next/image";
import { assets } from "../../../Assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <data className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
        <h3 className="font-medium">Admin Panel</h3>
        <Image src={assets.profile_icon} width={40} alt="" />
      </data>
    </div>
  );
};

export default Header;
