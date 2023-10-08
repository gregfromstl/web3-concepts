"use client";
import { Automation } from "@/types/wallet-automations";
import { ArrowPathIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
    ArrowRightOnRectangleIcon,
    FireIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const icons: { [key: string]: React.ReactNode } = {
    Transfer: <ArrowRightOnRectangleIcon className="w-full h-full" />,
    Swap: <ArrowPathIcon className="w-full h-full" />,
    Burn: <FireIcon className="w-full h-full" />,
    Stake: <LockClosedIcon className="w-full h-full" />,
};

function EditAutomation({
    automation,
    update,
    visible,
    hide,
}: {
    automation: Automation;
    update: (a: Automation) => void;
    visible: boolean;
    hide: () => void;
}) {
    return (
        <AnimatePresence>
            {visible && (
                <>
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        exit={{ opacity: 0 }}
                        onClick={hide}
                        className="fixed z-20 left-0 right-0 bottom-0 top-0 bg-black"
                    />
                    <motion.div
                        key="edit"
                        className="absolute bottom-0 bg-white z-30 rounded-t-[2.8rem] w-full p-8 pb-24"
                        initial={{ y: 500 }}
                        animate={{ y: 50 }}
                        exit={{ y: 500 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 p-2 bg-gray-100 text-gray-500 rounded-lg border w-12">
                                <div className="w-full h-full -rotate-12">
                                    {icons[automation.type]}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <div className="text-2xl font-semibold">
                                    {automation.name}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-wrap items-center gap-2 mx-auto text-xl text-center justify-center">
                            When I receive{" "}
                            <span className="w-36">
                                <Dropdown
                                    selected={automation.asset.name}
                                    setSelected={(s) =>
                                        update({ ...automation })
                                    }
                                    options={[
                                        "KRAUSE",
                                        "USDC",
                                        "ETH",
                                        "PRTC",
                                        "MOG",
                                    ]}
                                />
                            </span>
                            I want to{" "}
                            <span className="w-32">
                                <Dropdown
                                    selected={automation.type}
                                    setSelected={(s) =>
                                        update({ ...automation, type: s })
                                    }
                                    options={[
                                        "Stake",
                                        "Swap",
                                        "Burn",
                                        "Transfer",
                                    ]}
                                />
                            </span>
                            <input
                                type="text"
                                className="w-24 relative cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                                value={automation.asset.amount}
                                onChange={(e) =>
                                    update({
                                        ...automation,
                                        asset: {
                                            ...automation.asset,
                                            amount: e.target.value + "%",
                                        },
                                    })
                                }
                            />{" "}
                            {automation.type !== "Burn" && (
                                <>
                                    to the address{" "}
                                    <input
                                        type="text"
                                        className="w-36 relative cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                                        value="0x34ef30c856cbaedd604034b7202d9d7de23277dc"
                                    />
                                </>
                            )}
                        </div>
                        <div
                            onClick={hide}
                            className="bg-blue-500 text-xl font-bold text-white rounded-xl w-full py-4 px-4 mt-12 text-center"
                        >
                            Save automation
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function AutomationRow({
    initialAutomation,
}: {
    initialAutomation: Automation;
}) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [automation, setAutomation] = useState<Automation>(initialAutomation);

    return (
        <>
            <motion.div
                className="flex justify-between py-6 px-8"
                whileTap={{ backgroundColor: "#F3F4F6" }}
                onClick={() => setIsEditing(true)}
            >
                <div className="flex items-center gap-4">
                    <div className="h-12 p-2 bg-gray-100 text-gray-500 rounded-lg border w-12">
                        {icons[automation.type]}
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <div className="text-2xl font-semibold">
                            {automation.type}
                        </div>
                        <div className="text-gray-500 text-xs">
                            {automation.name}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-2xl text-gray-500 font-normal">
                    {automation.asset.amount}
                    <ChevronRightIcon className="w-6 h-6 text-gray-300" />
                </div>
            </motion.div>
            <EditAutomation
                automation={automation}
                update={(a) => setAutomation(a)}
                visible={isEditing}
                hide={() => setIsEditing(false)}
            />
        </>
    );
}
