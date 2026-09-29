"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  changePassword,
  isBlank,
  isValidEmail,
  isValidPassword,
  loginUser,
} from "@/api/api";

import BG from "@/assets/forgotpassword/bg.jpg";
import Image from "next/image";
import LettersPullUp from "../components/animation/LettersPullUp";
import FadeDivUp from "../components/animation/FadeUpDiv";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const router = useRouter();

  const backtologin = () => {
    router.push("/login");
  };

  const handleVerify = async () => {
    if (isBlank(email) || isBlank(password)) {
      alert("Please enter the email and password");
      return;
    }

    try {
      const result = await loginUser({
        email: email.trim(),
        password: password.trim(),
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Something went wrong.");
      }
      return;
    }
    const verified = true;
    if (verified) {
      setStep(2);
    } else {
      setError("Email or current password is incorrect.");
    }
  };

  const handleChangePassword = async () => {
    if (!isValidPassword(newpassword)) {
      alert("Enter a valid password");
    }
    if (newpassword !== confirmpassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const result = await changePassword({
        email: email.trim(),
        newpassword: newpassword.trim(),
      });
      setStep(3);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Something went wrong.");
      }
    }
    setEmail("");
    setPassword("");
    setNewpassword("");
    setConfirmpassword("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src={BG} alt="background" fill className="object-cover" />
      <div className="relative z-10 flex h-dvh justify-center items-center">
        <AnimatePresence mode="wait">
          {/* Email and Password Verify */}
          {step === 1 && (
            <motion.div
              key="verify"
              className="flex flex-col text-white bg-white/20 backdrop-blur-sm gap-8 px-20 py-20 rounded-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
            >
              {/* Change Password Title */}
              <h1 className="text-4xl font-bold">
                <LettersPullUp text="Verify Account" delay={0.5} />
              </h1>

              {/* Enter Email */}
              <div className="flex flex-col gap-3">
                <motion.div>
                  <h1>Email</h1>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="focus:outline-none bg-gray-300 text-black p-2 rounded-2xl w-full"
                  />
                </motion.div>

                {/* Enter Password */}
                <motion.div>
                  <h1>Current Password</h1>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="focus:outline-none bg-gray-300 text-black p-2 rounded-2xl w-full"
                  />
                </motion.div>
              </div>

              {/* Verify Button */}
              <motion.div>
                <button
                  className="flex w-full justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                  onClick={handleVerify}
                >
                  Verify
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* New Password Entry */}
          {step === 2 && (
            <motion.div
              key="new-password"
              className="flex flex-col text-white bg-white/20 backdrop-blur-sm gap-8 px-20 py-20 rounded-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
            >
              {/* Change Password Title */}
              <h1 className="text-4xl font-bold">
                <LettersPullUp text="Enter New Password" delay={0.5} />
              </h1>
              <div className="flex flex-col gap-3">
                {/* New password entry */}
                <motion.div>
                  <h1>Enter New Password</h1>
                  <input
                    type="password"
                    placeholder="Enter your email"
                    value={newpassword}
                    onChange={(e) => {
                      setNewpassword(e.target.value);
                    }}
                    className="focus:outline-none bg-gray-300 text-black p-2 rounded-2xl w-full"
                  />
                </motion.div>

                {/* Confirm password entry */}
                <motion.div>
                  <h1>Confirm New Password</h1>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={confirmpassword}
                    onChange={(e) => {
                      setConfirmpassword(e.target.value);
                    }}
                    className="focus:outline-none bg-gray-300 text-black p-2 rounded-2xl w-full"
                  />
                </motion.div>
              </div>
              <motion.div>
                <button
                  className="flex w-full justify-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Password change successful */}
          {step === 3 && (
            <motion.div
              key="password-change"
              className="flex flex-col text-white bg-white/20 backdrop-blur-sm gap-8 px-20 py-20 rounded-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
            >
              <h1 className="font-extrabold text-3xl text-gray-600">
                Password Change Successful!
              </h1>
              <FadeDivUp className="flex justify-center" delay={0.5}>
                <button
                  className="relative flex h-12.5 w-40 items-center justify-center overflow-hidden font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border before:border-gray-400 before:duration-100 before:ease-linear hover:bg-gray-400 hover:text-blue-600 hover:before:border-25"
                  onClick={backtologin}
                >
                  <span className="relative z-10">Back to Login</span>
                </button>
              </FadeDivUp>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ForgetPassword;
