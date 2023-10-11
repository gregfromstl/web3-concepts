export type PreferenceSelection = {
    content: React.ReactNode;
    idx: number;
};

export type PreferenceCategory = {
    selection: PreferenceSelection;
    options: PreferenceSelection[];
};
