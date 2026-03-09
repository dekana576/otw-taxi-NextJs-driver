"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-200 flex justify-center items-center">
      <div className="w-100">
        <Card>
          <CardHeader>
            <div className="items-center justify-center flex flex-col">
              <Button variant="ghost" color="danger">
                TES HERO UI
              </Button>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                debitis suscipit corrupti ipsam quae, assumenda labore minima.
                Dignissimos adipisci nesciunt debitis maxime expedita dicta
                nihil a. Recusandae illum obcaecati quae!
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <h1>Card BODY</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              animi illum modi eum voluptatem rerum quae nesciunt. Culpa
              inventore officia cum dicta nulla fugiat laboriosam temporibus
              laborum reprehenderit obcaecati. Fugiat!
            </p>
          </CardBody>
        </Card>
        <div className="h-100 overflow-clip justify-center items-center flex rounded-2xl my-5">
          <Image src="img/image.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
}
