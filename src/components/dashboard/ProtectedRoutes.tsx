"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { StarknetContext } from "@/contexts/Usercontext";


interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { address, status } = useContext(StarknetContext);
  const router = useRouter();

  useEffect(() => {
    if (!address || status !== "connected") {
      router.push("/dashboard");
    }
  }, [address, status, router]);

  return <>{address && status === "connected" ? children : null}</>;
};

export default ProtectedRoute;
