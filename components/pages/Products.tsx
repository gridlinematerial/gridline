import { Button } from "../ui";
import { productCards } from "../utils/data";
import {
  MaterialSymbol,
  type MaterialSymbolName,
} from "../utils/MaterialSymbol";
import Link from "next/link";

function ProductCard({
  icon,
  badge,
  title,
  description,
  slug,
}: {
  icon: MaterialSymbolName;
  badge?: string;
  title: string;
  description: string;
  slug: string;
}) {
  return (
    <div className="group overflow-hidden border border-secondary/5 bg-white transition-all duration-300 hover:shadow-xl">
      <Link href={`/specification/${slug}`}>
        <div className="relative flex h-64 items-center justify-center bg-secondary transition-colors duration-300 group-hover:bg-secondary/95">
          <MaterialSymbol
            name={icon}
            size={96}
            className="text-primary/80 transition-transform duration-500 group-hover:scale-110"
          />
          {badge ? (
            <div className="absolute top-4 left-4">
              <span className="rounded-sm bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-secondary uppercase">
                {badge}
              </span>
            </div>
          ) : null}
          <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
        </div>
        <div className="p-8">
          <h3 className="mb-4 font-grotesk text-xl font-bold text-secondary">
            {title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
            {description}
          </p>

          <Button variant="link" size="sm" className="group !p-0">
            Specifications
            <MaterialSymbol name="arrow_forward" size={14} className="ml-2" />
          </Button>
        </div>
      </Link>
    </div>
  );
}

function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-6 font-grotesk text-4xl font-bold text-secondary md:text-5xl">
              Engineered for Performance
            </h2>
            <p className="text-on-surface-variant">
              Explore our comprehensive range of LT &amp; HT certified
              materials, designed to meet the most demanding utility standards.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="select-none font-grotesk text-6xl xl:text-8xl font-black text-secondary/5">
              PRODUCTS
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((card) => (
            <ProductCard key={card.title} {...card} />
          ))}
          <div className="group flex flex-col items-start justify-center bg-secondary p-8">
            <h3 className="mb-6 font-grotesk text-3xl font-bold text-primary">
              Need a Custom Specification?
            </h3>
            <p className="mb-8 font-light text-white/70">
              Contact our engineering team for technical consultations and bulk
              material procurement.
            </p>
            <a href="#contact">
              <Button className="shadow-2xl">Contact Engineering</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
