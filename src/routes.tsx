import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/LoginPage";
import withLayout from "./hocs/withLayout";
import BaseLayout from "./layouts/BaseLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

const HomeWithLayout = withLayout(HomePage, BaseLayout);
const LoginWithLayout = withLayout(LoginPage, AuthLayout);
const DashboardWithLayout = withLayout(DashboardPage, AdminLayout);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeWithLayout />,
  },
  {
    path: "/login",
    element: <LoginWithLayout />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardWithLayout />
      </PrivateRoute>
    ),
  },
];

export default routes;
