"use client"

import { Suspense } from "react";
import AuthCallbackPageInner from "./AuthCallbackPageInner";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen"><p>Loading...</p></div>}>
      <AuthCallbackPageInner />
    </Suspense>
  );
}
