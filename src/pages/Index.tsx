import { Helmet } from 'react-helmet-async';
import ClientTicker from '@/components/ClientTicker';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Media from '@/components/Media';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marino Corporation Of India - Industrial Chains & Marine Equipment Manufacturer | Kolkata</title>
        <meta
          name="description"
          content="Marino Corporation Of India is a leading manufacturer of pulley blocks, industrial chains, marine equipment, wire rope slings in Kolkata, West Bengal. 40 years of industry experience. Get quotes on WhatsApp."
        />
        <meta name="keywords" content="industrial chains, pulley blocks, marine equipment, wire rope slings, lifting chains, ship anchors, Kolkata, West Bengal, India" />
        <link rel="canonical" href="https://marinoindia.co.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <ClientTicker />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Media />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
