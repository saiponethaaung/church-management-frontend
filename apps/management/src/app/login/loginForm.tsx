"use client";
import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./login.module.css";
import { useEffect, useState } from "react";
import {
  LoginMutation,
  useLoginMutation,
} from "@utils/graphql/generated/schema";
import { setCookie } from "@utils/auth/auth";
import { redirect } from "next/navigation";
import { useForm } from "@mantine/form";

export default function LoginForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        if (value.trim() === "") {
          return "Email is required";
        }
        return null;
      },
      password: (value) => {
        if (value.trim() === "") {
          return "Password is required";
        }
        return null;
      },
    },
  });
  const [domLoaded, setDomLoaded] = useState(false);
  const [login, { data, loading }] = useLoginMutation();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (data) {
      async function setToken(data: LoginMutation) {
        await setCookie({ access_token: data.login.accessToken });
        redirect("/");
      }

      setToken(data);
    }
  }, [data]);

  const loginCallback = async (data: { email: string; password: string }) => {
    login({ variables: { email: data.email, password: data.password } });
  };

  if (!domLoaded) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to Place in Heart
          <br />
          Management Portal!
        </Title>
        <form onSubmit={form.onSubmit(loginCallback)}>
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit" disabled={loading}>
            Login
          </Button>
        </form>
        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a"> href="/register" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
