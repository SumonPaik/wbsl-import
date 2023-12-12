import {MdAssignment, MdCurrencyExchange, MdDashboard, MdPeople, MdSupervisedUserCircle} from "react-icons/md"
export const menuList = {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "House-BL",
                path: "/dashboard/housebl",
                icon: <MdAssignment />
            },
            {
                title: "Invoices",
                path: "/dashboard/invoices",
                icon: <MdCurrencyExchange />
            }
        ]
    }