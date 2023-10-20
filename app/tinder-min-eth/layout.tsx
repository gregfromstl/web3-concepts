import localFont from "next/font/local";

const gibson = localFont({
    src: [
        {
            path: "./gibson-light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./gibson-regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./gibson-medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./gibson-semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./gibson-bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function TinderStakeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={gibson.className}>{children}</main>;
}
