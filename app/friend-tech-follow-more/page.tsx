"use client";
import BuyModal from "@/components/friend-tech-follow-more/BuyModal";
import SuccessPanel from "@/components/friend-tech-follow-more/SuccessPanel";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { BellIcon, StarIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

export default function FriendTechFollowMorePage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [numKeys, setNumKeys] = useState(1);
    const [keyPrice, setKeyPrice] = useState(0.02);
    const [success, setSuccess] = useState(false);

    const buy = () => {
        setKeyPrice(0.025);
        setModalOpen(false);
        setNumKeys(2);
        setSuccess(true);
    };

    return (
        <main className="h-screen max-w-[500px] overflow-hidden mx-auto relative">
            <BuyModal isOpen={modalOpen} buy={buy} />
            <SuccessPanel visible={success} />
            <div className="relative">
                <div className="border-b flex flex-col relative z-10 bg-white border-b-gray-300">
                    <div className="flex gap-2 p-4 pl-2 bg-white shadow-sm">
                        <ChevronLeftIcon className="h-10 my-1 w-10 text-gray-400" />
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center">
                                <Image
                                    src="https://pbs.twimg.com/profile_images/1707496920300548096/bGHT-v82_400x400.jpg"
                                    alt="Omnia"
                                    width={40}
                                    height={40}
                                    className="rounded-full h-full w-auto"
                                />
                                <div
                                    className="py-1"
                                    onClick={() => setModalOpen(true)}
                                >
                                    <div className="bg-[#00BDFF] text-white p-2 px-4 rounded-full">
                                        Buy
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full mt-2 justify-between">
                                <div>
                                    <div className="flex gap-2 items-center">
                                        Omnia
                                        <Image
                                            src="/friend-tech-follow-more/twitter.png"
                                            alt="Twitter logo"
                                            width={24}
                                            height={24}
                                            className="grayscale w-4"
                                        />
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        Last seen 3h ago
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <ShareIcon className="h-7 w-7 text-gray-400" />
                                    <StarIcon className="h-7 w-7 text-gray-400" />
                                    <BellIcon className="h-7 w-7 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image
                    src="/friend-tech-follow-more/bg.jpeg"
                    width={1170}
                    height={2418}
                    className="absolute -top-20 z-0"
                    alt="friend.tech background"
                />
            </div>
        </main>
    );
}
