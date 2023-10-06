"use client";
import Image from "next/image";
import { MaintenanceRecord } from "@/types/onchain-car-history";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

function HistoryCard({
    maintenanceRecord,
}: {
    maintenanceRecord: MaintenanceRecord;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`bg-white w-full p-6 transition duration-200 ${
                isOpen ? "shadow-lg" : "shadow-md"
            }`}
        >
            <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                    {maintenanceRecord.icon && (
                        <Image
                            width={100}
                            height={100}
                            src={maintenanceRecord.icon}
                            alt={maintenanceRecord.title}
                            className="opacity-75 w-10 h-auto"
                        />
                    )}
                    <div>
                        <p className="text-gray-400 flex items-center gap-1 text-xs">
                            <CheckBadgeIcon className="w-3 h-3" />
                            Verified on Polygon
                        </p>
                        <h3 className="text-base font-medium font-[#163553]">
                            {maintenanceRecord.title}
                        </h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    {new Date(maintenanceRecord.date).toLocaleDateString(
                        "en-US",
                        {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                        }
                    )}
                </p>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            marginTop: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            marginTop: 24,
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            marginTop: 0,
                            opacity: 0,
                        }}
                        className="overflow-hidden"
                        key={maintenanceRecord.id}
                    >
                        <p className="text-sm">
                            {maintenanceRecord.description}
                        </p>
                        <div className="flex justify-between mt-4">
                            {maintenanceRecord.location && (
                                <div className="flex gap-2 items-center">
                                    <MapPinIcon className="w-4 h-4 text-gray-400" />
                                    <p className="text-sm text-gray-400 underline">
                                        {maintenanceRecord.location}
                                    </p>
                                </div>
                            )}
                            <p className="w-full flex-1 text-sm text-right underline text-gray-400">
                                {maintenanceRecord.hash}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function History({ history }: { history: MaintenanceRecord[] }) {
    return (
        <div className="flex flex-col items-center p-8 px-4">
            <div className="w-12 h-2 bg-[#FFB84C]" />
            <h2 className="font-semibold text-4xl mt-4 font-[#163553] uppercase">
                History
            </h2>
            <div className="flex w-full flex-col mt-8">
                {history.map((maintenanceRecord, i) => (
                    <div key={maintenanceRecord.id}>
                        <HistoryCard maintenanceRecord={maintenanceRecord} />
                        {i < history.length - 1 && (
                            <div className="w-0 h-12 mx-auto border-[#1C9FD3] opacity-25 border-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
