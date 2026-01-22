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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Vardhan Project",
    url: "https://vardhanproject.com",
    telephone: "+91 9773069318",
    description:
      "Premium residential properties with world-class amenities and expert consultation",
    logo: "https://vardhanproject.com/logo.png",
    image: "https://vardhanproject.com/og-image.jpg",
    sameAs: [
      "https://www.facebook.com/vardhanproject",
      "https://www.instagram.com/vardhanproject",
      "https://www.twitter.com/vardhanproject",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mulund, Mumbai",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400080",
      addressCountry: "IN",
    },
    areaServed: "Mumbai, Maharashtra, India",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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
