import Image from "next/image";
import styles from "./page.module.css";
import { SidebarComponent } from "@/src/Sidebar";

import { NavbarComponent } from "@/src/navbar";

export default function Home() {
  return (
    <div className={styles.layout}>
      <SidebarComponent />

      <div>
        <NavbarComponent />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={styles.whitebox}
          >
            <div className={styles.container}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
