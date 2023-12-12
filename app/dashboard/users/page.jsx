import { MdDelete, MdDeleteForever, MdEdit, MdEditDocument, MdEditSquare } from "react-icons/md";
import styles from "./users.module.css";

import Link from "next/link";

const UsersPage = () => {

  const users = [
    {
      id: 1,
      username: "Sumon Paik",
      title: "Administrator",
      created: "12-Dec, 2023",
    },
    {
      id: 2,
      username: "Mark Rana",
      title: "Operator",
      created: "12-Dec, 2023",
    },
    {
      id: 3,
      username: "Aboni Jahan Anu",
      title: "Operator",
      created: "12-Dec, 2023",
    },
    {
      id: 4,
      username: "Jason Biswas",
      title: "Sales-man",
      created: "12-Dec, 2023",
    },

  ]

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SL#</th>
            <th>User Name</th>
            <th>Title</th>
            <th>Created At</th>
            <th className={styles.options}>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.title}</td>
                <td>{user.created}</td>
                <td className={styles.link}>
                  <Link className="btnedit" href="#">
                    <MdEdit />
                    Modify
                  </Link>
                  <Link className="btndelete" href="#">
                    <MdDeleteForever />
                    Delete
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage