import {
    CheckCircleIcon,
    PaperClipIcon,
    FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const activity = [
    {
        id: 1,
        type: "shipped you a package from New York, NY",
        person: {
            name: "Sophia Castellano",
            imageUrl:
                "https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        date: "7d ago",
        dateTime: "2023-01-23T10:32",
    },
    {
        id: 2,
        type: "picked up from New York, NY",
        person: { name: "Harrison Blake" },
        date: "6d ago",
        dateTime: "2023-01-23T11:03",
    },
    {
        id: 3,
        type: "dropped off in Des Moines, IA",
        person: { name: "Harrison Blake" },
        date: "5d ago",
        dateTime: "2023-01-24T11:24",
    },
    {
        id: 4,
        type: "picked up from Des Moines, IA",
        person: { name: "Isabella Barrett" },
        date: "5d ago",
        dateTime: "2023-01-24T11:24",
    },
    {
        id: 5,
        type: "dropped off in Las Vegas, NV",
        person: { name: "Isabella Barrett" },
        date: "4d ago",
        dateTime: "2023-01-25T13:24",
    },
    {
        id: 6,
        type: "picked up from Las Vegas, NV",
        person: { name: "Nathanial Quinn" },
        date: "4d ago",
        dateTime: "2023-01-25T13:24",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Feed() {
    return (
        <>
            <ul role="list" className="space-y-6 py-6">
                <li className="relative flex gap-x-4">
                    <div
                        className={
                            "-bottom-6 absolute left-0 top-0 flex w-8 justify-center"
                        }
                    >
                        <div className="w-px bg-gray-200" />
                    </div>
                    <div className="relative flex h-8 w-8 flex-none items-center justify-center bg-white">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                    </div>
                    <p className="flex-auto py-1.5 text-sm leading-5 text-gray-500">
                        <span className="font-medium text-gray-900">
                            Final destination:
                        </span>{" "}
                        San Francisco, CA
                    </p>
                    <div className="flex-none py-1.5 text-sm leading-5 text-gray-500">
                        Arrives in 1d
                    </div>
                </li>
                {activity
                    .slice()
                    .reverse()
                    .map((activityItem, activityItemIdx) => (
                        <li
                            key={activityItem.id}
                            className="relative flex gap-x-4"
                        >
                            <div
                                className={classNames(
                                    activityItemIdx === activity.length - 1
                                        ? "h-6"
                                        : "-bottom-6",
                                    "absolute left-0 top-0 flex w-8 justify-center"
                                )}
                            >
                                <div className="w-px bg-gray-200" />
                            </div>
                            {activityItem.person.imageUrl ? (
                                <>
                                    <div className="relative ring-1 ring-gray-300 mt-3 overflow-hidden h-8 w-8 flex-none rounded-full bg-gray-50">
                                        <Image
                                            src={activityItem.person.imageUrl}
                                            className="object-center object-cover"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="flex-auto rounded-md py-3">
                                        <div className="flex justify-between gap-x-4">
                                            <p className="flex-auto py-0.5 text-sm leading-5 text-gray-500">
                                                <span className="font-medium text-gray-900">
                                                    {activityItem.person.name}
                                                </span>{" "}
                                                {activityItem.type}
                                            </p>
                                            <time
                                                dateTime={activityItem.dateTime}
                                                className="flex-none py-0.5 text-sm leading-5 text-gray-500"
                                            >
                                                {activityItem.date}
                                            </time>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative flex h-8 w-8 flex-none items-center justify-center bg-white">
                                        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                                    </div>
                                    <p className="flex-auto py-1.5 text-sm leading-5 text-gray-500">
                                        <span className="font-medium text-gray-900">
                                            {activityItem.person.name}
                                        </span>{" "}
                                        {activityItem.type}
                                    </p>
                                    <time
                                        dateTime={activityItem.dateTime}
                                        className="flex-none py-1.5 text-sm leading-5 text-gray-500"
                                    >
                                        {activityItem.date}
                                    </time>
                                </>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
