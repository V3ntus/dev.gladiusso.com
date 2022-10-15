import React from 'react';
import { Canvas } from '@react-three/fiber';

import Box from '../components/meshes/Box';

function Section({ variation }) {
    return (
        <Canvas>
            <ambientLight />
            <Box position={[1, -1, 0]} />
        </Canvas>
    )
}

export default function Home() {
    return (
        <div style={{
            display: 'block',
            width: '100%',
            minHeight: '100vh'
        }}>
            <Section />
        </div>
    )
}
