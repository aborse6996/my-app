"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isBlank, isValidEmail, isValidPassword, loginUser } from "@/api/api";

import newBG from "@/assets/loginpage/newBG.jpg";
import google from "@/assets/loginpage/google.svg";
import facebook from "@/assets/loginpage/facebook.svg";
import instagram from "@/assets/loginpage/instagram.svg";
import logo from "@/assets/loginpage/loginsvg.svg";

import TypingEffect from "@/app/components/animation/TypingEffect";
import LettersPullUp from "@/app/components/animation/LettersPullUp";
import FadeDownButton from "@/app/components/animation/FadeDownButton";
import Blurin from "@/app/components/animation/Blurin";

const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginSuccess = ({name} : {name:string}) => {
    alert("Login successful!");
    router.push(`/loginsuccess?name=${encodeURIComponent(name)}`);
  };

  const handleLogin = async () => {
    try {
      const result = await loginUser({
        email: email.trim(),
        password: password.trim(),
      });
      // console.log(result.name)
      loginSuccess({name: result.name});
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Something went wrong.");
      }
    }
    setPassword("");
  };

  const onSubmit = () => {
    if (isBlank(email) || isBlank(password)) {
      alert("Please fill in all fields");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      handleLogin();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={newBG} alt="background" fill className="object-cover" />

      <div className="relative z-10 flex h-dvh justify-center items-center">
        <motion.div
          className="flex flex-col text-white bg-white/20 backdrop-blur-sm gap-8 px-20 py-20 rounded-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
          }}
        >
          <motion.div
            className="w-full flex justify-center"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image src={logo} alt="logo" width={80} height={80} />
          </motion.div>
          <motion.h1
            className="font-bold"
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            Login
          </motion.h1>
          <div className="gap-2 flex flex-col">
            {/* Email Input */}
            <motion.div
              className="flex flex-col"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
            >
              <h1>Email</h1>
              <input
                type="text"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-white rounded-sm text-gray-900 border-none outline-none focus:outline-none focus:ring-0 px-2"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div
              className="flex flex-col"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
            >
              <h1>Password</h1>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-white rounded-sm text-gray-900 border-none outline-none focus:outline-none focus:ring-0 px-2"
              />
            </motion.div>

            {/* Forgot Password button */}
            <button className="w-fit text-sm text-gray-200 hover:text-blue-950" onClick={() => {router.push("/forgotpassword")}}>
              <TypingEffect text="Forgot Password?" delay={2.1} />
            </button>
          </div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 3,
            }}
          >
            {/* Sign in button */}
            <button
              className="bg-blue-800 rounded-xl py-1 hover:bg-blue-950 w-full"
              onClick={onSubmit}
            >
              <h1>Sign in</h1>
            </button>
          </motion.div>

          <div className="w-full flex justify-center text-sm text-gray-200">
            <LettersPullUp text="or continue with" delay={3.5} />
          </div>
          <div className="flex justify-between">
            <FadeDownButton
              image={google}
              className={"bg-white py-2 px-5 rounded-xl hover:bg-gray-300"}
              delay={5.2}
            />
            <FadeDownButton
              image={facebook}
              className={"bg-white py-2 px-5 rounded-xl hover:bg-gray-300"}
              delay={4.7}
            />
            <FadeDownButton
              image={instagram}
              className={"bg-white py-2 px-5 rounded-xl hover:bg-gray-300"}
              delay={4.2}
            />
          </div>
          <Blurin delay={5.5}>
            <div className="text-sm text-gray-200">
              Don't have an account yet?{" "}
              <a className="text-white hover:text-blue-700" href="/register">
                Register for free
              </a>
            </div>
          </Blurin>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
