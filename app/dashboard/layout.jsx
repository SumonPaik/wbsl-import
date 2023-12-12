import styles from "@/app/dashboard/dashboard.module.css";
import Navbar from "../component/navbar/Navbar";
import Sidebar from "../component/sidebar/Sidebar";


const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.navbar}>
        <Navbar />
        {children}
      </div>
      {/* Footer */}
    </div>
  );
};

export default DashboardLayout;
