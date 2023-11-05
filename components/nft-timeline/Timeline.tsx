"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { AiFillWarning, AiOutlineLineChart } from "react-icons/ai";
import { BiLineChartDown } from "react-icons/bi";

type Event = {
    date: Date;
    content: string;
    icon: ReactNode;
};

const timeline: Event[] = [
    {
        date: new Date("2021-10-01"),
        content: "@NFT_GOD used this as their PFP on X",
        icon: <AiFillWarning className="w-6 h-6 text-red-500" />,
    },
    {
        date: new Date("2021-12-25"),
        content: "This NFT was included in an exclusive merch drop",
        icon: <AiOutlineLineChart className="w-6 h-6 text-green-500" />,
    },
    {
        date: new Date("2022-2-14"),
        content:
            "The previously mentioned merch was put on clearance at Macy's",
        icon: <BiLineChartDown className="w-6 h-6 text-red-500" />,
    },
    {
        date: new Date("2023-9-14"),
        content:
            "@0xSifu opened a $20M short position on MAYC, what does he know!?!?!?",
        icon: <AiFillWarning className="w-6 h-6 text-red-500" />,
    },
];

function EventCallout({ event }: { event: Event }) {
    return (
        <div className="flex flex-col gap-1 items-end">
            <div className="text-sm text-gray-400">
                {event.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </div>
            <div className="rounded-xl font-medium p-4 w-full bg-gray-100 flex items-center gap-3">
                <div className="w-6">{event.icon}</div>
                {event.content}
            </div>
        </div>
    );
}

export default function Timeline() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-col gap-2 p-2 my-4">
            {timeline.map((e: Event, idx) => (
                <motion.div
                    className={`relative ${idx !== 0 ? "pt-6" : ""}`}
                    key={e.content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1 + idx * 0.1 },
                    }}
                    exit={{
                        opacity: 0,
                        y: 100,
                        transition: { delay: (timeline.length - idx) * 0.1 },
                    }}
                >
                    {idx !== 0 && (
                        <div className="w-0.5 bg-gray-200 h-10 absolute left-8 top-0" />
                    )}
                    <EventCallout event={e} />
                </motion.div>
            ))}
            <div
                onClick={() => setShowModal(true)}
                className="bg-red-500 mt-4 transitio9n duration-200 active:scale-95 text-white w-full font-bold p-3 text-lg rounded-xl flex justify-center items-center"
            >
                Report an incident
            </div>
        </div>
    );
}
