import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function MintAndSendLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={nunito.className}>{children}</main>;
}
