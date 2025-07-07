import { Button, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

interface IProps {
  opened: boolean;
  close: (complete: boolean) => void;
}

export function MemberCreateModal({ opened, close }: IProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      dob: "",
      image: "",
      phone: "",
    },
    validate: {
      name: (value) => {
        if (value.trim() === "") {
          return "Name is required!";
        }

        return null;
      },
      email: (value) => {
        // if (value.trim() === "") {
        //   return "Email is required!";
        // }

        return null;
      },
      dob: (value) => {
        // if (value.trim() === "") {
        //   return "Date of birth is required!";
        // }

        return null;
      },
      image: (value) => {
        // if (value.trim() === "") {
        //   return "Image is required!";
        // }

        return null;
      },
      name: (value) => {
        // if (value.trim() === "") {
        //   return "Name is required!";
        // }

        return null;
      },
    },
  });

  const createMemberCallback = async ({}: {}) => {};

  return (
    <Modal
      opened={opened}
      onClose={() => close(false)}
      title="Create Member"
      centered
    >
      <form onSubmit={form.onSubmit(createMemberCallback)}>
        <Button fullWidth mt="xl" size="sm" type="submit" disabled={loading}>
          Create
        </Button>
      </form>
    </Modal>
  );
}
