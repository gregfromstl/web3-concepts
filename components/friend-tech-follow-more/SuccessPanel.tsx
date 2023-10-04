"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

export default function MintPanel({ visible }: { visible: boolean }) {
    const { rive, RiveComponent } = useRive({
        src: "/mint-and-send/success.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
    }, [rive]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 right-0 top-0 bottom-0 z-20 bg-black"
                />
            )}
            {visible && (
                <motion.div
                    key="panel"
                    initial={{ translateY: 500 }}
                    animate={{ translateY: 80 }}
                    exit={{ translateY: 500 }}
                    className="absolute flex items-center gap-8 p-6 text-center flex-col justify-between text-black bottom-0 left-0 pb-36 right-0 z-30 bg-white rounded-t-[2rem]"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-36 h-36 relative">
                            <Image
                                src="/friend-tech-follow-more/prtc.svg"
                                fill
                                className="object-center rounded-xl object-cover"
                                alt=""
                            />
                            <RiveComponent className="w-24 h-24 absolute -right-8 -bottom-8 border-transparent border" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{
                                opacity: 1,
                                translateY: 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-1.5 mt-4 text-lg"
                        >
                            <div className="opacity-50">Purchased the</div>
                            <div className="font-semibold flex gap-2 justify-center items-center">
                                PRTC
                            </div>
                            <div className="opacity-50">team's keys</div>
                        </motion.div>
                    </div>
                    <button className="rounded-full bg-[#00BDFF] text-white w-full py-3 text-lg">
                        View combined chat
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
