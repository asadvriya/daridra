import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

const Layout = lazy(() => import("./components/layout/layout"));
const HomePage = lazy(() => import("./components/pages/home/homepage"));
const Services = lazy(() => import("./components/pages/services/services"));
const AboutUs = lazy(() => import("./components/pages/about/about"));
const Rules = lazy(() => import("./components/pages/rules/rules"));
const Contacts = lazy(() => import("./components/pages/contact/contacts"));
const ApplicantLogIn = lazy(()=> import("./components/pages/jobs/login/login"));
const ApplicantApply = lazy(() => import("./components/pages/jobs/apply/apply"));



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Suspense fallback={<div>loading...</div>}><Layout/></Suspense>}>
          <Route index element ={<Suspense fallback={<div>loading...</div>}><HomePage/></Suspense>}/>
          <Route path="services" element={<Suspense fallback={<div>loading...</div>}><Services/></Suspense>}/>
          <Route path="about-us" element={<Suspense fallback={<div>loading...</div>}><AboutUs/></Suspense>}/>
          <Route path="rules" element={<Suspense fallback={<div>loading...</div>}><Rules/></Suspense>}/>
          <Route path="contact-us" element={<Suspense fallback={<div>loading...</div>}><Contacts/></Suspense>}/>
          <Route path="jobs/login" element={<Suspense fallback={<div>loading...</div>}><ApplicantLogIn/></Suspense>}/>
          <Route path="jobs/apply" element={<Suspense fallback={<div>loading...</div>}><ApplicantApply/></Suspense>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  
  );
}
export default App;