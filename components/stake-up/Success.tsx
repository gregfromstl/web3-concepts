"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import { ClockIcon } from "@heroicons/react/20/solid";

export default function Success() {
    const { rive, RiveComponent } = useRive({
        src: "/stake-up/alarm_icon.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
    }, [rive]);

    return (
        <>
            <div className="flex flex-col items-center">
                <motion.div
                    key="alarm-set"
                    className="font-bold text-lg mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.2, delay: 1 }}
                >
                    Alarm set
                </motion.div>
                <RiveComponent className="w-48 h-48 mt-2" />
                <motion.div
                    key="time"
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                >
                    <div className="text-5xl font-extrabold">8:15:00</div>
                </motion.div>
            </div>
            <motion.div
                key="info"
                initial={{ opacity: 0, translateY: 10 }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-lg max-w-xs text-center"
            >
                <span className="opacity-50">You'll be charged</span>{" "}
                <span className="font-semibold">0.001 ETH</span>{" "}
                <span className="opacity-50">if you snooze this alarm</span>
            </motion.div>
        </>
    );
}
