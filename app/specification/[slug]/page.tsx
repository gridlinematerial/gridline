"use client";
import { Button } from "@/components/ui";

function Specification() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 my-12">
      <div className="max-w-2xl text-center">
        {/* Tag */}
        <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          Coming Soon
        </div>

        {/* Title */}
        <h1 className="font-grotesk mb-4 text-4xl font-bold tracking-tight text-secondary md:text-5xl">
          Specifications
        </h1>

        {/* Description */}
        <p className="mb-8 text-base text-secondary/70 md:text-lg">
          We’re building a comprehensive technical specification library for all
          HT & LT line materials. Soon you'll be able to explore detailed
          datasheets, standards, and engineering insights.
        </p>

        {/* Feature list */}
        <div className="mb-10 grid gap-4 text-left text-sm text-secondary/80 md:grid-cols-2">
          <div className="rounded-md border border-secondary/10 p-4">
            📄 Product Datasheets
          </div>
          <div className="rounded-md border border-secondary/10 p-4">
            ⚙️ Technical Specifications
          </div>
          <div className="rounded-md border border-secondary/10 p-4">
            📊 Standards & Compliance
          </div>
          <div className="rounded-md border border-secondary/10 p-4">
            🔍 Smart Search & Filters
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          <Button onClick={() => window.history.back()}>Go Back</Button>

          <Button
            variant="yellow"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Request Info
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Specification;
