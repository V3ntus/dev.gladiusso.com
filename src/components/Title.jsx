import React from "react";
import { useSpring, animated, to } from '@react-spring/web';

export default function Title() {
  const [showState, setShowState] = React.useState(false);
  const [isUnmounting, setIsUnmounting] = React.useState(false);
  const { x, y, z, o } = useSpring({
    from: {
      x: 0,
      y: -150,
      z: 0,
      o: 0
    },
    o: showState ? 1 : 0,
    x: showState ? 42 : 0,
    y: showState ? 0 : -150,
    z: showState ? -20 : 0,
    config: {
      tension: 80,
      friction: 11
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      setShowState(true);
      setTimeout(() => {
        setIsUnmounting(true);
        setShowState(false);
      }, 2000);
    }, 700);

    return (() => {});
  }, []);

  return (
    <animated.div
      style={{
        display: o.to((o) => {
          if (o === 0) {
            return 'none'
          } else {
            return 'initial'
          }
        }),
        width: "100%",
        height: "98vh",
        backgroundColor: "#1A1A1A",
        padding: 0,
        margin: 0,
        zIndex: 4,
        opacity: o.to((o) => isUnmounting ? o : 1)
      }}
    >
      <animated.div
        id="title-grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "min-content",
          gap: "1px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: to([x, z], (x, z) => `translate(-50%, -50%) rotateX(${x}deg) rotateZ(${z}deg)`),
          zIndex: 4,
          transformOrigin: "50% 50%",
          opacity: o.to((o) => o)
        }}
      >
        <h1 id="title-col1-1">V</h1>
        <animated.h1 id="title-col2-1" className='title-col2' style={{
          transform: y.to((y) => `translateY(${y}px)`)
        }}>D</animated.h1>
        <animated.h1 id="title-col2-2" className='title-col2' style={{
          transform: y.to((y) => `translateY(${y}px)`)
        }}>E</animated.h1>
        <animated.h1 id="title-col2-3" className='title-col2' style={{
          transform: y.to((y) => `translateY(${y}px)`)
        }}>V</animated.h1>
        <h1 id="title-col3-1">NTUS</h1>
      </animated.div>
    </animated.div>
  );
}
