import { AppNavbar } from "@app/components/layout/nav/nav";
import styles from "./layout.module.scss";
import { Header } from "@app/components/layout/header/header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.rootCon}>
      <AppNavbar />
      <div className={styles.content}>
        <Header />
        <div className={styles.contentCon}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
