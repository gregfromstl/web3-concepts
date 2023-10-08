"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs({
    tabs,
}: {
    tabs: {
        id: number;
        icon: React.ReactNode;
        label: React.ReactNode;
        link: string;
    }[];
}) {
    const pathname = usePathname();
    return (
        <div className="w-full relative">
            <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none bg-gradient-to-r from-gray-50/50 to-gray-50/50 via-transparent" />
            <div className="w-full scroll-px-8 py-8 overflow-y-hidden scroll-smooth snap-mandatory snap-x scrollbar-none overflow-x-scroll">
                <div className="flex gap-6 px-8">
                    {tabs.map((tab, index) => (
                        <Link
                            href={tab.link}
                            key={tab.id}
                            className={`snap-start flex gap-3 transition duration-200 p-2 px-3 pr-5 rounded-xl justify-start items-center ${
                                pathname.includes(tab.link)
                                    ? "shadow-lg border bg-white"
                                    : "bg-gray-100 shadow-sm"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                        pathname.includes(tab.link)
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-100 text-gray-400"
                                    }`}
                                >
                                    {tab.icon}
                                </div>
                                <div className="text-lg font-semibold">
                                    {tab.label}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
