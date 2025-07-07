"use client";
import {
  Alert,
  Button,
  Card,
  LoadingOverlay,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconInfoCircle } from "@tabler/icons-react";
import { useCreateChurchMutation } from "@utils/graphql/generated/schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function CreateChurch() {
  const router = useRouter();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
    validate: {
      name: (value) => {
        if (value.trim() === "") {
          return "Name is required";
        }
        return null;
      },
    },
  });

  const [
    createChurch,
    { loading: createLoading, error, data: createdChurch, reset },
  ] = useCreateChurchMutation();

  const createChurchHook = async (values: { name: string }) => {
    await createChurch({
      variables: {
        name: values.name,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }).catch((_) => {});
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        if (error) {
          reset();
        }
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (createdChurch) {
      router.push(`/${createdChurch.createChurch.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdChurch]);

  return (
    <div>
      <Card withBorder radius="md" p="xl">
        <Text fz="lg" fw={500}>
          Create Church
        </Text>
        <form
          onSubmit={form.onSubmit(createChurchHook)}
          style={{ marginTop: "var(--mantine-spacing-sm)" }}
        >
          <TextInput
            {...form.getInputProps("name")}
            placeholder="Church Name"
            label="Church Name"
            style={{ minWidth: "300px" }}
            disabled={createLoading}
            required
          />
          <Button
            type="submit"
            disabled={createLoading}
            style={{ marginTop: "var(--mantine-spacing-sm)" }}
          >
            Create
          </Button>
          <LoadingOverlay
            visible={createLoading}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
        </form>
      </Card>
      {error && (
        <div
          style={{
            position: "fixed",
            bottom: "var(--mantine-spacing-md)",
            right: "var(--mantine-spacing-md)",
          }}
        >
          <Alert
            variant="light"
            color="red"
            title="Error"
            withCloseButton={true}
            onClose={reset}
            icon={<IconInfoCircle />}
          >
            {error?.message}
          </Alert>
        </div>
      )}
    </div>
  );
}
