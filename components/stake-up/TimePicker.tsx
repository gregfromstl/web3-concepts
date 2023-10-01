"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import { throttle } from "lodash";

export default function TimePicker() {
    const [hour, setHour] = useState(6);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const hourContainerRef = useRef<any>(null);
    const minuteContainerRef = useRef<any>(null);
    const secondContainerRef = useRef<any>(null);

    useEffect(() => {
        hourContainerRef.current.scrollTop = 112 * (hour - 1);
    }, []);

    const handleHourScroll = useCallback(
        throttle((e: any) => {
            const index = Math.round(hourContainerRef.current?.scrollTop / 112); // 96px is the height of each item (h-24 in tailwind)
            setHour(index + 1);
        }, 200),
        []
    );

    const handleMinuteScroll = useCallback(
        throttle((e: any) => {
            const index = Math.round(
                minuteContainerRef.current?.scrollTop / 112
            ); // 96px is the height of each item (h-24 in tailwind)
            setMinute(index);
        }, 200),
        []
    );

    const handleSecondScroll = useCallback(
        throttle((e: any) => {
            const index = Math.round(
                secondContainerRef.current?.scrollTop / 112
            ); // 96px is the height of each item (h-24 in tailwind)
            setSecond(index);
        }, 200),
        []
    );

    return (
        <div className="relative w-full h-64">
            <div className="absolute top-0 z-10 bottom-0 right-0 left-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
            <div className="absolute flex top-0 bottom-0 right-0 left-0">
                <div
                    ref={hourContainerRef}
                    className="w-full h-full overflow-scroll py-20 scrollbar-none scroll-smooth snap-y"
                    onScroll={handleHourScroll}
                >
                    {Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-center text-6xl h-28 transition-all duration-100 text-center w-full font-bold snap-center ${
                                hour === i ? "" : "opacity-25"
                            }`}
                        >
                            {i.toString().padStart(2, "0")}
                        </div>
                    ))}
                </div>
                <div
                    ref={minuteContainerRef}
                    className="h-full py-20 w-full overflow-scroll scrollbar-none snap-y"
                    onScroll={handleMinuteScroll}
                >
                    {Array.from({ length: 60 }, (_, i) => i).map((i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-center text-6xl h-28 transition-all duration-100 text-center w-full font-bold snap-center ${
                                minute === i ? "" : "opacity-25"
                            }`}
                        >
                            {i.toString().padStart(2, "0")}
                        </div>
                    ))}
                </div>
                <div
                    ref={secondContainerRef}
                    className="h-full py-20 w-full overflow-scroll scrollbar-none snap-y"
                    onScroll={handleSecondScroll}
                >
                    {Array.from({ length: 60 }, (_, i) => i).map((i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-center text-6xl h-28 transition-all duration-100 text-center w-full font-bold snap-center ${
                                second === i ? "" : "opacity-25"
                            }`}
                        >
                            {i.toString().padStart(2, "0")}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
