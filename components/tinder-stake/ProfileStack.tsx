import Profile from "./Profile";

export default function ProfileStack() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <Profile
                    image={{
                        src: "/tinder-min-eth/gary.jpeg",
                        alt: "Gary profile picture",
                    }}
                    name="Gary"
                    age={66}
                    distance={1000}
                />
            </div>

            <div className="absolute top-0 left-0 right-0 z-10 bottom-0">
                <Profile
                    image={{
                        src: "/tinder-min-eth/saylor.jpeg",
                        alt: "Saylor profile picture",
                    }}
                    name="Michael"
                    age={58}
                    distance={42}
                />
            </div>
        </div>
    );
}
