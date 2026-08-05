import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="pt-36 pb-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-black">
            Contact Us
          </h1>

          <p className="mt-5 text-gray-600">
            Let's discuss your project requirements.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex gap-4">
                <MapPin className="text-[#D18329]" />
                <span>
                  Hamriyah Free Zone, Sharjah, UAE
                </span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#D18329]" />
                <span>+971 52 855 0065</span>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#D18329]" />
                <span>sales@cheolkorea.com</span>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#D18329]" />
                <span>Monday - Friday | 9:00 AM - 6:00 PM</span>
              </div>

            </div>

          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Hamriyah+Free+Zone+Sharjah&output=embed"
            className="rounded-xl w-full h-[500px]"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}