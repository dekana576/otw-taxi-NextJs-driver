"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import ButtonDelete from "./button/ButtonDelete";

interface Props {
  onConfirm: () => void;
  isLoading?: boolean;
}

export default function ConfirmDelete({ onConfirm, isLoading }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      <ButtonDelete onPress={onOpen}/>

      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>

          <ModalBody>
            Are you sure you want to delete this user?
          </ModalBody>

          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>

            <Button color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}