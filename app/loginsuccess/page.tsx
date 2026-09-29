"use client";

import { useSearchParams } from "next/navigation";

export default function LoginSuccess() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div>
      <h1>
        Welcome, {name}!
      </h1>

      <p>You have successfully logged in.</p>
    </div>
  );
}