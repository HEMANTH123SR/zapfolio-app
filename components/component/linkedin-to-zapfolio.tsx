

// import { ArrowRight } from 'lucide-react';
// import { hackerMedium, fredokaOne } from "@/fonts/font";
// import Image from 'next/image';

// export const LinkedinToZapfolio = () => {
//     return (
//         <section className="w-full overflow-x-hidden "
//             style={hackerMedium.style}
//         >
//             <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center  py-16">


//                 <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium text-center mb-6"
//                     style={fredokaOne.style}
//                 >
//                     Linkedin to Zapfolio
//                 </h2>

//                 <p className="hidden lg:block  mt-2 text-center text-slate-600 w-2/3 mb-16">
//                     A no-code tool that transforms any LinkedIn page into a clean portfolio website, resume, and landing page for your business site in seconds. All you have to do is enter your LinkedIn URL, and zap!
//                 </p>
//                 <p className='text-sm mt-2 text-center text-slate-600 lg:hidden mb-16'>
//                     A no-code tool that transforms any LinkedIn page into a clean, portfolio website, resume, and landing page for your business site in seconds. All you got to do is enter your LinkedIn URL, and zap!
//                 </p>
//                 <div className="w-full max-w-full flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-4 lg:space-x-6">
//                     <div className="flex flex-col justify-center items-center space-y-4 w-full sm:w-1/2 max-w-xs min-w-0">
//                         <div className="h-12 w-12 relative flex-shrink-0">
//                             <Image
//                                 src="/linkedin-logo.webp"
//                                 alt="LinkedIn Logo"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-xl"
//                             />
//                         </div>
//                         <div className="flex flex-col border border-t-0 shadow-2xl w-full">
//                             <div className="bg-white border h-4 px-4 flex items-center space-x-1.5">
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                             </div>
//                             <div className="w-full">
//                                 <Image
//                                     src="/linkedin-to-webpolio.png"
//                                     alt="LinkedIn to Webpolio"
//                                     width={300}
//                                     height={180}
//                                     layout="responsive"
//                                 />
//                             </div>
//                         </div>
//                         <span className="text-sm text-slate-600">From LinkedIn</span>
//                     </div>

//                     <ArrowRight className="h-6 w-6 hidden sm:block text-slate-500 flex-shrink-0" />

//                     <div className="flex flex-col justify-center items-center space-y-4 w-full sm:w-1/2 max-w-xs min-w-0">
//                         <div className="h-12 w-12 relative flex-shrink-0">
//                             <Image
//                                 src="/logo3.png"
//                                 alt="Zapfolio Logo"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 className="rounded-xl"
//                             />
//                         </div>
//                         <div className="flex flex-col border border-t-0 shadow-2xl w-full">
//                             <div className="bg-white border h-4 px-4 flex items-center space-x-1.5">
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                                 <div className="h-1.5 w-1.5 bg-[#C7C6C6] rounded-full"></div>
//                             </div>
//                             <div className="w-full">
//                                 <Image
//                                     src="/webpolio-to-linkedin.png"
//                                     alt="Webpolio"
//                                     width={300}
//                                     height={180}
//                                     layout="responsive"
//                                 />
//                             </div>
//                         </div>
//                         <span className="text-sm text-slate-600">To Zapfolio</span>
//                     </div>
//                 </div>





//             </div>
//         </section>

//     );
// };



import { ArrowRight } from 'lucide-react';
import { hackerMedium, fredokaOne } from "@/fonts/font";
import Image from 'next/image';

export const LinkedinToZapfolio = () => {
    return (
        <section className="w-full overflow-x-hidden"
            style={hackerMedium.style}
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center  py-16">
                <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium text-center mb-6"
                    style={fredokaOne.style}
                >
                    Linkedin to Zapfolio
                </h2>

                <p className="hidden lg:block  mt-2 text-center text-slate-600 w-2/3 mb-16">
                    A no-code tool that transforms any LinkedIn page into a clean portfolio website, resume, and landing page for your business site in seconds. All you have to do is enter your LinkedIn URL, and zap!
                </p>
                <p className='text-sm mt-2 text-center text-slate-600 lg:hidden mb-16'>
                    A no-code tool that transforms any LinkedIn page into a clean, portfolio website, resume, and landing page for your business site in seconds. All you got to do is enter your LinkedIn URL, and zap!
                </p>

                <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-8 lg:space-x-12">
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="h-12 w-12 relative">
                            <Image
                                src="/linkedin-logo.webp"
                                alt="LinkedIn Logo"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <div className='flex flex-col border border-t-0 shadow-2xl'>
                            <div className='bg-white border h-4 px-4 flex items-center space-x-1.5'>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            </div>
                            <div className="w-full max-w-md">
                                <Image
                                    src="/linkedin-to-webpolio.png"
                                    alt="LinkedIn to Webpolio"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <span className="text-sm text-slate-600">From LinkedIn</span>
                    </div>

                    <ArrowRight className='h-10 w-10 hidden sm:block text-slate-500' />

                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="h-12 w-12 relative">
                            <Image
                                src="/logo3.png"
                                alt="Zapfolio Logo"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <div className='flex flex-col border border-t-0 shadow-2xl'>
                            <div className='bg-white border h-4 px-4 flex items-center space-x-1.5'>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                                <div className='h-1.5 w-1.5 bg-[#C7C6C6] rounded-full'></div>
                            </div>
                            <div className="w-full max-w-md">
                                <Image
                                    src="/webpolio-to-linkedin.png"
                                    alt="Webpolio"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <span className="text-sm text-slate-600">To Zapfolio</span>
                    </div>
                </div>
            </div>
        </section>
    );
};