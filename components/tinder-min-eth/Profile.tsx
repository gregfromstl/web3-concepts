"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Stake from "./Stake";

export default function Profile({
    image,
    name,
    age,
    distance,
}: {
    image: { src: string; alt: string };
    name: string;
    age: number;
    distance: number;
}) {
    const [superLiked, setSuperLiked] = useState(false);
    const [visible, setVisible] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const superLike = () => {
        setModalOpen(false);
        setSuperLiked(true);
        setTimeout(() => {
            setVisible(false);
        }, 500);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key={name}
                    className="relative w-full h-full shadow-lg rounded-xl overflow-hidden"
                    exit={{ rotate: -45, translateY: -1000, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="absolute rounded-full overflow-hidden top-0 w-full flex z-10 gap-1 p-1 px-3 mt-1 h-3">
                        {[0, 1, 2, 3, 4].map((i, idx) => (
                            <div
                                key={idx}
                                className={`w-full h-full bg-white ${
                                    i === 0 ? "" : "bg-opacity-25"
                                }`}
                            />
                        ))}
                    </div>
                    <Image
                        className="object-center object-cover"
                        src={image.src}
                        fill
                        alt={image.alt}
                    />

                    {superLiked && (
                        <motion.div
                            key="super-like"
                            initial={{ scale: 2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-12 top-24 z-10"
                        >
                            <Image
                                src="/tinder-stake/super-like.png"
                                alt="Super like icon"
                                width={143}
                                height={83}
                            />
                        </motion.div>
                    )}

                    <div className="text-white flex-col z-10 p-4 bg-gradient-to-t from-black to-transparent w-full flex absolute bottom-0">
                        <div className="flex gap-2">
                            <div className="text-4xl font-medium">{name}</div>
                            <div className="font-light text-4xl">{age}</div>
                        </div>
                        <div className="font-light flex gap-1 text-lg items-center">
                            <MapPinIcon className="w-4 h-4" />
                            {distance} mile{distance > 1 ? "s" : ""} away
                        </div>
                        <motion.div
                            className="flex mt-2 justify-between items-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <Image
                                src="/tinder-stake/undo-button.png"
                                width={100}
                                height={100}
                                alt="Undo button"
                                className="w-16 h-16"
                            />
                            <Image
                                src="/tinder-stake/dislike-button.png"
                                width={100}
                                height={100}
                                alt="Dislike button"
                                className="w-20 h-20"
                            />
                            <Image
                                src="/tinder-stake/super-like-button.png"
                                width={100}
                                height={100}
                                onClick={() => setModalOpen(true)}
                                alt="Super like button"
                                className="w-16 h-16"
                            />
                            <Image
                                src="/tinder-stake/like-button.png"
                                width={100}
                                height={100}
                                alt="Like button"
                                className="w-20 h-20"
                            />
                            <Image
                                src="/tinder-stake/flash-button.png"
                                width={100}
                                height={100}
                                alt="Flash button"
                                className="w-16 h-16"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
            {modalOpen && (
                <Stake
                    close={() => setModalOpen(false)}
                    onAccept={superLike}
                    key="stake"
                />
            )}
        </AnimatePresence>
    );
}
