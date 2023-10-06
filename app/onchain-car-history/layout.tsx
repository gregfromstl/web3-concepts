import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MintAndSendLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className={montserrat.className}>{children}</main>;
}
