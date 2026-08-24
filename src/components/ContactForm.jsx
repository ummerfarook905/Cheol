import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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

// WhatsApp
const whatsappNumber = "9710524709704";

const whatsappMessage = encodeURIComponent(
  "Hello, I would like to make a project enquiry."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ContactForm() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const fullName = form.current.full_name.value.trim();
    const phone = form.current.phone.value.trim();

    // Full name validation
    const nameRegex = /^[A-Za-z\s]{2,}$/;

    // Phone validation: 10 to 15 digits
    const phoneRegex = /^\d{10,15}$/;

    if (!nameRegex.test(fullName)) {
      setStatus("invalid_name");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatus("invalid_phone");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        "service_o0z71xl",
        "template_jecup5c",
        form.current,
        {
          publicKey: "iR5lob3EUJUUAbJs3",
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  };

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

            {/* CERTIFICATIONS */}

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

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <Input
                  label="Full Name *"
                  name="full_name"
                  required
                />

                <Input
                  label="Company"
                  name="company"
                />

                <Input
                  label="Email Address "
                  name="email"
                  type="email"
                />

                <Input
                  label="Phone Number *"
                  name="phone"
                  required
                />

                <Input
                  label="Country / Region"
                  name="country"
                />

                <Input
                  label="Product Type"
                  name="product_type"
                />

              </div>

              <Input
                label="Estimated Quantity / Project Scale"
                name="quantity"
              />

              <TextArea
                label="Project Details"
                name="project_details"
              />

              {/* STATUS */}

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                  Your enquiry has been submitted successfully. We will
                  contact you soon.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              {status === "invalid_name" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                  Please enter a valid full name using letters and spaces only.
                </div>
              )}

              {status === "invalid_phone" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                  Please enter a valid phone number with 10 to 15 digits.
                </div>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#17284B] hover:bg-[#203865] disabled:opacity-60 text-white py-5 rounded-md uppercase tracking-wide font-medium transition flex justify-center items-center gap-2"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Submit Engineering Enquiry"}

                {status !== "sending" && (
                  <ArrowRight size={18} />
                )}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-md uppercase tracking-wide font-medium transition flex justify-center items-center gap-2"
              >
                <FaWhatsapp size={22} />

                Chat on WhatsApp
              </a>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}


/* INPUT */

function Input({
  label,
  name,
  type = "text",
  required = false,
}) {
  return (
    <div>

      <label className="block text-xs uppercase font-medium tracking-wide mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none focus:border-[#17284B] transition"
      />

    </div>
  );
}


/* TEXTAREA */

function TextArea({
  label,
  name,
}) {
  return (
    <div>

      <label className="block text-xs uppercase font-medium tracking-wide mb-2">
        {label}
      </label>

      <textarea
        name={name}
        rows={6}
        className="w-full border border-gray-300 rounded-md p-4 resize-none outline-none focus:border-[#17284B] transition"
      ></textarea>

    </div>
  );
}