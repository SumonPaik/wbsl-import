
import styles from "./page.module.css";

export default function HomePage() {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>User Login</h2>
        <div className={styles.label}>
          <label>User Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className={styles.label}>
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <button className={`${styles.loginbtn} ${"btn"}`}> 
          Login
        </button>
      </form>
    </div>
  )
}
