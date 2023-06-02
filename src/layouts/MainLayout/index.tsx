import { ReactNode } from "react";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className={styles["layout-container"]}>
        <div className={styles["layout-header-top"]}></div>
        <div className={styles["layout-header"]}>
          <title>THE ALBUM STORE</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon/favicon.ico"
          ></link>
        </div>
        <div className={styles["layout-content"]}>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
