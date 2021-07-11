import React from "react";
import { Redirect } from "react-router-dom";
import Home from "./pages/home/home/Home";
import DetailCourse from "./pages/home/detailCourse/DetailCourse";
import FormSignIn from "./pages/home/formSignIn/FormSignIn";
import FormSignUp from "./pages/home/formSignUp/FormSignUp";
import DetailCart from "./pages/home/detailCart/DetailCart";
import allCourse from "./pages/home/course/AllCourse";
import ProfileUser from "./pages/home/profileUser/ProfileUser";
import CoursesManagement from "./pages/admin/views/CoursesManagement";
import UsersManagement from "./pages/admin/views/UsersManagement";
import Blog from "./pages/home/blog/Blog";
import About from "./pages/home/about/about";
import Dashboard from "./pages/admin/views/Dashboard";
import UserWaiting from "./pages/admin/views/UserWaiting";

export const routesHome = [
  { path: "/", exact: true, component: Home },
  { path: "/home", exact: true, component: Home },
  { path: "/home/detail-cart", exact: false, component: DetailCart },
  { path: "/home/dang-nhap", exact: false, component: FormSignIn },
  { path: "/home/dang-ky", exact: false, component: FormSignUp },
  {
    path: "/home/courses/:cateCode?",
    exact: false,
    component: allCourse,
  },
  {
    path: "/home/detail-course/:id/:fee",
    exact: false,
    component: DetailCourse,
  },
  { path: "/home/profile", exact: false, component: ProfileUser },
  { path: "/home/blog", exact: false, component: Blog },
  { path: "/home/home-about", exact: false, component: About },
];

export const routesAdmin = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/admin/dashboard" />,
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/courses",
    component: CoursesManagement,
  },
  {
    path: "/admin/user",
    component: UsersManagement,
  },
  {
    path: "/admin/user-waiting",
    component: UserWaiting,
  },
];
