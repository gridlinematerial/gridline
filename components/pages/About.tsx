import Image from "next/image";
import { aboutHighlights } from "../utils/data";
import { MaterialSymbol } from "../utils/MaterialSymbol";

function About() {
  return (
    <section id="about" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.1em] text-primary">
                Identity &amp; Excellence
              </span>
              <h2 className="font-grotesk text-4xl leading-tight font-bold text-secondary md:text-5xl">
                Leading the Charge in Industrial Infrastructure
              </h2>
            </div>

            <div className="space-y-8">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="group flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-secondary/5 bg-white shadow-sm transition-colors group-hover:bg-secondary group-hover:text-white">
                    <MaterialSymbol
                      name={item.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 font-grotesk text-xl font-bold text-secondary">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-12 lg:pt-0">
            <div className="space-y-6">
              <div className="rounded border-l-4 border-primary bg-white p-8 shadow-sm">
                <h4 className="mb-3 font-grotesk font-bold text-primary">
                  Our Mission
                </h4>
                <p className="text-sm text-on-surface-variant">
                  To empower global infrastructure through sustainable and
                  reliable power distribution materials.
                </p>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded shadow-md">
                <Image
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                  alt="Industrial grade steel cables"
                  src="/assets/gridline-towers.webp"
                />
              </div>
            </div>
            <div className="mt-12 space-y-6">
              <div className="relative h-64 w-full overflow-hidden rounded shadow-md">
                <Image
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                  alt="Industrial engineer inspecting insulators"
                  src="/assets/our-vision-gridline.webp"
                />
              </div>
              <div className="rounded bg-secondary p-8 shadow-sm">
                <h4 className="mb-3 font-grotesk font-bold text-primary">
                  Our Vision
                </h4>
                <p className="text-sm text-white/70">
                  Setting the gold standard for power transmission components
                  across South Asia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
