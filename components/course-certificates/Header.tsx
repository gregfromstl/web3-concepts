"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window?.scrollY || 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <LargeHeader />
            <AnimatePresence>
                {scrollPosition > 150 && (
                    <motion.div
                        key="header"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed top-0 z-10 left-0 right-0"
                    >
                        <SmallHeader />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export function LargeHeader() {
    return (
        <header className="flex flex-col items-start justify-between p-4 bg-white border-b border-gray-200 z-10 max-w-[600px] mx-auto space-y-3">
            <div className="flex w-full flex-col items-center gap-2">
                <div className="flex flex-col gap-2">
                    <Image
                        alt="User Profile Picture"
                        className="rounded-xl w-28 h-auto"
                        height="100"
                        src="https://pbs.twimg.com/profile_images/1691155262894125056/-Y22mFg9_400x400.jpg"
                        width="100"
                    />
                    <div className="flex gap-2">
                        <div className="h-8 w-8 relative rounded-lg overflow-hidden">
                            <Image
                                src="/course-certificates/stanford.jpeg"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="h-8 w-8 relative rounded-lg overflow-hidden">
                            <Image
                                src="/course-certificates/nyu.png"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="h-8 w-8 relative rounded-lg overflow-hidden">
                            <Image
                                src="/course-certificates/meta.png"
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center text-xl items-start">
                    <span className="text-md font-bold text-gray-800">
                        0xsins
                    </span>
                </div>
            </div>
            <div className="flex gap-6 w-full justify-between items-center text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                    <svg
                        className=" h-4 w-4 ml-3"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span className="text-gray-800">18 courses</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                    <svg
                        className=" h-4 w-4 text-yellow-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-gray-800 translate-y-[1px]">89</span>
                </div>
            </div>
        </header>
    );
}

export function SmallHeader() {
    return (
        <header className="flex flex-col shadow-sm pt-8 -translate-y-4 items-start justify-between p-4 bg-white border-b border-gray-200 max-w-[600px] mx-auto space-y-4">
            <div className="flex w-full items-center gap-2">
                <Image
                    alt="User Profile Picture"
                    className="rounded-xl w-8 h-auto"
                    height="100"
                    src="https://pbs.twimg.com/profile_images/1691155262894125056/-Y22mFg9_400x400.jpg"
                    width="100"
                />
                <div className="flex w-full justify-between items-start">
                    <span className="text-md font-semibold text-gray-800 ">
                        0xsins
                    </span>
                    <div className="flex items-center">
                        <Image
                            src="/course-certificates/stanford-icon.webp"
                            alt=""
                            width="24"
                            height="24"
                            className="w-6 h-auto"
                        />
                        <Image
                            src="/course-certificates/nyu-icon.png"
                            alt=""
                            width="24"
                            height="24"
                            className="w-6 h-auto"
                        />
                        <Image
                            src="/course-certificates/meta-icon.png"
                            alt=""
                            width="24"
                            height="16"
                            className="w-6 h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-6 w-full justify-between items-center text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                    <svg
                        className=" h-4 w-4 ml-3"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span className="text-gray-800 ">12 Courses</span>
                </div>

                <div className="flex items-center gap-1 text-gray-600">
                    <svg
                        className=" h-4 w-4 text-yellow-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-gray-800 translate-y-[1px]">89</span>
                </div>
            </div>
        </header>
    );
}
