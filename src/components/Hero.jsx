import hero from "../assets/hero.png";

import {
    Shield,
    Settings,
    Link,
    BarChart3
} from "lucide-react";



export default function Hero() {

    return (

        <section
            className="h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${hero})`
            }}
        >

            <div className="absolute inset-0 bg-gradient-to-r from-[#020B25] via-[#03153d]/90 to-transparent"></div>

            <div className="relative w-full mx-auto h-full px-8 flex items-center">

                <div className="max-w-xl">

                    {/* <h1 className="text-7xl font-extrabold text-white leading-tight">

                        BUILT FOR

                        <span className="block text-red-600">
                            PERFORMANCE.
                        </span>

                    </h1> */}

                    <div className="w-28 h-1 bg-red-600 my-8"></div>

                    {/* <p className="text-gray-300 text-2xl leading-10">

                        CABLE MANAGEMENT SYSTEMS THAT DELIVER
                        STRENGTH &
                        RELIABILITY.

                    </p> */}

                    {/* <div className="grid grid-cols-4 mt-20">

                        <FeatureCard
                            icon={<Shield />}
                            title="DURABLE"
                            subtitle="BUILT TO LAST"
                        />

                        <FeatureCard
                            icon={<Settings />}
                            title="VERSATILE"
                            subtitle="FITS EVERY NEED"
                        />

                        <FeatureCard
                            icon={<Link />}
                            title="RELIABLE"
                            subtitle="TRUSTED SOLUTIONS"
                        />

                        <FeatureCard
                            icon={<BarChart3 />}
                            title="EFFICIENT"
                            subtitle="OPTIMIZED FLOW"
                        />

                    </div> */}

                </div>

            </div>

        </section>
    );
}