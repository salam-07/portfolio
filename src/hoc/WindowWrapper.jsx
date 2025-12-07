import useWindowStore from "#store/window";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { FocusIcon } from "lucide-react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = 'block';

            gsap.fromTo(el, {
                scale: 0.2, opacity: 0, y: 40
            }, { scale: 1, opacity: 1, y: 9, duration: 0.5, ease: "power3.out" });
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [instance] = Draggable.create(el, { onPress: () => { focusWindow(windowKey); } });

            return () => instance.kill();
        }, []);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section id={windowKey} ref={ref} style={{
                zIndex
            }} className="absolute">
                <Component {...props} />
            </section >
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || Component})`;

    return Wrapped;
};

export default WindowWrapper;