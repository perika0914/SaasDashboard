import { useEffect, useState } from "react";

export const useJobPolling = () => {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus((prev) => {
        if (prev === "pending") return "processing";
        if (prev === "processing") return "completed";
        return prev;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return status;
};