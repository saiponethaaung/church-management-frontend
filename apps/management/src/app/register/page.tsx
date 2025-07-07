import { checkGuest } from "@utils/auth/auth";
import RegisterForm from "./registerForm";

export default async function registerPage() {
  await checkGuest();
  return <RegisterForm />;
}
