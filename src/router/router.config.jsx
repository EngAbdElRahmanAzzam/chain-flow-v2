//third-party 
import { createBrowserRouter } from "react-router-dom";

//client imports
import { ProtectedRoute } from  "../Shared/Components/Atoms/ProtectedRoute.jsx"

import AuthLayout from "../Features/Auth/AuthLayout.jsx";
import SignupTemp from "../Features/Auth/Components/Templates/SignupTemp.jsx";
import LoginTemp from "../Features/Auth/Components/Templates/LoginTemp.jsx";
import Verify from "../Features/Auth/Verify.jsx";
import Notfound from "../Shared/Notfound/Notfound.jsx"
import Home from "../Features/Home/Home.jsx";
import Layout from "../Features/Layout/Layout.jsx";

import DashboardPage from "../Features/Dashboard/pages/DashboardPage.jsx";
import InventoryPage from '../Features/Inventory/pages/InventoryPage.jsx';
import ShipmentsPage from "../Features/Shipments/pages/ShipmentsPage.jsx";
import OrdersPage from "../Features/Orders/pages/OrdersPage.jsx";
import DocumentsPage from '../Features/Documents/pages/DocumentsPage.jsx';
import PartnersPage from '../Features/Partners/pages/PartnersPage.jsx';
import EmployeesPage from "../Features/Employees/pages/EmployeesPage.jsx";
import EmployeeInfo from "../Features/EmployeeInfo/EmployeeInfo.jsx";
import EmployeeChat from "../Features/EmployeeChat/employeeChat.jsx";

import NotificationsPage from "../Features/Notifications/pages/NotificationsPage.jsx";
import Support from '../Features/support/SupportPage.jsx';
import Logout from "../Features/logout/Logout.jsx";

import Settings from "../Features/Settings/Settings.jsx";
import GeneralPage from "../Features/Settings/general/pages/GeneralPage.jsx";
import UserProfilePage from '../Features/Settings/userProfile/pages/UserProfilePage.jsx';
import SecurityPage from '../Features/Settings/security/pages/SecurityPage.jsx';
import NotificationsSettingsPage from "../Features/Settings/notificationSettings/pages/NotificationSettingsPage.jsx";
import IntegrationsPage from "../Features/Settings/integrations/pages/IntegrationsPage.jsx";
import BillingSubscription from "../Features/Settings/BillingSubscription/BillingSubscription.jsx";
import AdminDashboardPage from '../Features/Admin/AdminDashboard/pages/AdminDashboardPage.jsx';
import PlansPage from '../Features/Admin/Plans/pages/PlansPage.jsx';
import CompaniesPage from '../Features/Admin/Companies/pages/CompaniesPage.jsx';
import UserManagementPage from '../Features/Admin/UserManagement/pages/UserManagementPage.jsx';
import Admin from "../Features/Admin/Admin.jsx";


export const routes = createBrowserRouter([
    { path: "" , element: <Home />},
    { path: "/auth" , element: <AuthLayout /> ,  children: [
        { path: "login", element: <LoginTemp/> },
        { path: "signup", element: <SignupTemp/> },
        { path: "verify", element: <Verify /> },
    ],
    },
    {  path: "/pages" ,  element: <Layout /> ,  children: [
        { path: "dashboard" , element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
        { path: "inventory", element: <ProtectedRoute><InventoryPage /></ProtectedRoute> },
        { path: "shipments", element: <ProtectedRoute><ShipmentsPage /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><OrdersPage /></ProtectedRoute> },
        { path: "documents", element: <ProtectedRoute><DocumentsPage /></ProtectedRoute> },
        { path: "partners", element: <ProtectedRoute><PartnersPage /></ProtectedRoute> },
        { path: "employees", element: <ProtectedRoute><EmployeesPage /></ProtectedRoute> },
        { path: "notifications", element: <ProtectedRoute><NotificationsPage /></ProtectedRoute> },
        { path: "support", element: <ProtectedRoute><Support /></ProtectedRoute> },
        { path: "employees/employeeInfo", element: <ProtectedRoute><EmployeeInfo/></ProtectedRoute> },
        { path: "employees/employeeChat", element: <ProtectedRoute><EmployeeChat/></ProtectedRoute> },
        { path: "logout", element: <ProtectedRoute><Logout /></ProtectedRoute> },
        { path: "settings", element: <ProtectedRoute><Settings /></ProtectedRoute> , children: [
            {path: "general", element: <ProtectedRoute><GeneralPage /></ProtectedRoute>},
            {path: "userprofile", element: <ProtectedRoute><UserProfilePage /></ProtectedRoute>},
            {path: "security", element: <ProtectedRoute><SecurityPage /></ProtectedRoute>},
            {path: "notificationSettings", element: <ProtectedRoute><NotificationsSettingsPage /></ProtectedRoute>},
            {path: "integrations", element: <ProtectedRoute><IntegrationsPage /></ProtectedRoute>},
            {path: "billingSubscription", element: <ProtectedRoute><BillingSubscription /></ProtectedRoute>},
            ]
        },
        { path: "admin", element: <ProtectedRoute><Admin /></ProtectedRoute> , children: [
            {path: "dashboard", element: <ProtectedRoute><AdminDashboardPage /></ProtectedRoute>},
            {path: "userManagement", element: <ProtectedRoute><UserManagementPage /></ProtectedRoute>},
            {path: "companies", element: <ProtectedRoute><CompaniesPage /></ProtectedRoute>},
            {path: "plans", element: <ProtectedRoute><PlansPage /></ProtectedRoute>},
            ]
        },
        { path: "*", element: <Notfound /> }, // صفحة غير موجودة
        ],
    },
]);