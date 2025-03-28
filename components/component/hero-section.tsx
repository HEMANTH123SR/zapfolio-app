import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { hackerMedium, fredokaOne } from '@/fonts/font';

export function HeroSection() {
    return (
        <div className=" w-full text-black overflow-hidden"
            style={hackerMedium.style}
        >
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 lg:space-x-9">
                {/* Text Content */}
                <div className="w-full lg:w-[40%] text-center lg:text-left  lg:mb-0">
                    <h1 className="text-4xl md:text-5xl  lg:text-[3.50rem] font-bold mb-6 leading-tight"
                        style={fredokaOne.style}
                    >
                        LinkedIn to Portfolio Website in Two Clicks
                    </h1>
                    <p className="text-base text-slate-600 mb-9 max-w-xl mx-auto lg:mx-0">
                        Click Get Started, choose from a variety of stunning themes, and just like that your portfolio is ready in a zap! 🚀
                    </p>
                    <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center px-8 py-2.5 border border-transparent lg:text-lg font-medium rounded-2xl text-white bg-[#592BE9] hover:bg-[#482be9] transition-colors duration-300 ease-in-out group"
                    >
                        Get Started
                        <ArrowRight
                            className="ml-3 -mr-1 group-hover:translate-x-1 transition-transform"
                            strokeWidth={2}
                            size={20}
                        />
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="w-full lg:w-[60%] mt-12 lg:mt-0 flex justify-center items-center">
                    <div className="w-full">
                        <Image
                            src="/hero-img.png"
                            alt="Portfolio Website Preview"
                            width={800}
                            height={600}
                            className="rounded-xl "
                            priority
                        />
                    </div>
                </div>
            </div>


        </div>
    );
}