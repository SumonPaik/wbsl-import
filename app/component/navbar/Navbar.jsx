"use client"
import styles from "@/app/component/navbar/navbar.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"
import { MdAddBox, MdAddCircle, MdAddTask, MdLabel } from "react-icons/md";




const Navbar = () => {
  let pathname = usePathname();
  let router = useRouter();
  return (
    <nav className={styles.container}>
       <div className={styles.pathName}>
          <MdLabel />
          <span>{pathname.split("/").pop()}</span>
       </div>
       <div>
          <Link href="/dashboard/create"
           className={`${styles.btn} ${"btn"}`}
           >
            <MdAddCircle />
            New Job
          </Link>
       </div>
    </nav>
  )
}

export default Navbar;

// export const metadata= {  
  
//   title: pathname.split("/").pop()
// }
