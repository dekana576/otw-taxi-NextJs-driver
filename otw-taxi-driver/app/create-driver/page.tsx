"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@heroui/react";
import Link from "next/link";

export default function CreateDriver() {
  return (
    <>
      <div className="my-5">
        <Card>
          <CardHeader>
            <div className="text-center w-full my-3">
              <strong className="text-2xl font-[Sora]">CREATE DRIVER</strong>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-5 px-5">
              <Input label="Name" variant="bordered"></Input>
              <Input label="Email" variant="bordered"></Input>
              <RadioGroup label="Select gender">
                <div className="gap-5 flex">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </div>
              </RadioGroup>
              <Textarea
                label="Address"
                placeholder="Enter your address"
                variant="bordered"
              />
            </div>
          </CardBody>
          <CardFooter>
            <div className="px-5 flex-row-reverse flex w-full gap-2 my-5">
              <Button color="primary" className="w-[300]">
                Submit
              </Button>
              <Link href={"/"}>
                <Button color="danger">Cancel</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
