"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  isBlank,
  isValidEmail,
  isValidPassword,
  registerUser,
} from "@/api/api";

import TypingEffect from "../components/animation/TypingEffect";
import LettersPullUp from "../components/animation/LettersPullUp";
import FadeDivUp from "../components/animation/FadeUpDiv";
import Blurin from "../components/animation/Blurin";
import FadeDownButton from "../components/animation/FadeDownButton";

import BGimage from "@/assets/register/Background.jpg";
import google from "@/assets/loginpage/google.svg";
import facebook from "@/assets/loginpage/facebook.svg";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const registrationSuccess = () => {
    alert("Registration successful!");
    router.push("/login");
  };

  const handleRegister = async () => {
    try {
      const result = await registerUser({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
      registrationSuccess();
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Something went wrong.");
      }
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const onSubmit = async () => {
    if (
      isBlank(name) ||
      isBlank(email) ||
      isBlank(password) ||
      isBlank(confirmpassword)
    ) {
      alert("Please fill in all fields");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
    } else if (confirmpassword !== password) {
      alert("Password and Confirm Password are different");
    } else if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters long");
    } else {
      handleRegister();
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Image src={BGimage} alt="img" className="w-full h-full" />
      </div>
      <div className="w-1/2 flex flex-col bg-[#160430] p-10 gap-10">
        <div className="text-7xl text-white font-bold">
          <LettersPullUp text="SIGN IN" delay={0} />
        </div>
        {/* Name input */}
        <div className="flex flex-col gap-5">
          <div className="text-xl text-white">
            <TypingEffect text="Enter your name" delay={0.4} />
          </div>
          <FadeDivUp className="flex w-full" delay={2.6}>
            <input
              type="text"
              placeholder="Enter your name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#261046] text-white p-4 rounded-2xl w-full"
            />
          </FadeDivUp>
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-5">
          <div className="text-xl text-white">
            <TypingEffect text="Sign in with email address" delay={0.4} />
          </div>
          <FadeDivUp className="flex w-full" delay={2.8}>
            <input
              type="text"
              placeholder="yourname@google.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#261046] text-white p-4 rounded-2xl w-full"
            />
          </FadeDivUp>
        </div>

        {/* Password input */}
        <div className="flex flex-col gap-5">
          <div className="text-xl text-white">
            <TypingEffect text="Enter your new password here" delay={0.4} />
          </div>
          <FadeDivUp className="flex w-full" delay={3}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="bg-[#261046] text-white p-4 rounded-2xl w-full"
            />
          </FadeDivUp>
        </div>

        {/* Password confirm input */}
        <div className="flex flex-col gap-5">
          <div className="text-xl text-white">
            <TypingEffect text="Re-Enter your new password here" delay={0.4} />
          </div>
          <FadeDivUp className="flex w-full" delay={3.2}>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your Password"
              className="bg-[#261046] text-white p-4 rounded-2xl w-full"
            />
          </FadeDivUp>
        </div>

        {/* Sign up button */}
        <div>
          <Blurin delay={3.5}>
            <button
              className="text-white text-2xl w-full p-4 rounded-2xl bg-linear-to-r from-purple-600 to-pink-500 transition-colors duration-500 hover:from-pink-500 hover:to-purple-600"
              onClick={onSubmit}
            >
              Sign Up
            </button>
          </Blurin>
        </div>
        <motion.div
          className="bg-gray-800 h-0.5 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            delay: 4,
            ease: [0.22, 0.25, 0.05, 1],
          }}
        ></motion.div>
        <div className="flex flex-col gap-5">
          <FadeDivUp className="text-white" delay={5}>
            <h1>or continue with</h1>
          </FadeDivUp>

          <div className="flex gap-3">
            <FadeDownButton
              image={google}
              className={
                "bg-purple-800 py-3 px-15 rounded-xl hover:bg-purple-500 text-white w-1/2 flex justify-center"
              }
              delay={5.2}
              text="Google"
            />
            <FadeDownButton
              image={facebook}
              className={
                "bg-purple-800 py-3 px-15 rounded-xl hover:bg-purple-500 text-white w-1/2 flex justify-center"
              }
              delay={5.2}
              text="Facebook"
            />
          </div>
          <div className="text-white flex gap-1">
            <LettersPullUp text="By registering you agree with our" delay={0} />
            <div className="text-purple-500">
              <LettersPullUp text="Terms and Conditions" delay={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
