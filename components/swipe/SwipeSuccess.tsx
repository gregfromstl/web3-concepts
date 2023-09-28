"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";

export default function SwipeSuccess() {
    const { rive, RiveComponent } = useRive({
        src: "/friend-tech-cashout/success.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
    }, [rive]);

    return (
        <div className="flex flex-col items-center text-center p-6 justify-between w-full absolute left-0 right-0 top-0 bottom-0 z-0">
            <div />
            <div>
                <motion.div
                    className="font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.2, delay: 1 }}
                >
                    Sold Racer
                </motion.div>
                <RiveComponent className="w-48 h-48 mt-2 border-transparent border" />
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                >
                    <div className="text-5xl font-medium">$11,144</div>
                    <div className="opacity-50 mt-1">
                        Sold 1 key for 6.9 ETH
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex flex-col gap-2"
            >
                <div className="opacity-50">Transferred to</div>
                <div className="uppercase flex gap-2 justify-center items-center">
                    <Image
                        className=""
                        src="/friend-tech-cashout/chase-dark.svg"
                        alt="Chase Bank Logo"
                        width={20}
                        height={20}
                    />
                    <div>Chase Bank •• 1234</div>
                </div>
            </motion.div>
        </div>
    );
}
