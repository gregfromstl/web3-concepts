"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

export default function SwipePanel({ onSwipeUp }: { onSwipeUp: () => void }) {
    const [hasSwipedUp, setHasSwipedUp] = useState(false);
    const controls = useDragControls();

    return (
        <motion.div
            drag="y"
            dragConstraints={{ bottom: 0, top: 0 }}
            onDragEnd={(event, info) => {
                if (info.offset.y < -100) {
                    setHasSwipedUp(true);
                    onSwipeUp();
                }
            }}
            dragControls={controls}
            className="text-white p-6 flex text-center flex-col items-stretch justify-between bg-gradient-to-b from-[#38B0E5] to-[#1A93DA] w-full h-full rounded-b-3xl"
        >
            <div />
            <div className="flex flex-col justify-center items-center">
                <div className="font-semibold">Sell Racer</div>
                <div className="w-28 h-28 p-4 rounded-full border-white mt-4 border">
                    <div className="h-full w-full shadow-md rounded-full relative overflow-hidden">
                        <Image
                            fill
                            sizes="112px"
                            className="object-center object-cover"
                            src="/friend-tech-cashout/pfp.jpg"
                            alt="Profile picture"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="text-5xl font-medium">$11,144</div>
                    <div className="opacity-50 mt-1">
                        Selling 1 key for 6.9 ETH
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="opacity-50">Cash out to</div>
                <div className="uppercase flex gap-2 justify-center items-center">
                    <Image
                        className=""
                        src="/friend-tech-cashout/chase.svg"
                        alt="Chase Bank Logo"
                        width={20}
                        height={20}
                    />
                    <div>Chase Bank •• 1234</div>
                    <ChevronRightIcon className="opacity-50 w-5 h-5" />
                </div>
            </div>
        </motion.div>
    );
}
