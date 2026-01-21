import About from "@/src/component/About/About";
import Amenities from "@/src/component/Amenities/Amenities";
import Button from "@/src/component/Button/Button";
import Configurations from "@/src/component/Configurations/Configurations";
import Expert from "@/src/component/Expert/Expert";
import FloorPlan from "@/src/component/FloorPlan/FloorPlan";
import Footer from "@/src/component/Footer/Footer";
import Header from "@/src/component/Header/Header";
import Hero from "@/src/component/Hero/Hero";
import Location from "@/src/component/Location/Location";
import Map from "@/src/component/Map/Map";
import Mulund from "@/src/component/Mulund/Mulund";
import Overview from "@/src/component/Overview/Overview";
import Portfolio from "@/src/component/Portfolio/Portfolio";
import Recognition from "@/src/component/Recognition/Recognition";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Overview />
      <Configurations />
      <Button />
      <Amenities />
      {/* <Mulund /> */}
      <Map />
      <Expert />
      <FloorPlan />
      <Recognition />
      <About />
      <Portfolio />
      <Location />
      <Footer />
    </div>
  );
}
