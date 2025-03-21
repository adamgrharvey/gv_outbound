import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Image from "next/image";
import Script from "next/script";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        {/* Google Tag Manager */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16884794738"></Script>
        <Script>window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', 'AW-16884794738');
        </Script> */}
      </Head>

      <Header />
      <main className="flex-grow mt-24 sm:mt-40 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="flex justify-center mb-8">
            <Image
            src="/assets/Global-Village-IEC-RO-Banner-lrg.jpg"
            alt="IEC"
            width={1000}
            height={400}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div>
              <p className="text-lg mb-4">
                Our team at <strong>Global Village Work Learn Travel</strong> has been enabling international experiences for more than two decades. 
                As official partners of <strong>International Experience Canada</strong>, we're dedicated to creating life-changing 
                opportunities for Canadians as they work, learn, and travel all over our amazing world.
              </p>
              <p className="text-lg mb-4">
                We're part of the Languages Canada Consortium – a designated recognized organization of the Government of Canada's 
                International Experience Canada (IEC) program. IEC gives young Canadians the opportunity to broaden their perspective 
                of the world and Canada's place in it through international work and travel experience.
              </p>
              <p className="text-lg mb-4">
                Through IEC, Canada has negotiated temporary immigration pathways with more than 35 countries and territories that 
                allow Canadian youth (between ages 18-35) to work while they travel in a partner country or territory. The same 
                opportunity is provided to young citizens from partner countries and territories (and sometimes other countries) 
                to come to Canada. This initiative originated over 60 years ago as a cultural exchange program between youth. 
                With IEC's current mandate, the Government of Canada remains committed to fostering cultural, economic and social 
                exchanges between youth through work and travel opportunities.
              </p>
              <p className="text-lg mb-4">
                The Government of Canada works with key stakeholders like <strong>GV Work Learn Travel</strong> in Canada and abroad to raise awareness 
                of the program, to promote the benefits of international experience, and to equip Canadian and foreign national youth 
                with information and services to help them achieve international work and travel experiences through IEC.
              </p>
              <p className="text-lg mb-6">
                For more information, feel free to reach out to us.
              </p>
                <div className="flex flex-col gap-4 justify-center items-center">
                <a 
                  href="mailto:gvoutbound@gvenglish.com"
                  className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600 transition duration-300"
                >
                  Contact Us
                </a>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;