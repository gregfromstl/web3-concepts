import localFont from "next/font/local";

const clash = localFont({ src: "./ClashDisplay.woff2", variable: "--clash" });

export default function InGameAuctionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={`bg-black ${clash.variable}`}>{children}</main>;
}
