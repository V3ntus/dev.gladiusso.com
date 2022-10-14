import React from 'react';
import { useSpring, animated } from '@react-spring/three';

import '../index.css';

export default function NavBar() {
    const [springs, api] = useSpring(() => ({}));

    return (
        <div>
            <h1>VENTUS</h1>
        </div>
    )
}
