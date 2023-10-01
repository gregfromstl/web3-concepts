"use client";
import Confirm from "@/components/stake-up/Confirm";
import Success from "@/components/stake-up/Success";
import TimePicker from "@/components/stake-up/TimePicker";
import { ClockIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function StakeupPage() {
    const [state, setState] = useState<"confirmation" | "success" | null>(null);

    return (
        <main className="h-screen max-w-[500px] flex flex-col p-8 overflow-hidden justify-between mx-auto relative">
            <AnimatePresence>
                <div>
                    <div className="flex gap-2 text-3xl font-extrabold justify-center items-center">
                        <ClockIcon className="w-8 h-8" />
                        Stakeup
                    </div>
                </div>
                <AnimatePresence>
                    {state === "success" && <Success />}
                    {state !== "success" && (
                        <>
                            <motion.div
                                className=""
                                key="time-picker"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <TimePicker />
                            </motion.div>
                            <div>
                                <button
                                    onClick={() => setState("confirmation")}
                                    className={`w-full flex items-center justify-center gap-2 font-extrabold bg-[#4285F6] rounded-full text-xl py-4 text-white`}
                                >
                                    Set Alarm
                                </button>
                            </div>
                        </>
                    )}
                </AnimatePresence>

                <Confirm
                    open={state === "confirmation"}
                    close={() => setState(null)}
                    onAccept={() => setState("success")}
                />
            </AnimatePresence>
        </main>
    );
}
