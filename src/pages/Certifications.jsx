import React from "react";
import {
  ShieldCheck,
  Factory,
  TrendingUp,
  Award,
} from "lucide-react";

import LadderImage from "../assets/ladder/Ladder2.jpeg";
import TrayImage from "../assets/tray/tray.jpeg";
import TrunkingImage from "../assets/trunking/trunking.jpeg";
import SupportImage from "../assets/support/support.jpeg";

// ============================================================
// QUALITY POINTS
// ============================================================

const qualityPoints = [
  {
    icon: Award,
    title: "QUALITY ASSURANCE",
    description:
      "Strict quality control at every stage ensures our products meet the highest international standards.",
  },
  {
    icon: Factory,
    title: "PRECISION MANUFACTURING",
    description:
      "Advanced technology and automated processes deliver precision engineered products with consistent quality.",
  },
  {
    icon: TrendingUp,
    title: "CONTINUOUS IMPROVEMENT",
    description:
      "We believe in continuous improvement to enhance our systems, products and customer satisfaction.",
  },
];

// ============================================================
// PRODUCT STANDARDS
// ============================================================

const standards = [
  {
    image: LadderImage,
    title: "BSEN 61537:2002",
    subtitle: "Cable Ladder & Cable Tray",
  },
  {
    image: TrayImage,
    title: "BSEN 61537:2002",
    subtitle: "Cable Ladder & Cable Tray",
  },
  {
    image: TrunkingImage,
    title: "BSEN 10327:2004",
    subtitle: "Cable Trunking",
  },
  {
    image: SupportImage,
    title: "BS 6946:1988",
    subtitle: "Metal Framing Channel",
  },
];

// ============================================================
// CERTIFICATIONS PAGE
// ============================================================

const Certifications = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#0c2e58]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#06264a] pt-20">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Main gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#031d3a] via-[#062b50]/95 to-[#0b385d]/75" />

          {/* Desktop cable background */}
          <div className="absolute right-[-8%] top-10 hidden h-97.5 w-[65%] rotate-[-8deg] opacity-[0.18] md:block">

            <div className="absolute inset-x-0 top-10 h-16 rounded-full border-11 border-slate-300" />

            <div className="absolute inset-x-10 top-28 h-16 rounded-full border-11 border-slate-300" />

            <div className="absolute inset-x-20 top-46 h-16 rounded-full border-11 border-slate-300" />

            <div className="absolute inset-x-32 top-64 h-16 rounded-full border-11 border-slate-300" />

          </div>

          {/* Mobile background shapes */}
          <div className="absolute right-[-25%] top-24 h-60 w-[90%] rotate-[-8deg] opacity-10 sm:right-[-15%] sm:w-[75%] md:hidden">

            <div className="absolute inset-x-0 top-5 h-10 rounded-full border-6 border-slate-300" />

            <div className="absolute inset-x-5 top-16 h-10 rounded-full border-6 border-slate-300" />

            <div className="absolute inset-x-10 top-27 h-10 rounded-full border-6 border-slate-300" />

          </div>

          {/* Dot pattern */}
          <div
            className="absolute right-0 top-0 h-40 w-48 opacity-15 sm:right-8 sm:h-48 sm:w-64"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8eb1cc 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#06264a] to-transparent sm:h-24" />

        </div>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-6 sm:px-8 sm:pb-32 sm:pt-8 lg:px-10 lg:pb-36">

          {/* Orange line */}
          <div className="mb-5 h-0.75 w-8 bg-[#D18329] sm:mb-6 sm:w-9" />

          <div className="w-full max-w-2xl">

            {/* Responsive Heading */}
            <h1
              className="
                max-w-full
                text-[clamp(2rem,8.5vw,3.75rem)]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.5px]
                text-white
                sm:tracking-[-1px]
              "
            >
              CERTIFICATIONS
              <br />
              <span className="text-[#D18329]">
                &amp; QUALITY
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-sm leading-6 text-white/90 sm:mt-6 sm:text-base">
              Committed to quality, reliability and internationally recognized
              standards.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          ISO CERTIFICATION CARD
      ====================================================== */}

      <section className="relative z-20 mx-auto -mt-12 w-full max-w-275 px-4 sm:-mt-16 sm:px-6 md:-mt-19.5">

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(0,30,70,0.16)] sm:rounded-2xl sm:shadow-[0_15px_45px_rgba(0,30,70,0.18)]">

          <div className="grid grid-cols-1 md:min-h-78.75 md:grid-cols-[230px_1fr] lg:grid-cols-[250px_1fr]">

            {/* =================================================
                ISO LEFT SIDE
            ================================================== */}

            <div className="relative flex min-h-[185px] items-center justify-center overflow-hidden bg-linear-to-b from-[#f8fafc] to-[#eef2f6] sm:min-h-[210px] md:min-h-61.25">

              {/* Orange vertical line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#D18329] sm:w-1.25" />

              {/* Blue strip */}
              <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 bg-linear-to-b from-[#092f5c] via-[#164b83] to-[#082d58] sm:w-28 md:w-31.25" />

              {/* ISO Badge */}
              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-6 border-white bg-[#123e70] shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:h-36 sm:w-36 sm:border-7 md:h-40 md:w-40 md:border-8">

                <div className="flex h-26 w-26 items-center justify-center rounded-full border-2 border-white/70 sm:h-29 sm:w-29 md:h-32.5 md:w-32.5">

                  <div className="text-center text-white">

                    <div className="text-[7px] font-bold tracking-[2px] sm:text-[8px] sm:tracking-[3px] md:text-[9px]">
                      CERTIFIED
                    </div>

                    <div className="mt-1 text-[28px] font-black leading-none sm:text-[31px] md:text-[34px]">
                      ISO
                    </div>

                    <div className="text-[10px] font-bold sm:text-[11px] md:text-xs">
                      9001:2008
                    </div>

                    <div className="mx-auto mt-1 h-px w-10 bg-white/60 sm:w-12 md:w-14" />

                    <div className="mt-1 text-[6px] font-bold tracking-[1.5px] sm:text-[7px] sm:tracking-[2px]">
                      COMPANY
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                ISO RIGHT SIDE
            ================================================== */}

            <div className="flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 md:px-8 lg:px-10">

              {/* ISO title */}
              <h2 className="text-3xl font-bold leading-none text-[#092e5b] sm:text-4xl">
                ISO 9001:2008
              </h2>

              {/* Subtitle */}
              <div className="mt-2 text-lg font-bold text-[#D18329] sm:text-xl">
                QUALITY MANAGEMENT SYSTEM
              </div>

              {/* Orange line */}
              <div className="my-4 h-0.5 w-full max-w-71.25 bg-linear-to-r from-[#D18329] to-transparent" />

              {/* Description */}
              <p className="max-w-lg text-gray-600">
                Certified Quality Management System for
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Cheol Cable Management Systems
              </p>

              {/* Certified Quality */}
              <div className="mt-5 flex w-full max-w-97.5 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#edf8e6]">

                  <ShieldCheck
                    className="h-6 w-6 text-[#D18329]"
                    strokeWidth={2}
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-bold text-[#D18329]">
                    CERTIFIED QUALITY
                  </p>

                  <p className="mt-0.5 text-sm leading-5 text-gray-600">
                    Ensuring high standards in every process
                    <br />
                    from design to delivery.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          QUALITY COMMITMENT
      ====================================================== */}

      <section className="mx-auto w-full max-w-275 px-5 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14">

        <SectionTitle title="OUR COMMITMENT TO QUALITY" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-11 md:grid-cols-3">

          {qualityPoints.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative rounded-xl border border-slate-200 bg-white px-6 pb-7 pt-14 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-7 sm:pb-8 sm:pt-15"
              >

                {/* Icon */}
                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b315e] text-white shadow-md ring-8 ring-white sm:h-17 sm:w-17">

                  <Icon
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    strokeWidth={1.8}
                  />

                </div>

                {/* Title */}
                <h3 className="flex min-h-14 items-center justify-center text-center text-xl font-bold leading-7 text-[#092e5b]">
                  {item.title}
                </h3>

                {/* Orange line */}
                <div className="mx-auto my-3 h-0.5 w-10 bg-[#D18329]" />

                {/* Description */}
                <p className="mx-auto max-w-72 text-gray-600">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#D18329] transition-all duration-300 group-hover:w-20" />

              </div>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          PRODUCT STANDARDS
      ====================================================== */}

      <section className="mx-auto w-full max-w-275 px-5 pb-12 pt-2 sm:px-6 sm:pb-14">

        <SectionTitle title="PRODUCT STANDARDS" />

        {/* Section description */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-600">
          Cheol products are manufactured in accordance with internationally
          recognized standards.
        </p>

        {/* Product standards container */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-3 sm:mt-6 sm:p-4">

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-4 md:gap-4">

            {standards.map((standard) => (

              <div
                key={`${standard.title}-${standard.subtitle}`}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D18329] hover:shadow-md"
              >

                {/* Product Image */}
                <div className="flex h-36 items-center justify-center overflow-hidden bg-white sm:h-36 md:h-37.5">

                  <img
                    src={standard.image}
                    alt={standard.subtitle}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                </div>

                {/* Product Details */}
                <div className="border-t border-slate-100 px-3 pb-5 pt-4">

                  {/* Standard */}
                  <h3 className="text-left text-xl font-bold text-[#102f55]">
                    {standard.title}
                  </h3>

                  {/* Product name */}
                  <p className="mt-2 text-left text-gray-600">
                    {standard.subtitle}
                  </p>

                  {/* Orange line */}
                  <div className="mt-3 h-0.5 w-10 bg-[#D18329] transition-all duration-300 group-hover:w-16" />

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

    </main>
  );
};

// ============================================================
// SECTION TITLE
// ============================================================

const SectionTitle = ({ title }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2.5 sm:gap-3">

      <span className="h-0.5 w-5 shrink-0 bg-[#D18329] sm:w-8" />

      <h2 className="text-center text-xl font-bold text-[#092e5b] min-[400px]:text-2xl sm:text-3xl">
        {title}
      </h2>

      <span className="h-0.5 w-5 shrink-0 bg-[#D18329] sm:w-8" />

    </div>
  );
};

export default Certifications;