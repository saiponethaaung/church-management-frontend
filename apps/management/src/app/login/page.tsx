import { checkGuest } from "@utils/auth/auth";
import LoginForm from "./loginForm";

export default async function loginPage() {
  await checkGuest();
  return <LoginForm />;
}
