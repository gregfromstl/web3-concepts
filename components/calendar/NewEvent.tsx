import { Button, Checkbox, Input, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function NewEvent({
    open,
    close,
}: {
    open: boolean;
    close: () => void;
}) {
    const [loading, setLoading] = useState(false);

    const handleMint = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        close();
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        className="bg-black/50 absolute left-0 right-0 top-0 bottom-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        initial={{ y: 500 }}
                        animate={{ y: 56 }}
                        exit={{ y: 500 }}
                        className="bottom-0 left-0 right-0 bg-gray-800 absolute z-10 text-white rounded-t-3xl pb-24 p-8 flex flex-col"
                    >
                        <h2 className="text-3xl font-bold">New Event</h2>
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex gap-4">
                                <Input
                                    size="large"
                                    className="bg-gray-800"
                                    placeholder="Event title"
                                />
                                <TimePicker
                                    size="large"
                                    use12Hours
                                    format="h:mm"
                                    defaultValue={dayjs("1:00", "HH:mm")}
                                    className="bg-gray-800 min-w-[125px]"
                                    onChange={() => {}}
                                />
                            </div>
                            <Select
                                className="bg-gray-800"
                                mode="multiple"
                                allowClear
                                size="large"
                                style={{ width: "100%" }}
                                placeholder="Attendees"
                                defaultValue={["gregfromstl.eth"]}
                                onChange={() => {}}
                                options={[
                                    {
                                        label: "mariolopes.eth",
                                        value: "mariolopes.eth",
                                    },
                                    {
                                        label: "0xOmnia.eth",
                                        value: "0xOmnia.eth",
                                    },
                                    {
                                        label: "gregfromstl.eth",
                                        value: "gregfromstl.eth",
                                    },
                                    {
                                        label: "flexchapman.eth",
                                        value: "flexchapman.eth",
                                    },
                                    {
                                        label: "0xdesigner.eth",
                                        value: "0xdesigner.eth",
                                    },
                                ]}
                            />
                            <Checkbox className="text-gray-400" value="hidden">
                                Encrypt and hide this event's details
                            </Checkbox>
                            <Button
                                size="large"
                                type="primary"
                                className="bg-orange-500 hover:text-white mt-8 text-white"
                                loading={loading}
                                onClick={handleMint}
                            >
                                Mint Event
                            </Button>
                            <p className="text-xs text-white/50 text-center">
                                This will mint this event to your wallet and
                                mark you as unavailable during this time slot.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
