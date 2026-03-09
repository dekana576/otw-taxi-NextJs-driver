"use client";

import { faSquarePlus } from "@fortawesome/free-solid-svg-icons/faSquarePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function ButtonCreateDriver() {
  return (
    <Link href="/create-driver">
      <Button className="m-3" variant="ghost" color="warning">
        <FontAwesomeIcon icon={faSquarePlus} size="xl" /> Create Driver
      </Button>
    </Link>
  );
}
