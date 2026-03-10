"use client";

import { Image } from "@heroui/react";

export default function HomeImage() {
  return (
    <div className="h-100 overflow-hidden justify-center items-center flex rounded-2xl my-5">
      <Image src="/img/image.png" alt="banner" />
    </div>
  );
}
