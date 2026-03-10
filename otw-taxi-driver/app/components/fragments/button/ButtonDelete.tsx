"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";

export default function ButtonDelete({onClick, onPress} : any) {
  return (
    <Button isIconOnly variant="ghost" color="danger" size="sm" onClick={onClick} onPress={onPress}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
}
