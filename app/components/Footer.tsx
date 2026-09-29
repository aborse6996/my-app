import Image from "next/image";

import icon from "@/assets/icon.jpg";
import instagram from "@/assets/footer/instagram-2016-logo-svgrepo-com.svg";
import facebook from "@/assets/footer/facebook-color-svgrepo-com.svg";
import twitter from "@/assets/footer/twitter-color-svgrepo-com.svg";
import youtube from "@/assets/footer/youtube-color-svgrepo-com.svg";

const Button = ({ image }: { image: string }) => {
  return (
    <div>
      <button className="rounded-full p-2 bg-[#89939E]">
        <Image src={image} alt="insta" width={20} height={20} />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex bg-[#263238] px-[10%] pt-10 text-white pb-10">
      <div className="flex flex-col gap-5 w-1/2">
        <div className="flex gap-2">
          <Image src={icon} alt="icon" />
          <h1 className="text-4xl font-bold ">Nexcent</h1>
        </div>
        <div>
          <h1>Copyright © 2020 Nexcent Itd.</h1>
          <h1>All rights reserved</h1>
        </div>
        <div className="flex gap-5">
          <Button image={instagram} />
          <Button image={facebook} />
          <Button image={twitter} />
          <Button image={youtube} />
        </div>
      </div>
      <div className="flex justify-between w-1/2">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Company</h1>
          <div className="flex flex-col text-gray-400 items-start gap-1">
            <button>About us</button>
            <button>Blog</button>
            <button>Contact us</button>
            <button>Pricing</button>
            <button>Testimonials</button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Support</h1>
          <div className="flex flex-col text-gray-400 items-start gap-1">
            <button>Help center</button>
            <button>Terms of service</button>
            <button>Legal</button>
            <button>Privacy policy</button>
            <button>Status</button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Stay up to date</h1>
          <div className="flex">
            <input
              className="bg-gray-500 rounded-l-full py-2 px-3"
              placeholder="Your email address"
            />
            <button className="bg-gray-500 px-3 rounded-r-full hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
