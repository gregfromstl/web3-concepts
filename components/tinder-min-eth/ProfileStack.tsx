import Profile from "./Profile";

export default function ProfileStack() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <Profile
                    image={{
                        src: "/tinder-stake/bitboy.webp",
                        alt: "Bitboy profile picture",
                    }}
                    name="Ben"
                    age={39}
                    distance={1000}
                />
            </div>

            <div className="absolute top-0 left-0 right-0 z-10 bottom-0">
                <Profile
                    image={{
                        src: "/tinder-stake/vitalik.jpg",
                        alt: "Vitalik Buterin profile picture",
                    }}
                    name="Vitalik"
                    age={29}
                    distance={1}
                />
            </div>
        </div>
    );
}
