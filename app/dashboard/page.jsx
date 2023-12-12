
import Link from "next/link"
import styles from "./dashboard.module.css"
import { MdDeleteForever, MdEdit } from "react-icons/md"

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SL#</th>
            <th>JOB No.</th>
            <th>MBL No.</th>
            <th>ORIGIN COUNTRY</th>
            <th>ON BOARD DT.</th>
            <th>ETA </th>
            <th>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>001</td>
          <td>ABCDEFGH</td>
          <td>CHINA, HK</td>
          <td>12-12-23</td>
          <td>01-01-24</td>
          <td className={styles.link}>
            <Link className="btn" href="#">
              <MdEdit />
              Details
            </Link>
            <Link className="btnedit" href="#">
              <MdDeleteForever />
              Modify
            </Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DashboardPage