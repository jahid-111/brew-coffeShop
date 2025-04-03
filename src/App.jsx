import "./App.css";
import Header from "./components/common/Header";
import HeroSection from "./components/common/HeroSection";
import i from "./assets/images/hero/image.png";
import Card from "./components/common/reuse/Card";
import CardCarousel from "./components/common/reuse/CardCarousel";
import VisitDetails from "./components/common/VisitDetails";
import Contact from "./components/common/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="">
        <HeroSection />
        <section className="">
          <div className=" bg-amber-50 h-96 px-20 flex items-center justify-center">
            <p className=" text-3xl text-center text-gray-700">
              Lorem ipsum dolor sit amet. Voluptas
              <br /> cum non iusto rem error ut fuga facere <br /> corrupti
              voluptate.
            </p>
          </div>
        </section>
        <section className="bg-amber-100 py-5 ">
          <h3 className="text-[2.5rem] text-gray-800 font-medium h-24 text-center leading-[6rem]">
            GRAB IT ON THE GO
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-5 px-8 sm:px-16 py-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </section>
        <section className="bg-red-400">
          <img
            src={i}
            alt=""
            className="aspect-16/9 sm:aspect-16/7  max-w-full object-cover "
          />
        </section>

        {/* All item scroll-X with hover to details with price  */}
        <section className=" py-5">
          <h3 className="text-[2.5rem] text-gray-800 font-medium h-24 text-center leading-[6rem]">
            DELIVERED FRESH
          </h3>
          <CardCarousel>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-80 flex-shrink-0">
                <Card isDeliver={true} key={i} />
              </div>
            ))}
          </CardCarousel>
        </section>

        <div className="py-10 flex justify-center">
          <button className="text-4xl border py-5 px-24 font-medium bg-amber-50 text-gray-700 hover:bg-green-600 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
            Shop All
          </button>
        </div>
      </main>
      <footer className="px-6 xl:px-44 py-10 bg-blue-100 text-gray-800">
        <section className="flex flex-col md:flex-row justify-around items-start gap-10 md:gap-4 lg:gap-10">
          {/* Visit Us Section */}
          <VisitDetails />

          {/* Contact Us Section */}
          <Contact />
        </section>

        <div className=" mt-16">
          <div className="flex flex-col items-center justify-center text-center space-y-6 p-6">
            <ul className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 text-sm font-medium">
              <li className="px-4 py-2 rounded-md">TERMS & CONDITIONS</li>
              <li className="px-4 py-2 rounded-md">PRIVACY POLICY</li>
              <li className="px-4 py-2 rounded-md">SHIPPING POLICY</li>
              <li className="px-4 py-2 rounded-md">REFUND POLICY</li>
              <li className="px-4 py-2 rounded-md col-span-2 md:col-span-1">
                COOKIE POLICY
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              © 2035 by <span className="font-semibold">BREW.</span> Powered and
              secured by{" "}
              <a
                href="#"
                className="underline text-blue-600 hover:text-blue-800"
              >
                Wix
              </a>
            </p>
          </div>
        </div>
        <code>
          Code by{" "}
          <a target="_blank" href="https://github.com/jahid-111">
            <span className=" text-blue-600 underline"> Jahid</span>
          </a>
        </code>
      </footer>
    </>
  );
}

export default App;
