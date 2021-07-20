import { useState } from "react";

export default function useScreenSize() {
    const small = () => window.innerWidth < 700;
    const [isSmall, setIsSmall] = useState(small());
    window.addEventListener('resize', () => {
        setIsSmall(small())
    });
    return isSmall
}
