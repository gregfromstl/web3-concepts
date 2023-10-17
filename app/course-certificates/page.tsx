import Course from "@/components/course-certificates/Course";
import Header from "@/components/course-certificates/Header";

const courses = [
    {
        logo: "/course-certificates/nyu-large.png",
        category: "Machine Learning",
        attestations: 14,
        title: "Autonomous Agents",
    },
    {
        logo: "/course-certificates/meta-large.png",
        category: "Machine Learning",
        attestations: 12,
        title: "Computer Vision",
    },
    {
        logo: "/course-certificates/stanford-large.png",
        category: "Machine Learning",
        attestations: 10,
        title: "NLP & LLMs",
    },
    {
        logo: "/course-certificates/nyu-large.png",
        category: "Crypto & Web3",
        attestations: 8,
        title: "Blockchain Design",
    },
    {
        logo: "/course-certificates/stanford-large.png",
        category: "Data Science",
        attestations: 15,
        title: "Data Analysis",
    },
    {
        logo: "/course-certificates/stanford-large.png",
        category: "Web Development",
        attestations: 10,
        title: "Full Stack Development",
    },
    {
        logo: "/course-certificates/meta-large.png",
        category: "Cyber Security",
        attestations: 12,
        title: "Ethical Hacking",
    },
    {
        logo: "/course-certificates/meta-large.png",
        category: "Artificial Intelligence",
        attestations: 14,
        title: "AI & Machine Learning",
    },
];

export default function CourseCertificates() {
    return (
        <main className="miin-h-screen max-w-[500px] scrollbar-none mx-auto relative bg-gray-50">
            <Header />
            <div className="flex p-4 px-2 pb-20 gap-2 flex-col">
                {courses.map((course) => (
                    <Course
                        key={course.title}
                        logo={course.logo}
                        category={course.category}
                        attestations={course.attestations}
                        title={course.title}
                        description="Lorem"
                    />
                ))}
            </div>
            <div className="flex justify-around items-center h-16 bg-white fixed bottom-0 w-full border-t border-gray-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                </svg>
            </div>
        </main>
    );
}
