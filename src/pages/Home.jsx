import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated, to } from '@react-spring/web';
import styles from './home.module.css';

const Page = ({ offset, gradient, onClicks, content }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClicks[0]}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClicks[1]}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>

      <ParallaxLayer className={`${styles.text}`} offset={offset} speed={0.3}>
        {content}
      </ParallaxLayer>
    </>
  )
}

export default function Home() {
  const parallax = React.useRef(null);
  const horizontal_page1 = React.useRef(null);

  const [showState, setShowState] = React.useState(false);

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
    }, 700);

    return (() => {
      setShowState(false);
    });
  }, []);

  const scroll = (_parallax, to) => {
    if (_parallax.current) {
      _parallax.current.scrollTo(to);
    }
  }

  return (
    <Parallax style={{
        display: 'block',
        width: '100%',
        minHeight: '100vh',
        top: 0,
        left: 0
      }}
      pages={3}
      ref={parallax}
    >
      <ParallaxLayer offset={1} speed={1} style={{
        backgroundColor: '#3a3a3a'
      }}/>
      <ParallaxLayer offset={2} speed={1} style={{
        backgroundColor: '#000000'
      }}/>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Parallax pages={3} className={styles.container} ref={horizontal_page1} horizontal>
          <Page offset={0} gradient="light-1" onClicks={[() => window.open('https://github.com/darvester/darvester', '_blank'), () => scroll(horizontal_page1, 1)]} content={
            <>
              <h1>Darvester</h1>
              <p>Powerful Discord OSINT toolkit</p>
            </>
          }/>
          <Page offset={1} gradient="light-2" onClicks={[() => window.open(), () => scroll(horizontal_page1, 2)]} content={
            <>
              <h1>Portfolio</h1>
              <p>My website portfolio</p>
              <div>
                <a href="https://github.com/darvester/darvester" target="_blank" rel="noreferrer">Github</a>
              </div>
            </>
          }/>
          <Page offset={2} gradient="light-3" onClicks={[() => window.open(), () => scroll(horizontal_page1, 0)]} />
        </Parallax>
      </ParallaxLayer>
    </Parallax>
  )
}
