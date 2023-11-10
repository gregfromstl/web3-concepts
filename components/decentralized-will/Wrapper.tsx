"use client";

import {
    AnimatePresence,
    MotionValue,
    motion,
    useTransform,
} from "framer-motion";

export default function Wrapper({
    progress,
}: {
    progress: MotionValue<number>;
}) {
    const fill = useTransform(progress, [0, 40], [0, 0.8]);
    const fill2 = useTransform(progress, [0, 100], [0.8, 0.8]);

    return (
        <AnimatePresence>
            <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                className="w-56 h-56 rotate-[126deg]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    fill="transparent"
                    className="stroke-[#ECECEC] rounded-full"
                    style={{
                        pathLength: fill2,
                    }}
                    cx="200"
                    cy="200"
                    r="190"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <motion.circle
                    fill="transparent"
                    className="stroke-[#756ED9] rounded-full"
                    pathLength={1}
                    style={{ pathLength: fill }}
                    cx="200"
                    cy="200"
                    r="190"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </svg>
        </AnimatePresence>
    );
}
