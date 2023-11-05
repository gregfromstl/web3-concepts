import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export default function CollectionFeedbackLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${font.className} overflow-hidden`}>{children}</div>
    );
}
