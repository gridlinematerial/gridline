"use client";
import { useState } from "react";
import { AppInput, AppSelect, AppTextarea, Button } from "../ui";
import { contacts } from "../utils";
import {
  MaterialSymbol,
  type MaterialSymbolName,
} from "../utils/MaterialSymbol";

function Contact() {
  const [subject, setSubject] = useState("");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface-container-high py-24"
    >
      <div className="relative z-10 mx-auto max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-grotesk text-4xl font-bold text-secondary">
              Get In Touch
            </h2>
            <div className="space-y-10">
              {contacts.map((item) => {
                const Wrapper = item.href ? "a" : "div";

                return (
                  <Wrapper
                    key={item.label}
                    href={item.href}
                    target={
                      item.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-6 group"
                  >
                    <div className="rounded bg-secondary p-3 text-primary">
                      <MaterialSymbol
                        name={item.icon as MaterialSymbolName}
                        size={24}
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-bold tracking-wider text-primary uppercase">
                        {item.label}
                      </h4>

                      <p className="font-grotesk text-xl font-medium text-secondary group-hover:underline">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <AppInput label="Your Name" placeholder="John Doe" />
              <AppInput
                type="email"
                label="Email Address"
                placeholder="john@company.com"
              />
            </div>
            <AppSelect
              label="Subject"
              value={subject}
              onChange={setSubject}
              options={[
                { label: "Quote Request", value: "quote" },
                {
                  label: "Technical Specification Inquiry",
                  value: "technical",
                },
                { label: "Partnership Proposal", value: "partnership" },
                { label: "Logistics Query", value: "logistics" },
              ]}
            />
            <AppTextarea
              label="Message"
              rows={4}
              placeholder="How can we help your infrastructure project?"
            />

            <Button className="shadow-2xl w-full">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
