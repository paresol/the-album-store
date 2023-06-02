import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const MobileLayout = ({ children }: Props) => {
  const route = useRouter();
  return (
    <div className={styles["mobileLayout-container"]}>
      <div className={styles["mobileLayout-header"]}>
        <Image
          width={100}
          height={100}
          className={styles["mobileLayout-header_logo"]}
          src="/mobile/images/kerry-logo.svg"
          alt="kerry logo"
        />
        <div className="fontBold color-white">
          <Link href={`/th?cons=${route.query.cons}`} locale="th">
            TH
          </Link>
          <span> | </span>
          <Link href={`/en?cons=${route.query.cons}`} locale="en">
            EN
          </Link>
        </div>
      </div>
      <div className={styles["mobileLayout-content"]}>{children}</div>
    </div>
  );
};

export default MobileLayout;
