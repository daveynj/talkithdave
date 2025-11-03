import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siemReapTranslations } from "@/data/siemReapTranslations";
import Helmet from "react-helmet";

function SiemReapHero() {
  const { title, subtitle, description } = siemReapTranslations.hero;
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
        <h2 className="text-2xl text-center text-gray-700 mb-8">{subtitle}</h2>
        <div className="text-lg text-gray-800 space-y-4 text-center">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiemReapServices() {
  const { title, description, types } = siemReapTranslations.services;
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-lg text-center text-gray-700 mb-12">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiemReapBooking() {
  const { title, description, cta, link } = siemReapTranslations.booking;
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}

export default function SiemReap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{siemReapTranslations.title}</title>
      </Helmet>
      <Header />
      <main className="flex-grow">
        <SiemReapHero />
        <SiemReapServices />
        <SiemReapBooking />
      </main>
      <Footer />
    </div>
  );
}
