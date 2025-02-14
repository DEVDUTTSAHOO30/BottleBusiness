import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold ">
                The Smart Water Bottle <br /> That **Never Lets You Down**
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mt-4">
                Stay hydrated without leaks! Our innovative water bottle is designed
                for durability, convenience, and zero spills.
            </p>
            <Image
                src="/1.png"
                alt="Water Bottle"
                width={300}
                height={300}
                className="mt-6 drop-shadow-lg"
            />
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
                Order Now
            </button>
        </section>
    );
}
