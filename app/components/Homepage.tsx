import Image from "next/image";

import homepage from "@/assets/homepage.jpg";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center gap-40 pt-10">
        <div className= "flex flex-col gap-3">
            <div className="text-6xl font-bold text-gray-600">Lessons and Insights</div>
            <div className="text-6xl font-bold text-green-500">from 8 years</div>
            <div className="text-gray-400">Where to grow your business as a photographer: site or social media?</div>
            <div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-300">Register</button>
            </div>
            
        </div>
        <div>
            <Image src={homepage} alt="Homepage" />
        </div>
    </div>
  )
}

export default Homepage