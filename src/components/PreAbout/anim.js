export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 0.5, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.4, ease: [0.3, 0, 0, 0], delay: 0.2}
    }
}