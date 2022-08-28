declare const _default: {
    container: {
        hidden: {
            opacity: number;
            y: number;
        };
        visible: {
            opacity: number;
            y: number;
            transition: {
                delayChildren: number;
                staggerChildren: number;
            };
        };
    };
    item: {
        hidden: {
            y: string;
            transition: {
                type: string;
                duration: number;
                ease: number[];
            };
        };
        visible: {
            y: number;
            height: string;
            overflow: string;
            transition: {
                type: string;
                ease: number[];
                duration: number;
                bounce: number;
                bounceStiffness: number;
            };
        };
    };
    switchVariants: {
        unchecked: (tapped: boolean) => {
            x: string | number;
            scale: number;
            background: string;
            transition: {
                type: string;
                duration: number;
                bounce: number;
            };
        };
        checked: (tapped: boolean) => {
            scale: number;
            x: string | number;
            background: string;
            transition: {
                type: string;
                duration: number;
                bounce: number;
            };
        };
        tapped: (tapped: boolean) => {
            scale: number;
        };
    };
};
export default _default;