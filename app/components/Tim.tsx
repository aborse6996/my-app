import Image from "next/image";

import tim1 from "@/assets/tim/tim1.jpg";
import logo from "@/assets/tim/Logo.jpg"
import logo1 from "@/assets/tim/Logo1.jpg"
import logo2 from "@/assets/tim/Logo2.jpg"
import logo3 from "@/assets/tim/Logo3.jpg"
import logo4 from "@/assets/tim/Logo4.jpg"
import logo5 from "@/assets/tim/Logo5.jpg"

const Tim = () => {
  return (
    <div className="flex pt-20 bg-gray-100 justify-center px-40 gap-20 pb-20">
      <Image src={tim1} alt="tim1" />
      <div className="flex flex-col gap-5">
        <p>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-green-600 font-bold text-2xl">Tim Smith</p>
        <p className="text-gray-500">British Dragon Boat Racing Association</p>
        <div className="flex justify-between">
          <Image src={logo} alt="logo" />
          <Image src={logo1} alt="logo" />
          <Image src={logo2} alt="logo" />
          <Image src={logo3} alt="logo" />
          <Image src={logo4} alt="logo" />
          <Image src={logo5} alt="logo" />
          <button>
            <h1 className="text-green-500 text-2xl font-bold hover:text-green-700">Meet all customers -&gt;</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tim;
