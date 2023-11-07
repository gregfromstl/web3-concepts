import localFont from "next/font/local";

const font = localFont({
    src: [
        {
            path: "./Euclid Circular B Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./Euclid Circular B Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Euclid Circular B Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Euclid Circular B SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Euclid Circular B Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
});
export default function MetaMaskSelfieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${font.className} w-screen h-screen`}>{children}</div>
    );
}
