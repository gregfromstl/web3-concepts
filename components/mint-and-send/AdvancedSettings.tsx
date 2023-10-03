"use client";

import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function AddressButton({
    children,
    selected,
    toggle,
}: {
    children: string;
    selected: boolean;
    toggle: (s: string) => void;
}) {
    return (
        <div
            className={`border-2 border-gray-800 font-bold text-lg flex justify-center w-full text-center p-4 rounded-full transition duration-200 ${
                selected ? "bg-[#4285F6] text-white" : "text-gray-200"
            }`}
            onClick={() => toggle(children)}
        >
            {children}
        </div>
    );
}

export default function AdvancedSettings({
    open,
    toggle,
}: {
    open: boolean;
    toggle: () => void;
}) {
    const [payFrom, setPayFrom] = useState("vitalik.eth");
    const [mintTo, setMintTo] = useState("vitalik.eth");

    return (
        <div className="h-full overflow-hidden">
            <div
                className="text-gray-400 flex gap-1 items-center justify-center p-3"
                onClick={toggle}
            >
                Advanced
                <ChevronUpIcon
                    className={`w-6 h-6 transition duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </div>
            <AnimatePresence>
                {!open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{
                            height: "auto",
                            transition: { delay: 0.5 },
                        }}
                        exit={{ height: 0 }}
                        className="flex flex-col"
                        key="current-advanced-settings"
                    >
                        <div className="pb-6 pt-3 px-6">
                            <div
                                className={`border-2 border-gray-800 flex justify-between w-full text-center py-3 px-5 rounded-full`}
                            >
                                <div className="font-semibold text-gray-200">
                                    {mintTo === payFrom ? "Wallet" : "Pay from"}
                                </div>
                                <div className="font-extrabold">{payFrom}</div>
                            </div>
                            {mintTo !== payFrom && (
                                <div
                                    className={`border-2 mt-2 border-gray-800 flex justify-between w-full text-center py-3 px-5 rounded-full`}
                                >
                                    <div className="font-semibold text-gray-200">
                                        Mint to
                                    </div>
                                    <div className="font-extrabold">
                                        {mintTo}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto", transition: { delay: 0.5 } }}
                        exit={{ height: 0 }}
                        className="flex flex-col"
                        key="advanced-settings"
                    >
                        <div className="flex text-center p-6 flex-col gap-2">
                            <label className="flex flex-col text-lg font-semibold gap-2">
                                Pay from
                            </label>
                            <div className="flex gap-2">
                                <AddressButton
                                    selected={payFrom === "vitalik.eth"}
                                    toggle={setPayFrom}
                                >
                                    vitalik.eth
                                </AddressButton>
                                <AddressButton
                                    selected={payFrom === "vault.eth"}
                                    toggle={setPayFrom}
                                >
                                    vault.eth
                                </AddressButton>
                            </div>
                        </div>
                        <div className="flex pb-6 px-6 flex-col gap-2 text-center">
                            <label className="flex text-lg font-semibold flex-col gap-2">
                                Mint to
                            </label>
                            <div className="flex gap-2">
                                <AddressButton
                                    selected={mintTo === "vitalik.eth"}
                                    toggle={setMintTo}
                                >
                                    vitalik.eth
                                </AddressButton>
                                <AddressButton
                                    selected={mintTo === "vault.eth"}
                                    toggle={setMintTo}
                                >
                                    vault.eth
                                </AddressButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
