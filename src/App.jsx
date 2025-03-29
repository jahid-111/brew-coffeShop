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
      </main>
    </>
  );
}

export default App;
