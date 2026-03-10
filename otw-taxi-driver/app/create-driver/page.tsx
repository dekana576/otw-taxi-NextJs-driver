"use client";

import {
  addToast,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@heroui/react";
import Link from "next/link";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const base_url =
  "https://22f766af-a68f-4e84-bab4-b02cde04069a.mock.pstmn.io/auth/register";



function MyInput({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <Input
      {...field}
      label={label}
      variant="bordered"
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error}
      isRequired
    />
  );
}

function MyTextarea({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <Textarea
      {...field}
      label={label}
      variant="bordered"
      isInvalid={meta.touched && !!meta.error}
      errorMessage={meta.touched && meta.error}
      isRequired
    />
  );
}


export default function CreateDriver() {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    throw error;
  }

  return (
    <div className="my-5">
      <Card>
        <CardHeader>
          <div className="text-center w-full my-3">
            <strong className="text-2xl font-[Sora]">CREATE DRIVER</strong>
          </div>
        </CardHeader>

        <CardBody>
          <Formik
            initialValues={{
              name: "",
              email: "",
              gender: "",
              address: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              gender: Yup.string().required("Gender is required"),
              address: Yup.string().required("Address is required"),
            })}
            onSubmit={async (values, { resetForm }) => {
              try {
                const response = await axios.post(base_url, values);

                console.log("Driver created:", response.data);
                addToast({
                  title: "Create Driver Success",
                  description: "Driver Created Successfully",
                  color: "success",
                  timeout: 3000,
                  shouldShowTimeoutProgress: true,
                });
                resetForm();
              } catch (err: any) {
                const message =
                  err.response.data.message ||
                  err.message ||
                  "Something went wrong";

                addToast({
                  title: "Create Driver Failed",
                  description: message,
                  color: "danger",
                  timeout: 3000,
                  shouldShowTimeoutProgress: true,
                });
              }
            }}
          >
            {({ isSubmitting, setFieldValue, values, errors, touched }) => (
              <Form className="flex flex-col gap-5 px-5">
                <MyInput name="name" label="Name"/>

                <MyInput name="email" label="Email" />

                <RadioGroup
                  label="Select gender"
                  value={values.gender}
                  onValueChange={(value) => setFieldValue("gender", value)}
                  isInvalid={touched.gender && !!errors.gender}
                  errorMessage={touched.gender && errors.gender}
                  isRequired
                >
                  <div className="flex gap-5">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </div>
                </RadioGroup>

                <MyTextarea name="address" label="Address" />

                <div className="flex flex-row-reverse gap-2 my-5">
                  <Button
                    type="submit"
                    color="primary"
                    isLoading={isSubmitting}
                    className="w-70 md:w-30"
                  >
                    Submit
                  </Button>

                  <Link href="/">
                    <Button color="danger">Cancel</Button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}
