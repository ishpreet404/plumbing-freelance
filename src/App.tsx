import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Emergency } from "./pages/Emergency";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ParallaxProvider } from "react-scroll-parallax"; // <--- add this

export const App = (): JSX.Element => {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ParallaxProvider>
  );
};