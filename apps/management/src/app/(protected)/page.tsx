"use client";
import { Anchor, Button } from "@mantine/core";
import { logout } from "@utils/auth/auth";
import Link from "next/link";

export default function Home() {
  const logoutFunc = () => {
    logout();
  };

  return (
    <>
      <div>Hello world s</div>
      <Button onClick={logoutFunc}>Logout</Button>
      <Anchor component={Link} href="/chruch-1">
        Church page
      </Anchor>
    </>
  );
}
