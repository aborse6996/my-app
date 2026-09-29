"use client";
import { redirect, RedirectType } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

import icon from "@/assets/icon.jpg";

export default function NavigationBar() {
  const navigationButton = (name: string) => {
    return (
      <button
        className="hover:text-green-500"
        onClick={() => redirect(`/${name}`, RedirectType.push)}
      >
        {name}
      </button>
    );
  };

  const router = useRouter();

  return (
    <div className="py-4 flex gap-30 items-center justify-between bg-gray-100 px-15">
      <div className="flex gap-2">
        <Image src={icon} alt="Logo" />
        <div className="text-xl font-bold">Nextcent</div>
      </div>
      <div className="flex gap-15">
        {navigationButton("Home")}
        {navigationButton("Service")}
        {navigationButton("Feature")}
        {navigationButton("Product")}
        {navigationButton("Testimonial")}
        {navigationButton("FAQ")}
      </div>
      <div className="flex gap-5">
        <button
          className="text-green-500 rounded-lg hover:bg-green-300 hover:text-white px-4 py-2"
          onClick={() => router.push("./login")}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-300"
          onClick={() => router.push("./register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
