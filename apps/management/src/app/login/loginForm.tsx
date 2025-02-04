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

export default function LoginForm() {
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

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button
          fullWidth
          mt="xl"
          size="md"
          type="button"
          //   onClick={login}
          onClick={() => {
            alert(
              "mutation should be fired" +
                process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
            );
            login({
              variables: {
                email: "saiponethaaung@gmail.com",
                password: "sbu9Rf5W@",
              },
            });
          }}
          disabled={loading}
        >
          Login
        </Button>

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
