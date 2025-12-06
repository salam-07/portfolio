import { useRef } from "react";

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>Human-Centered Developer and Researcher</p>
            <h1 ref={titleRef} className="mt-7">Abdus Salam</h1>

            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens</p>
            </div>
        </section>
    );
};

export default Welcome;