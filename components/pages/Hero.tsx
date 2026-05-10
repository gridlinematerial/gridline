import Image from "next/image";
import { MaterialSymbol } from "../utils/MaterialSymbol";
import { Button } from "../ui";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
          alt="Cinematic wide shot of high voltage power lines and transmission towers"
          src="/assets/hero-tower.webp"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-12">
        <div className="lg:col-span-10">
          <div className="mb-6 flex items-center space-x-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Powering Infrastructure
            </span>
          </div>
          <h1 className="mb-8 font-grotesk text-[42px] leading-[1.1] font-bold tracking-tight text-white md:text-7xl">
            Welcome to <span className="text-primary">GRIDLINE</span> - Your
            Trusted Partner in HT &amp; LT Line Materials.
          </h1>
          <p className="mb-12 max-w-6xl text-md leading-relaxed font-light text-white/80 md:text-xl">
            We provide high-quality insulators, conductors, cables, hardware
            fittings, and fabrications for power transmission and distribution.
            Engineered for high-tension reliability.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <a href="#contact">
              <Button className="w-full">Request Quotation</Button>
            </a>
            <Button variant="outline">View Catalog</Button>
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary">
        <a href="#about">
          <MaterialSymbol
            name="expand_more"
            size={36}
            className="text-primary"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
