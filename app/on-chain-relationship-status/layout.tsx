import localFont from "next/font/local";

const satoshi = localFont({
    src: "./Satoshi-Variable.ttf",
});

export default function OnChainRelationshipStatus({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={satoshi.className}>{children}</main>;
}
