import {
  MaterialSymbol,
  type MaterialSymbolName,
} from "../utils/MaterialSymbol";

function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div className="col-span-1">
          <span className="mb-4 block font-grotesk text-xl font-bold text-primary">
            GRIDLINE
          </span>
          <p className="mb-8 text-sm leading-relaxed text-white/60">
            Advancing the future of power transmission through engineering
            excellence and uncompromised material quality.
          </p>
          <div className="flex gap-4">
            {(["public", "share"] as MaterialSymbolName[]).map((icon) => (
              <div
                key={icon}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-primary hover:text-primary"
              >
                <MaterialSymbol
                  name={icon}
                  size={14}
                  className="text-white/60"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold tracking-widest text-primary uppercase">
            Solutions
          </h5>
          <ul className="space-y-4 text-sm text-white/60">
            {[
              "HT Transmission",
              "LT Distribution",
              "Substation Hardware",
              "Custom Fabrications",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-all hover:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold tracking-widest text-primary uppercase">
            Company
          </h5>
          <ul className="space-y-4 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Safety Standards",
              "Global Logistics",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white/60 transition-all hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-6 text-sm font-bold tracking-widest text-primary uppercase">
            Newsletter
          </h5>
          <p className="mb-4 text-xs text-white/40">
            Stay updated with our latest product innovations and safety
            whitepapers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="email@address.com"
              className="w-full border border-white/10 bg-white/5 p-3 text-xs text-white placeholder:text-white/20 focus:ring-0"
            />
            <button className="flex items-center justify-center bg-primary px-4 text-secondary">
              <MaterialSymbol
                name="chevron_right"
                size={14}
                className="text-secondary"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/5 pt-8 px-8 text-center">
        <p className="text-sm leading-relaxed text-white/40">
          Copyright 2026 GRIDLINE Industrial Infrastructure. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
