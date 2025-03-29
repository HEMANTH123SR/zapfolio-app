import React from 'react';
import Image from 'next/image';

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

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
    name,
    username,
    profilePic,
    description,
    timestamp,
    likes,
    replyCount = 0,
    images = []
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-xl mx-auto mb-4">
            {/* Header with Profile Info */}
            <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image
                        src={profilePic}
                        alt={`${name}'s profile`}
                        width={48}
                        height={48}
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="font-bold text-lg">{name}</div>
                    <div className="text-gray-500 text-sm">@{username}</div>
                </div>
            </div>

            {/* Feedback Description */}
            <p className="text-gray-800 mb-3">{description}</p>

            {/* Images (if any) */}
            {images.length > 0 && (
                <div className={`grid ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mb-3`}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Feedback image ${index + 1}`}
                            width={300}
                            height={200}
                            className="rounded-lg object-cover"
                        />
                    ))}
                </div>
            )}

            {/* Timestamp */}
            <div className="text-gray-500 text-sm mb-3">{timestamp}</div>

            {/* Interaction Stats */}
            <div className="flex items-center text-gray-600">
                <div className="flex items-center mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{likes}</span>
                </div>
                {replyCount > 0 && (
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{replyCount} Replies</span>
                    </div>
                )}
            </div>
        </div>
    );
};

