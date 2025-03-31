import "./App.css";
import Header from "./components/common/Header";
import HeroSection from "./components/common/HeroSection";
import i from "./assets/images/hero/image.png";
import Card from "./components/common/reuse/Card";
import CardCarousel from "./components/common/reuse/CardCarousel";

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
      <footer className="px-6 xl:px-44 bg-blue-100 text-gray-800">
        <section className="flex flex-col md:flex-row justify-around items-start gap-10 md:gap-4 lg:gap-10">
          {/* Visit Us Section */}
          <div className="w-full md:w-1/2 flex flex-col text-justify border">
            <h3 className="text-2xl md:text-3xl mb-6 md:mb-10">
              COME VISIT US
            </h3>

            <div className="mb-6 md:mb-10">
              <p>500 TERRY FRANCINE STREET</p>
              <p>SAN FRANCISCO, CA 94158</p>
            </div>

            <div className="mb-6 md:mb-10">
              <p className="mb-2 md:mb-4">MON - FRI: 8AM - 8PM</p>
              <p className="mb-2 md:mb-4">SATURDAY: 9AM - 7PM</p>
              <p>SUNDAY: 9AM - 8PM</p>
            </div>

            <div className="mb-6 md:mb-10">
              <p className="mb-2 md:mb-4">INSTAGRAM</p>
              <p className="mb-2 md:mb-4">FACEBOOK</p>
              <p>TWITTER</p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start border ">
            <div className="mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-medium mb-8 md:mb-16 text-start">
                TALK TO US
              </h3>

              <div className="mb-6 md:mb-10 text-start">
                <p className="mb-2">INFO@MYSITE.COM</p>
                <p>123 456 6780</p>
              </div>
            </div>

            <div className="mb-6 md:mb-10 text-start w-full">
              <p className="mb-4 md:mb-8">Subscribe to our Newsletter *</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className=" w-80">
                  <input
                    type="email"
                    className="border border-gray-400 bg-blue-100 h-12 w-full flex-grow px-4"
                    placeholder="Your email"
                  />
                </div>
                <button className="bg-gray-600 text-white px-5 py-2 sm:py-0 border-gray-100 h-12 text-lg sm:text-xl whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 border border-black"
              />
              <p className="text-sm md:text-base">
                Yes, subscribe me to your newsletter. *
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
