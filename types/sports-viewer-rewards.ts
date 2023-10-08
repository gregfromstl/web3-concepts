export type Airdrop = {
    status: "pending" | "claimable" | "claimed" | "claiming";
    amount: number;
    asset: string;
};
