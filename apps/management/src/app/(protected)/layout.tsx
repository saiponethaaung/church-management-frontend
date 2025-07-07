import { checkSession } from "@utils/auth/auth";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkSession();

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
