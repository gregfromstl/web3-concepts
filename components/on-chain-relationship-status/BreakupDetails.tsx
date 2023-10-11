"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function BreakupDetails({
    isOpened,
    close,
}: {
    isOpened: boolean;
    close: () => void;
}) {
    const [selected, setSelected] = useState<number>(0);
    return (
        <div className="w-full absolute bottom-0 left-0 right-0 top-0 flex items-center">
            <AnimatePresence>
                {isOpened && (
                    <>
                        <motion.div
                            key="breakup-details-overlay"
                            className="absolute bg-black z-40 w-full h-full left-0 right-0 bottom-0 top-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0, transition: { delay: 0.2 } }}
                            transition={{ duration: 0.4, type: "spring" }}
                        />
                        <motion.div
                            key="breakup-details"
                            className="relative bg-white z-50 rounded-3xl text-center mx-3 p-8 py-10 border"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { delay: 0.2 },
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                            }}
                        >
                            <div>
                                <h2 className="font-semibold text-2xl">
                                    Tell us what happened?
                                </h2>
                                <p className="text-gray-400 text-base mt-3">
                                    This will help dApps make better
                                    recommendations in the future.
                                </p>
                                <div className="mt-8">
                                    <Dropdown
                                        options={[
                                            {
                                                content: (
                                                    <p>Just didn't work out</p>
                                                ),
                                                idx: 0,
                                            },
                                            {
                                                content: <p>We grew apart</p>,
                                                idx: 1,
                                            },
                                            {
                                                content: <p>They cheated</p>,
                                                idx: 2,
                                            },
                                            {
                                                content: <p>I cheated</p>,
                                                idx: 3,
                                            },
                                            {
                                                content: (
                                                    <p>
                                                        We cheated millions of
                                                        people out of billions
                                                        of dollars and I ratted
                                                        on him to reduce my
                                                        sentence
                                                    </p>
                                                ),
                                                idx: 4,
                                            },
                                        ]}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                </div>
                                <button
                                    onClick={close}
                                    className={`w-full text-white mt-4 flex items-center justify-center gap-2 font-extrabold bg-[#4285F6] rounded-lg text-xl py-3`}
                                >
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
