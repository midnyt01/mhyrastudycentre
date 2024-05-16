import React from "react";
import HeroBanner from "../components/herobanner";
import Conceptualizing from "../components/conceptualizing";
import Testimonials from "../components/testimonials";
import Workflow from "../components/workflow";
import Tutoring from "../components/tutoring";
import Skills from "../components/skills";
import AboutMe from "../components/about-me";
import ContactMeForm from "../components/contact-me";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Outlet />
      <HeroBanner />
      <Conceptualizing />
      <Testimonials />
      <Workflow />
      <Tutoring />
      <Skills />
      <AboutMe />
      <ContactMeForm />
      <Footer />
    </>
  );
};

export default Home;
