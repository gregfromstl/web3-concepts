"use client";
import Modal from "@/components/metamask-selfie/Modal";
import {
    CheckIcon,
    ChevronDownIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MetaMaskSelfie() {
    const [confirmModal, setConfirmModal] = useState(false);
    return (
        <main className="overflow-hidden p-4 h-screen bg-[#242629] text-white max-w-[500px] scrollbar-none mx-auto relative">
            <header className="w-full flex justify-between">
                <Image
                    src="/metamask-selfie/metamask.webp"
                    alt=""
                    width={100}
                    height={100}
                    className="w-8 h-auto"
                />
                <div className="py-0 px-2 gap-1.5 items-center text-xs bg-gray-900 rounded-full flex">
                    <Image
                        src="/metamask-selfie/ethereum.png"
                        alt=""
                        width={50}
                        height={50}
                        className="w-4 h-auto"
                    />
                    Ethereum Main Network
                    <ChevronDownIcon className="w-3 h-3" />
                </div>
                <Image
                    src="/metamask-selfie/scan.png"
                    alt=""
                    width={100}
                    height={100}
                    className="w-8 h-auto"
                />
            </header>
            <div className="w-full flex flex-col items-center p-2">
                <div className="border rounded-full flex font-light gap-2 border-gray-400 my-6 text-gray-200 items-center px-2 py-1 pr-5">
                    <div className="bg-gray-900 p-2 rounded-full">
                        <GlobeAltIcon className="w-6 h-6" />
                    </div>
                    https://cryptopunks.app
                </div>
                <div className="border rounded-md items-center p-4 w-full flex gap-3 border-gray-400">
                    <div className="relative rounded-full h-10 w-10 overflow-visible">
                        <Image
                            src="https://pbs.twimg.com/profile_images/1446538671998578692/GxpsJa-l_400x400.jpg"
                            alt=""
                            fill
                            className="object-cover object-center rounded-full"
                        />
                        <Image
                            className="absolute -top-1 -right-1 w-4 h-4"
                            src="/metamask-selfie/ethereum.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs">Ethereum Main Network</div>
                        <div className="font-semibold">GordonGoner.eth</div>
                    </div>
                    <div className="flex-1 text-sm flex flex-col items-end">
                        <div className="">Balance</div>
                        <div className="font-semibold">690.420 ETH</div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center gap-3">
                    <div className="text-5xl">680.00 ETH</div>
                    <div className="text-gray-300 text-2xl font-light">
                        $1,136,658.03
                    </div>
                </div>
                <div className="w-full p-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl">From:</div>
                        <div className="border rounded-lg items-center p-3 w-full flex gap-3 border-gray-400">
                            <div className="relative rounded-full h-9 w-9 overflow-visible">
                                <Image
                                    src="https://pbs.twimg.com/profile_images/1446538671998578692/GxpsJa-l_400x400.jpg"
                                    alt=""
                                    fill
                                    className="object-cover object-center rounded-full"
                                />
                            </div>
                            <div className="flex text-gray-300 flex-col">
                                <div className="font-medium">
                                    GordonGoner.eth
                                </div>
                                <div className="text-sm">
                                    Balance: 690.420 ETH
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="text-xl">To:</div>
                        <div className="border rounded-lg items-center p-4 py-3 w-full flex gap-3 border-gray-400">
                            <div className="relative rounded-full h-9 w-9 overflow-visible">
                                <Image
                                    src="/metamask-selfie/identicon.png"
                                    alt=""
                                    fill
                                    className="object-cover object-center rounded-full"
                                />
                            </div>
                            <div className="flex text-gray-300 flex-col">
                                <div className="font-medium flex items-center gap-0.5">
                                    0x3fC9...7FAD
                                    <CheckIcon className="w-4 h-4 text-[#53A451]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md border-gray-600 border p-3 w-full mt-8">
                        <div className="flex items-center text-sm justify-between">
                            <div className="flex items-center gap-2">
                                <div className="font-semibold">
                                    Estimated gas fee
                                </div>
                                <div className="font-light text-gray-300">
                                    $15.40
                                </div>
                            </div>
                            <div className="text-[#4595F4] underline font-semibold">
                                0.008149 ETH
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#242629] via-[#242629] to-transparent absolute pt-24 bottom-0 left-0 right-0 p-4 pb-6 font-medium flex gap-4">
                    <div className="border border-gray-300 bg-[#242629] text-gray-300 rounded-full flex-1 p-4 text-center">
                        Reject
                    </div>
                    <div
                        onClick={() => setConfirmModal(true)}
                        className="text-gray-300 bg-[#4595F4] active:scale-90 transition duration-200 rounded-full flex-1 p-4 text-center"
                    >
                        Confirm
                    </div>
                </div>
                <AnimatePresence>{confirmModal && <Modal />}</AnimatePresence>
            </div>
        </main>
    );
}
