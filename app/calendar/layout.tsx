import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"] });

export default function CalendarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${font.className} max-h-screen overflow-hidden`}>
            {children}
        </div>
    );
}
