import React from 'react';

const Delayed = ({ children, waitBeforeShow }) => {
    const [isShown, setIsShown] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow ?? 500);

        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children : null;
}

export default Delayed;
