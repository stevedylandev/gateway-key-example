"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [image, setImage]: any = useState();

  async function fetchImage(cid: string) {
    try {
      const data = JSON.stringify({
        cid: cid,
      });
      const res = await fetch(`/api/gateway`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      const blob = await res.blob();
      console.log(blob);
      const objectUrl = URL.createObjectURL(blob);
      setImage(objectUrl);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImage("QmVLwvmGehsrNEvhcCnnsw5RQNseohgEkFNN1848zNzdng");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {image && <Image src={image} alt="ipfs image" width={200} height={200} />}
    </main>
  );
}
