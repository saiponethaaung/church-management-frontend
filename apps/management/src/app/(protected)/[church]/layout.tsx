import { ChurchNavbar } from "./nav";
import styles from "./layout.module.css";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.rootCon}>
      <ChurchNavbar />
      <div>
        <header>header</header>
        <main>{children}</main>
      </div>
    </div>
  );
}
