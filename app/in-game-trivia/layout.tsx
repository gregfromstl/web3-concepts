import { Play } from "next/font/google";

const font = Play({ weight: ["400", "700"], subsets: ["latin"] });

export default function InGameTriviaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={font.className}>{children}</div>;
}
