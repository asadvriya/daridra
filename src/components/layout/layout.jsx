//import Footer from "./footer/footer";
//import Header from "./header/header";
//import LogIn from "./login/login";
//import Nav from "./nav/nav";
import React from "react";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
const Footer = lazy(() => import("./footer/footer"));
const Header = lazy(() => import("./header/header"));
const LogIn = lazy(() => import("./login/login"));
const Nav = lazy(() => import("./nav/nav"));

export default function Layout(){
    return(
        <>
        <Suspense fallback={<div>loading...</div>}>
            <Header/>
        </Suspense>
        <Suspense fallback={<div>loading...</div>}>
            <LogIn/>
        </Suspense> 
        <Suspense fallback={<div>loading...</div>}>
            <Nav/>
        </Suspense>
            <Outlet/>
        <Suspense fallback={<div>loading...</div>}>
            <Footer/>
        </Suspense>
        </>
    );
};