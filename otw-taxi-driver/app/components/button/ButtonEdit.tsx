"use client";


import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function ButtonEdit() {
  return (
    <Button isIconOnly variant="ghost" color="warning" size="sm">
      <FontAwesomeIcon icon={faPenToSquare} />
    </Button>
  );
}
