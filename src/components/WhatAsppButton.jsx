import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "9710524709704";

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to make a project enquiry."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        right-4
        bottom-5
        sm:right-6
        sm:bottom-6
        lg:right-8
        lg:bottom-8
        z-[9999]
        flex
        items-center
        gap-2
        group
      "
    >
      {/* Chat Label */}
      <span
        className="
          bg-[#25D366]
          text-white
          text-xs
          sm:text-sm
          font-medium
          px-4
          py-2
          rounded-full
          shadow-lg
          whitespace-nowrap
          opacity-0
          translate-x-3
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
        "
      >
        Chat with Us
      </span>

      {/* WhatsApp Circle */}
      <span
        className="
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.45)]
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <FaWhatsapp className="text-[32px] sm:text-[38px]" />
      </span>
    </a>
  );
}