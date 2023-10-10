"use client";
import { useState, useEffect } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import Spinner from "./Spinner";
import { useRive } from "@rive-app/react-canvas";

export default function HoldToMint() {
    const [showSpinner, setShowSpinner] = useState(false);
    const [spinnerPosition, setSpinnerPosition] = useState({ x: 0, y: 0 });
    const [minted, setMinted] = useState(false);
    const loadingProgress = useMotionValue(0);
    const loadingProgressPercent = useTransform(
        loadingProgress,
        (value: number) => `${value}%`
    );

    const { rive, RiveComponent } = useRive({
        src: "/friend-tech-cashout/success.riv",
        autoplay: false,
    });

    useEffect(() => {
        rive?.play();
    }, [rive]);

    const handleTouchStart = (event: { touches: any }) => {
        setShowSpinner(true);
        setSpinnerPosition({
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
        });
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            loadingProgress.set(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setShowSpinner(false);
                setMinted(true);
            }
        }, 30);
    };

    useEffect(() => {
        if (minted) {
            setTimeout(() => {
                setMinted(false);
            }, 3000);
        }
    }, [minted]);

    const handleTouchEnd = () => {
        setShowSpinner(false);
        loadingProgress.set(0);
    };

    return (
        <motion.div
            className="top-0 left-0 bottom-0 select-none right-0 z-10 absolute"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence>
                {showSpinner && !minted && (
                    <motion.div
                        style={{
                            position: "absolute",
                            left: spinnerPosition.x - 64,
                            top: spinnerPosition.y - 64,
                        }}
                        key="spinner"
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        <Spinner />
                        <div className="text-xl mt-4 text-center font-bold text-white">
                            Hold to mint
                        </div>
                    </motion.div>
                )}
                {showSpinner && (
                    <motion.div
                        key="progress"
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        exit={{ y: 10 }}
                        className="absolute bottom-4 left-0 h-2 w-full bg-white bg-opacity-50"
                    >
                        <motion.div
                            style={{
                                width: loadingProgressPercent,
                            }}
                            className="h-full bg-white overflow-hidden"
                        ></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {minted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "absolute",
                        left: spinnerPosition.x - 96,
                        top: spinnerPosition.y - 96,
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <RiveComponent className="w-48 h-48" />
                    <div className="text-xl text-center -mt-4 font-bold text-white">
                        Minted to your wallet
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
