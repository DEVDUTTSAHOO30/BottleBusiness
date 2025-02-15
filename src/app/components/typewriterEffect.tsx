"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        { text: "Introducing" },
        { text: "the", },
        { text: "future", },
        { text: "of", },
        { text: "hydration.", className: "text-blue-500 dark:text-blue-500" },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem] text-center">
            {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                Say goodbye to leaks, hello to perfection.
            </p> */}

            <TypewriterEffectSmooth words={words} />

            <p className="mt-4 text-lg sm:text-xl font-semibold text-white">
                Experience innovation with <span className="text-blue-500">AquaFlow</span>.
            </p>

            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
                <button className="w-40 h-10 rounded-xl bg-blue-600 border border-transparent text-white text-sm hover:bg-blue-700 transition">
                    Pre-Order Now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-100 transition">
                    Learn More
                </button>
            </div> */}
        </div>
    );
}
