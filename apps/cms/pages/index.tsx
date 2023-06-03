import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function index() {
  const { push } = useRouter();

  useEffect(() => {
    push("/login");
  }, []);
  return <div>index</div>;
}
