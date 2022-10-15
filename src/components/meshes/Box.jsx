import React from 'react';

import { useFrame } from '@react-three/fiber';

export default function Box(props) {
    const mesh = React.useRef();
    const [hovered, setHover] = React.useState(false);
    const [active, setActive] = React.useState(false);

    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color={hovered ? 'white' : 'grey'} />
        </mesh>
    )
}
