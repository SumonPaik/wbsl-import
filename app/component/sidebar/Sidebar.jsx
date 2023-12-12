"use client"
import styles from "@/app/component/sidebar/sidebar.module.css";
import { menuList } from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPerson4 } from "react-icons/md";

const Sidebar = () => {
    const pathname = usePathname();
    console.log(pathname);

  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <MdPerson4 className={styles.avatar}/>
            <div className={styles.userinfo}>
                <p>User Name</p>
                <p className={styles.userTitle}>Administrator</p>
            </div>
        </div>

      {/* <p>{menuList.title}</p> */}
      <ul className={styles.list}>
        {menuList.list.map((item) => (
          <li className={styles.listItems} key={item.title}>
            <Link className={`${styles.link} ${pathname === item.path && styles.active}`} href={item.path}>
              {item.icon}
              <span className={styles.linkName}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar