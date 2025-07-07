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
import { useMutation, gql } from "@apollo/client";

export default function RegisterForm() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const loginMutaitionGQL = gql`
    mutation Login {
      login(
        loginData: { email: "{{USER_EMAIL}}", password: "{{USER_PASSWORD}}" }
      ) {
        accessToken
      }
    }
  `;
  const [loginMutation, {}] = useMutation(loginMutaitionGQL);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  const login = async () => {
    // alert("Login page");

    await loginMutation({
      variables: {
        USER_EMAIL: "saiponethaaung@gmail.com",
        USER_PASSWORD: "admin123",
      },
    });

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 3000);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Place in Heart CM!
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
          onClick={() => login()}
          disabled={processing}
        >
          Register
        </Button>

        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor<"a"> href="/login" fw={700}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
