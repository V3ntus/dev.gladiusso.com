import React from "react";
import { useSpring, animated, config } from '@react-spring/web';

export default function NavBar() {
  const [showState, setShowState] = React.useState(false);
  const [menuBtnHover, setMenuBtnHover] = React.useState(false);
  const { s, o, y } = useSpring({
    from: {
      o: 0,
      y: -100,
      s: 1
    },
    s: menuBtnHover ? 1.3 : 1,
    o: showState ? 1 : 0,
    y: showState ? 0 : -100,
    config: config.slow
  });

  React.useEffect(() => {
    setShowState(true);
    return () => {
      setShowState(false);
    }
  }, [])

  return (
    <animated.div style={{
      position: 'fixed',
      top: y.to((y) => `${y}px`),
      left: 0,
      width: '100%',
      paddingTop: '24px',
      paddingBottom: '64px',
      zIndex: -1,
      opacity: o.to((o) => o),
      background: 'rgb(0,0,0)',
      background: '-moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', // eslint-disable-line no-dupe-keys
      background: '-webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', // eslint-disable-line no-dupe-keys
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', // eslint-disable-line no-dupe-keys
      filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1)' // eslint-disable-line no-dupe-keys
    }}>
      <h1 style={{
        display: 'inline-block',
        fontWeight: 100,
        letterSpacing: '12px',
        paddingLeft: '64px'
      }}>VENTUS</h1>
      <span style={{  
        display: 'inline-block',
        marginLeft: '24px',
        color: '#aaaaaa'
      }}>DEVELOPER PROFILE</span>
      <animated.div style={{
        float: 'right',
        marginRight: '6vw',
        marginTop: '6px'
      }}>
        {false && <button style={{
          background: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setMenuBtnHover(true)}
        onMouseLeave={() => setMenuBtnHover(false)}>
          <animated.div id="animated-menu-btn" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            position: 'fixed',
            width: '50px',
            height: '50px',
            scale: s.to((s) => s),
          }}></animated.div>
        </button>}
      </animated.div>
    </animated.div>
  );
}
