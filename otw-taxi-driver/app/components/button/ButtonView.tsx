"use client";

import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function ButtonView() {
  return (
    <Button isIconOnly variant="ghost" color="primary" size="sm">
      <FontAwesomeIcon icon={faEye} />
    </Button>
  );
}
