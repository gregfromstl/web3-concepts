"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewEvent from "@/components/calendar/NewEvent";
import { ConfigProvider, theme } from "antd";
import { AnimatePresence, motion } from "framer-motion";

const timeSlots = Array.from({ length: 24 }, (_, i) => i);
const initialEvents = [
    {
        title: "Hot Yoga",
        start: 11,
        end: 12,
        attendees: [
            {
                address: "gregfromstl.eth",
                avatar: "https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg",
            },
        ],
        hidden: true,
    },
    {
        title: "Catchup with Flex",
        start: 14,
        end: 15,
        attendees: [
            {
                address: "gregfromstl.eth",
                avatar: "https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg",
            },
            {
                address: "flexchapman.eth",
                avatar: "https://pbs.twimg.com/profile_images/1449574265519366145/cM_R0foN_400x400.jpg",
            },
        ],
        hidden: false,
    },
];

export default function Calendar() {
    const [newEventOpen, setNewEventOpen] = useState(false);
    const [events, setEvents] = useState(initialEvents);

    const createEvent = () => {
        setNewEventOpen(false);
        setEvents([
            ...initialEvents,
            {
                title: "Launch the thing",
                start: 13,
                end: 14,
                attendees: [
                    {
                        address: "gregfromstl.eth",
                        avatar: "https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg",
                    },
                ],
                hidden: true,
            },
        ]);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: "rgb(249 115 22)",
                    colorBgContainer: "rgb(31 41 55)",
                },
            }}
        >
            <main className="bg-gray-900 overflow-hidden h-screen max-w-[500px] scrollbar-none mx-auto relative">
                <div className="text-white flex flex-col h-full px-4">
                    <header className="py-8 pb-2 gap-4 top-0 bg-gray-900 flex border-b-2 border-gray-800 flex-col justify-center items-start">
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-3xl font-thin flex gap-2">
                                <span className="font-bold">October</span>2023
                            </h2>
                            <Image
                                src="https://pbs.twimg.com/profile_images/1646330655784017921/xBrfH2y2_400x400.jpg"
                                alt=""
                                width={100}
                                height={100}
                                className="rounded-full w-10 h-10"
                            />
                        </div>
                        <div className="flex gap-2 justify-center w-full my-2">
                            Mon
                            <div className="bg-orange-500 text-white font-bold px-1.5 rounded-md">
                                30
                            </div>
                        </div>
                    </header>

                    <section className="flex-grow select-none overflow-scroll scrollbar-none py-4">
                        {timeSlots.map((hour) => (
                            <div className="flex w-full gap-4 h-48" key={hour}>
                                <div
                                    className={`text-gray-400 -translate-y-2 w-10 text-xs text-right`}
                                >
                                    {hour === 12 || hour === 0 ? 12 : hour % 12}{" "}
                                    {hour < 12 ? "AM" : "PM"}
                                </div>
                                <div className="flex-grow border-b border-gray-800">
                                    {events.map((event) => (
                                        <AnimatePresence key={event.title}>
                                            {event.start === hour && (
                                                <motion.div
                                                    initial={{
                                                        height: "0%",
                                                        padding: 0,
                                                    }}
                                                    animate={{
                                                        height: "100%",
                                                        padding: 12,
                                                    }}
                                                    exit={{
                                                        height: "0%",
                                                        padding: 0,
                                                    }}
                                                    key={event.title}
                                                    className="bg-orange-500 relative active:scale-95 group cursor-pointer hover:bg-orange-600 transition duration-200 h-full rounded-lg text-gray-50 px-3"
                                                >
                                                    <div
                                                        className={`flex justify-between ${
                                                            event.hidden
                                                                ? "blur-sm group-active:blur-none transition duration-200"
                                                                : ""
                                                        }`}
                                                    >
                                                        <h3
                                                            className={`text-lg`}
                                                        >
                                                            {event.title}
                                                        </h3>
                                                        <div className="flex -space-x-2 h-8">
                                                            {event.attendees.map(
                                                                (attendee) => (
                                                                    <Image
                                                                        key={
                                                                            attendee.address
                                                                        }
                                                                        src={
                                                                            attendee.avatar
                                                                        }
                                                                        alt={
                                                                            attendee.address
                                                                        }
                                                                        width={
                                                                            30
                                                                        }
                                                                        height={
                                                                            30
                                                                        }
                                                                        className="rounded-full h-full w-auto ring-2 ring-orange-500"
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                    {event.hidden && (
                                                        <p className="opacity-0 group-active:opacity-60 text-white transition duration-200 text-base text-center absolute bottom-4 left-4 right-4">
                                                            This event's details
                                                            are encrypted and
                                                            only visible to your
                                                            wallet.
                                                        </p>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                    <div
                        onClick={() => setNewEventOpen(true)}
                        className="absolute right-8 bottom-8 cursor-pointer shadow-lg border hover:bg-orange-600 transition duration-200 active:scale-95 bg-orange-500 rounded-full p-4"
                    >
                        <PlusIcon className="text-white w-8 h-8" />
                    </div>
                    <NewEvent open={newEventOpen} close={createEvent} />
                </div>
            </main>
        </ConfigProvider>
    );
}
