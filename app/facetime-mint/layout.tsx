import localFont from "next/font/local";

const sfPro = localFont({ src: "./SF-Pro-Text-Regular.otf" });

export default function MintAndSendLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={`${sfPro.className} bg-black`}>{children}</main>;
}
