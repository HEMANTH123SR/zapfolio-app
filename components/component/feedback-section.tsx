// import { FeedbackCard } from "@/components/component/feedback-card";


// export const ZapfolioFeedbackSection = () => {
//     const sampleFeedback = [
//         {
//             name: "Harsha K Divate",
//             username: "harsha-k-divate-185539203",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGEixRrWidHBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725808511550?e=1748476800&v=beta&t=vKq9Xv4z-5WqgZrL2SDs744IBTfIVGmogoDCSDcF8Yw",
//             description: "I love how easy it is to create a portfolio with Zapfolio. The templates are beautiful and the process is seamless!",
//             timestamp: "2023-10-01T12:00:00Z",
//             likes: 8,
//             replyCount: 1,
//             images: ["/webpolio-to-linkedin.png"]
//         },
//         {
//             name: "Sudhiksha Krishnan ",
//             username: "sudhiksha-krishnan-717489295",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGCOSNBug0zag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726247685157?e=1748476800&v=beta&t=2kAkpGMxIWZipXJ7zg_SMEXf0H9XSG_KeywH0k1qR48",
//             description: "Zapfolio has transformed the way I showcase my work. Highly recommend!",
//             timestamp: "2023-10-02T14:30:00Z",
//             likes: 5,
//             replyCount: 2,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "hemanth gowda ",
//             username: "hemanth-gowda-31a7532a7",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGD5_2LUooR6w/profile-displayphoto-shrink_400_400/B56ZWAAkG9HQAg-/0/1741609389016?e=1748476800&v=beta&t=rdkI2KoKo74Q9WGsc4Yl5HVxS43Flq2dcOHFS1imnwE",
//             description: "Super intuitive platform! Got my portfolio up in minutes.",
//             timestamp: "2023-10-03T09:15:00Z",
//             likes: 12,
//             replyCount: 0,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "Onkar Ghule",
//             username: "onkar-ghule-a41338309",
//             profilePic: "https://media.licdn.com/dms/image/v2/D4E03AQEZhdV6gfsY7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728057691395?e=1748476800&v=beta&t=nBewY3piuauZzcn2KHKAbYmiCS3yrb9GF7xtnhktL-0",
//             description: "Zapfolio saved me hours of work. Just linked my LinkedIn and boom, done!",
//             timestamp: "2023-10-04T16:45:00Z",
//             likes: 20,
//             replyCount: 3,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "Vignesh S ",
//             username: "vignesh-s-9426b327a",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGQJ2x-sC8QMQ/profile-displayphoto-shrink_400_400/B56ZOSwMXsGsAk-/0/1733333928828?e=1748476800&v=beta&t=cY8AIPRJhRcpwZGT_o-f-W-LC-m7vx9yJrb_CaijUoQ",
//             description: "Finally, a portfolio builder that doesn’t require coding! Love it.",
//             timestamp: "2023-10-05T11:00:00Z",
//             likes: 7,
//             replyCount: 2,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "Pritam P",
//             username: "pritam-p-012561253",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQHkPOyP-bffJw/profile-displayphoto-shrink_400_400/B56ZN4OP9SGoAk-/0/1732888823338?e=1748476800&v=beta&t=E3-99k_oCTgri0Jdq4Cgtusk8uJTczRfR2kRLSoNFyo",
//             description: "I wish I found this earlier. Clean UI and very responsive.",
//             timestamp: "2023-10-06T19:25:00Z",
//             likes: 15,
//             replyCount: 1,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "Kundan Kumar Sahu",
//             username: "kundan7",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQEMKNf00oBggQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728125439654?e=1748476800&v=beta&t=6gdAxUxptLB_PBvM4BehdPVp4TtDr1uffduP-kZbykk",
//             description: "The customization options are great. My portfolio now looks exactly how I want!",
//             timestamp: "2023-10-07T08:10:00Z",
//             likes: 10,
//             replyCount: 0,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "gowtham BS",
//             username: "gowtham-b-s-sandbox",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQH9Nc4dIeKxMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697648528219?e=1748476800&v=beta&t=6UEsV1s5n1NVNBHyAUWzYkCgvSBftkoKaAtdEqGIDTw",
//             description: "Simple, effective, and professional-looking portfolios. What else do you need?",
//             timestamp: "2023-10-08T21:55:00Z",
//             likes: 9,
//             replyCount: 4,
//             images: ["/webpolio-to-linkedin.png"]

//         },
//         {
//             name: "Pramod A B ",
//             username: "pramod-a-b-7b24b4250",
//             profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGsOdQa-E5sMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730468127775?e=1748476800&v=beta&t=2xcQKlz4O5QgU7MHGGGEr7o74BwE9kyi6mjM_idXjes",
//             description: "Great for freelancers like me. I landed two clients within a week after setting up my site!",
//             timestamp: "2023-10-09T14:05:00Z",
//             likes: 25,
//             replyCount: 3,
//             images: ["/webpolio-to-linkedin.png"]

//         }
//     ];


//     return (
//         <div className=" min-h-screen p-6">
//             <h1 className="text-2xl font-bold mb-6 text-center">Zapfolio Feedback</h1>
//             {
//                 sampleFeedback.map((data, i) => {
//                     return <FeedbackCard key={i} {...data} />
//                 })
//             }

//         </div>
//     );
// };

"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { fredokaOne } from '@/fonts/font';

interface FeedbackCardProps {
    name: string;
    username: string;
    profilePic: string;
    description: string;
    timestamp: string;
    likes: number;
    replyCount?: number;
    images?: string[];
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
    name,
    username,
    profilePic,
    description,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    timestamp,
    likes,
    replyCount = 0,
    images = []
}) => {


    return (
        <div className="bg-white border rounded-lg  p-4 w-full h-full flex flex-col">
            {/* Profile and Header Section */}
            <div className="flex items-start mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                    <Image
                        src={profilePic}
                        alt={`${name}'s profile`}
                        width={48}
                        height={48}
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-bold text-md text-black">{name}</div>
                            <div className="text-gray-500 text-xs">@{username}</div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="flex-1 mb-3">
                <p className="text-gray-800 text-sm mb-3">{description}</p>

                {/* Images */}
                {images.length > 0 && (
                    <div className="rounded-lg overflow-hidden mb-2 border border-gray-200">
                        <Image
                            src={images[0]}
                            alt="Post content"
                            width={500}
                            height={300}
                            className="w-full object-cover"
                        />
                    </div>
                )}
            </div>

            {/* Stats & Interactions */}
            <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
                    <div className="flex items-center">
                        <span className="flex -space-x-1 mr-2">
                            <span className="inline-block h-4 w-4 rounded-full bg-blue-500"></span>
                            <span className="inline-block h-4 w-4 rounded-full bg-red-500"></span>
                        </span>
                        <span>{likes} likes</span>
                    </div>
                    {replyCount > 0 && <span>{replyCount} comments</span>}
                </div>

                {/* Interaction Buttons */}
                <div className="flex justify-between text-gray-500 pt-1 border-t border-gray-200">
                    <button className="flex items-center py-1 px-2 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span className="text-xs">Like</span>
                    </button>
                    <button className="flex items-center py-1 px-2 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">Comment</span>
                    </button>
                    <button className="flex items-center py-1 px-2 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        <span className="text-xs">Share</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


const FeedbackSlider: React.FC<{ feedbackData: FeedbackCardProps[] }> = ({ feedbackData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const autoScrollEnabled = useRef(true);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(3);
            } else if (window.innerWidth >= 640) {
                setItemsToShow(2);
            } else {
                setItemsToShow(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoScrollEnabled.current) {
                setCurrentIndex((prevIndex) => {
                    const maxIndex = Math.ceil(feedbackData.length / itemsToShow) - 1;
                    return prevIndex >= maxIndex ? 0 : prevIndex + 1;
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [feedbackData.length, itemsToShow]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const maxIndex = Math.ceil(feedbackData.length / itemsToShow) - 1;
        if (touchStartX.current - touchEndX.current > 50) {
            // Swipe left
            setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
        } else if (touchEndX.current - touchStartX.current > 50) {
            // Swipe right
            setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
        }
    };

    return (
        <div className="relative w-full my-8 px-4">
            <div className='flex flex-col w-full justify-center items-center'>
                <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-medium text-center mb-6"
                    style={fredokaOne.style}
                >
                    Why People Love Zapfolio
                </h2>

                <p className="hidden lg:block mt-2 text-center text-slate-600 w-2/3 mb-16">
                    Professionals are choosing Zapfolio to turn their LinkedIn pages into sleek, personalized portfolios in seconds. No coding, no hassle—just add your LinkedIn URL, pick a theme, and your portfolio is ready. See what users are saying!
                </p>
                <p className='text-sm mt-2 text-center text-slate-600 lg:hidden mb-16'>
                    {` Users love how easy it is to create a portfolio with Zapfolio! Just enter your LinkedIn URL, pick a theme, and you're set. See why people are making the switch.`}

                </p>


            </div>

            <div
                className="relative overflow-hidden"
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}
                >
                    {feedbackData.map((feedback, index) => (
                        <div
                            key={index}
                            className="px-2 flex-shrink-0"
                            style={{ width: `${100 / itemsToShow}%` }}
                        >
                            <FeedbackCard {...feedback} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(feedbackData.length / itemsToShow) }).map((_, index) => (
                    <button
                        key={index}
                        className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        onClick={() => {
                            autoScrollEnabled.current = false;
                            setCurrentIndex(index);
                            setTimeout(() => {
                                autoScrollEnabled.current = true;
                            }, 10000);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};



export const ZapfolioFeedbackSection = () => {
    const sampleFeedback = [
        {
            name: "Harsha K Divate",
            username: "harsha-k-divate-185539203",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGEixRrWidHBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725808511550?e=1748476800&v=beta&t=vKq9Xv4z-5WqgZrL2SDs744IBTfIVGmogoDCSDcF8Yw",
            description: "I love how easy it is to create a portfolio with Zapfolio. The templates are beautiful and the process is seamless!",
            timestamp: "2023-10-01T12:00:00Z",
            likes: 8,
            replyCount: 1,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Sudhiksha Krishnan ",
            username: "sudhiksha-krishnan-717489295",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGCOSNBug0zag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726247685157?e=1748476800&v=beta&t=2kAkpGMxIWZipXJ7zg_SMEXf0H9XSG_KeywH0k1qR48",
            description: "Zapfolio has transformed the way I showcase my work. Highly recommend!",
            timestamp: "2023-10-02T14:30:00Z",
            likes: 5,
            replyCount: 2,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "hemanth gowda ",
            username: "hemanth-gowda-31a7532a7",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGD5_2LUooR6w/profile-displayphoto-shrink_400_400/B56ZWAAkG9HQAg-/0/1741609389016?e=1748476800&v=beta&t=rdkI2KoKo74Q9WGsc4Yl5HVxS43Flq2dcOHFS1imnwE",
            description: "Super intuitive platform! Got my portfolio up in minutes.",
            timestamp: "2023-10-03T09:15:00Z",
            likes: 12,
            replyCount: 0,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Onkar Ghule",
            username: "onkar-ghule-a41338309",
            profilePic: "https://media.licdn.com/dms/image/v2/D4E03AQEZhdV6gfsY7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728057691395?e=1748476800&v=beta&t=nBewY3piuauZzcn2KHKAbYmiCS3yrb9GF7xtnhktL-0",
            description: "Zapfolio saved me hours of work. Just linked my LinkedIn and boom, done!",
            timestamp: "2023-10-04T16:45:00Z",
            likes: 20,
            replyCount: 3,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Vignesh S ",
            username: "vignesh-s-9426b327a",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGQJ2x-sC8QMQ/profile-displayphoto-shrink_400_400/B56ZOSwMXsGsAk-/0/1733333928828?e=1748476800&v=beta&t=cY8AIPRJhRcpwZGT_o-f-W-LC-m7vx9yJrb_CaijUoQ",
            description: "Finally, a portfolio builder that doesn't require coding! Love it.",
            timestamp: "2023-10-05T11:00:00Z",
            likes: 7,
            replyCount: 2,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Pritam P",
            username: "pritam-p-012561253",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQHkPOyP-bffJw/profile-displayphoto-shrink_400_400/B56ZN4OP9SGoAk-/0/1732888823338?e=1748476800&v=beta&t=E3-99k_oCTgri0Jdq4Cgtusk8uJTczRfR2kRLSoNFyo",
            description: "I wish I found this earlier. Clean UI and very responsive.",
            timestamp: "2023-10-06T19:25:00Z",
            likes: 15,
            replyCount: 1,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Kundan Kumar Sahu",
            username: "kundan7",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQEMKNf00oBggQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728125439654?e=1748476800&v=beta&t=6gdAxUxptLB_PBvM4BehdPVp4TtDr1uffduP-kZbykk",
            description: "The customization options are great. My portfolio now looks exactly how I want!",
            timestamp: "2023-10-07T08:10:00Z",
            likes: 10,
            replyCount: 0,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "gowtham BS",
            username: "gowtham-b-s-sandbox",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQH9Nc4dIeKxMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697648528219?e=1748476800&v=beta&t=6UEsV1s5n1NVNBHyAUWzYkCgvSBftkoKaAtdEqGIDTw",
            description: "Simple, effective, and professional-looking portfolios. What else do you need?",
            timestamp: "2023-10-08T21:55:00Z",
            likes: 9,
            replyCount: 4,
            images: ["/webpolio-to-linkedin.png"]
        },
        {
            name: "Pramod A B ",
            username: "pramod-a-b-7b24b4250",
            profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGsOdQa-E5sMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730468127775?e=1748476800&v=beta&t=2xcQKlz4O5QgU7MHGGGEr7o74BwE9kyi6mjM_idXjes",
            description: "Great for freelancers like me. I landed two clients within a week after setting up my site!",
            timestamp: "2023-10-09T14:05:00Z",
            likes: 25,
            replyCount: 3,
            images: ["/webpolio-to-linkedin.png"]
        }
    ];

    return (
        <div className=" py-12">
            <div className="container shadow-none mx-auto">
                <FeedbackSlider feedbackData={sampleFeedback} />
            </div>
        </div>
    );
};


