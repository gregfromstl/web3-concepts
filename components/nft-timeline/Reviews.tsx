import { motion } from "framer-motion";
import Image from "next/image";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

const reviews: {
    [name: string]: {
        review: string;
        soldOn?: string;
        boughtOn: string;
        image: string;
        like: boolean;
    };
} = {
    "#21036": {
        review: "meh",
        soldOn: "December 5, 2022",
        boughtOn: "December 5, 2021",
        image: "https://i.seadn.io/gcs/files/f31fb228f52322f180eb362f687b26aa.png?auto=format&dpr=1&w=640",
        like: false,
    },
    "#14942": {
        review: "good investment, nothing more",
        boughtOn: "April 4, 2023",
        like: true,
        image: "https://i.seadn.io/gcs/files/9fdc39157eecfb031d480d8e70850733.png?auto=format&dpr=1&w=640",
    },
    "#22898": {
        review: "I mortgaged my house for this!?",
        soldOn: "May 5, 2023",
        boughtOn: "April 5, 2023",
        like: false,
        image: "https://i.seadn.io/gcs/files/ffca4da9e36e6a3a1281a37ee559328e.png?auto=format&dpr=1&w=640",
    },
};

function Review({
    name,
    review,
    soldOn,
    boughtOn,
    like,
    image,
    entryOffset,
    exitOffset,
}: {
    name: string;
    review: string;
    soldOn?: string;
    boughtOn: string;
    like: boolean;
    image: string;
    entryOffset: number;
    exitOffset: number;
}) {
    return (
        <motion.div
            key={name}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1 + entryOffset },
            }}
            exit={{
                opacity: 0,
                y: 100,
                transition: { delay: exitOffset },
            }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1 border p-3 rounded-2xl px-4"
        >
            <div className="flex items-center w-full gap-2">
                <div className="w-10 overflow-hidden h-10 rounded-full bg-gray-300 relative">
                    <Image
                        src={image}
                        fill
                        className="object-cover object-center"
                        alt=""
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between w-full items-center gap-1">
                        <div className="font-bold">{name}</div>
                        {like ? (
                            <FaThumbsUp className="w-4 h-4 text-[#2081E2]" />
                        ) : (
                            <FaThumbsDown className="w-4 h-4 text-red-500" />
                        )}
                    </div>
                    <div className="text-xs text-gray-500">
                        {soldOn ? "Sold on" : "Holder since"}{" "}
                        {boughtOn || soldOn}
                    </div>
                </div>
            </div>
            <div className="mt-2">{review}</div>
        </motion.div>
    );
}

export default function Reviews() {
    return (
        <div className="flex flex-col gap-4 my-4">
            {Object.entries(reviews).map(
                ([name, { review, soldOn, image, boughtOn, like }], idx) => (
                    <Review
                        key={name}
                        name={name}
                        review={review}
                        soldOn={soldOn}
                        boughtOn={boughtOn}
                        like={like}
                        image={image}
                        entryOffset={idx * 0.1}
                        exitOffset={
                            (Object.entries(reviews).length - idx) * 0.1
                        }
                    />
                )
            )}
        </div>
    );
}
