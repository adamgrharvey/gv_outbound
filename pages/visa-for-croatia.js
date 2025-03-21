import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Script from "next/script";
import { useEffect } from "react";

const Croatia = () => {

    // Load Google Tag Manager
    useEffect(() => {
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16884794738";
      document.head.appendChild(gtagScript);
  
      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "AW-16884794738");
      };
  
    }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Get a Working Holiday Visa for Croatia I GV WLT</title>
        <meta
          name="description"
          content="Canadian looking for a visa for Croatia? Go on a working holiday with Global Village Work Learn Travel!"
        />
        <meta name="keywords" content="Visa for Croatia" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/visa-for-croatia" />
      </Head>

      <Header />
      <main className="flex-grow mt-24 sm:mt-40 mb-6 w-full">
        {/* Main Content Gridd */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Working Holiday Visa Croatia</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Croatia is an incredible destination for Canadians looking to expand their horizons. Croatia is known for its stunning Adriatic coastline, vibrant culture, and rich history. Seaside resorts in places like Dubrovnik, Split, and Hvar are popular for seasonal jobs, particularly in hospitality and tourism, giving you the chance to work by the beach while enjoying the Mediterranean lifestyle. 
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unlike more crowded destinations, Croatia offers affordable living, a laid-back vibe, and an opportunity to immerse yourself in its natural beauty. Whether you're exploring ancient walled cities or relaxing by crystal-clear waters, a working holiday in Croatia offers Canadians both unique employment opportunities and cultural adventures.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/* YACHT CREW Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/visa-for-croatia/work-on-yacht"
                className="relative h-0 pb-56 block"
                >
                  <picture className="absolute inset-0 w-full h-full">
                  <source
                    srcSet="/assets/yacht-desktop.jpeg"
                    media="(min-width: 1024px)"
                  />
                  <img
                    src="/assets/yacht-mobile.jpeg"
                    alt="YACHT CREW TRAINING"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  </picture>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    YACHT CREW
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Croatia;