export type MaintenanceRecord = {
    id: string;
    title: string;
    description: string;
    hash: string;
    icon?: string;
    location?: string;
    date: string;
};

export type Listing = {
    id: string;
    car: {
        make: string;
        model: string;
        year: number;
        type: string;
        mileage: number;
    };
    asking: number;
    images: string[];
    history: MaintenanceRecord[];
};
