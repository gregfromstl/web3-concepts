export type Wallet = {
    address: string;
    image: string;
    ens?: string;
};

export type Asset = {
    category: string;
    name: string;
    image: string;
    amount?: string;
};

export type Automation = {
    id: number;
    name?: string;
    type: string;
    receivedFrom?: Wallet;
    sendTo?: Wallet;
    asset: Asset;
};
