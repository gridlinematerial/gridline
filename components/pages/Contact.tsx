"use client";
import { useState } from "react";
import { AppInput, AppSelect, AppTextarea, Button } from "../ui";
import { appToast, contacts } from "../utils";
import {
  MaterialSymbol,
  type MaterialSymbolName,
} from "../utils/MaterialSymbol";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      appToast.success({
        title: "Inquiry sent successfully!",
        description: "Our team will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      appToast.error({
        title: "Failed to send inquiry",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface-container-high py-24"
    >
      <div className="relative z-10 mx-auto max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
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
                    className="group flex items-start gap-6"
                  >
                    <div className="rounded bg-secondary p-3 text-primary">
                      <MaterialSymbol
                        name={item.icon as MaterialSymbolName}
                        size={24}
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">
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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <AppInput
                label="Your Name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />

              <AppInput
                type="email"
                label="Email Address"
                placeholder="john@company.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <AppSelect
              label="Subject"
              value={formData.subject}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  subject: value,
                }))
              }
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

            <AppInput
              required
              type="tel"
              label="Phone Number"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length <= 10) {
                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }));
                }
              }}
              pattern="[0-9]{10}"
              maxLength={10}
              title="Please enter a valid 10-digit phone number"
              className="md:col-span-2"
            />

            <AppTextarea
              label="Message"
              rows={4}
              placeholder="How can we help your infrastructure project?"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full shadow-2xl"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
