import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    no: "01",
    text: "Engineering team reviews your project specs within 24 hours",
  },
  {
    no: "02",
    text: "We recommend the optimal system with load calculations",
  },
  {
    no: "03",
    text: "Detailed quote with product codes and pricing",
  },
];

const certifications = [
  "ISO 9001:2008",
  "BSEN 61537",
  "BS 6946",
  "BSEN 10327",
];

export default function ContactForm() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-14">

          {/* LEFT SIDE */}

          <div className="lg:col-span-4">

            <h2 className="text-4xl font-black uppercase leading-tight">
              Project
              <br />
              Enquiry
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mt-6 max-w-sm">
              Provide your project specifications so our engineering team can
              recommend the right cable management system for your site
              requirements.
            </p>

            <h3 className="mt-10 text-lg font-bold uppercase">
              What Happens Next
            </h3>

            <div className="mt-6 space-y-6">

              {steps.map((item) => (
                <div key={item.no} className="flex gap-4">
                  <span className="text-orange-500 font-bold">
                    {item.no}
                  </span>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

            {/* Certificate */}

            <div className="mt-10 border rounded-2xl p-6">

              <h4 className="text-orange-500 font-semibold uppercase text-sm mb-5">
                Certified Quality
              </h4>

              <div className="flex flex-wrap gap-3">

                {certifications.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-8">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <Input label="Full Name *" />
                <Input label="Company *" />

                <Input label="Email Address *" type="email" />
                <Input label="Phone Number *" />

                <Input label="Country / Region" />
                <Input label="Product Type *" />

              </div>

              <Input
                label="Estimated Quantity / Project Scale"
              />

              <TextArea
                label="Project Details"
              />

              <button
                className="w-full bg-[#17284B] hover:bg-[#203865] text-white py-5 rounded-md uppercase tracking-wide font-medium transition flex justify-center items-center gap-2"
              >
                Submit Engineering Enquiry
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block text-xs uppercase font-medium tracking-wide mb-2">
        {label}
      </label>

      <input
        type={type}
        className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none focus:border-[#17284B] transition"
      />
    </div>
  );
}

function TextArea({ label }) {
  return (
    <div>
      <label className="block text-xs uppercase font-medium tracking-wide mb-2">
        {label}
      </label>

      <textarea
        rows={6}
        className="w-full border border-gray-300 rounded-md p-4 resize-none outline-none focus:border-[#17284B] transition"
      ></textarea>
    </div>
  );
}