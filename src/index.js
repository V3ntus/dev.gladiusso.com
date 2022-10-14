import React from "react";
import ReactDOM from "react-dom/client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {
  Slide,
  Fab
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = React.useState(false)

  const observer = React.useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])

  React.useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

function Header(props) {
  return (
    <>
      <div className="header" style={{ transform: "rotateX(50deg) rotateZ(12deg)" }}>
        <h1 className="fade-in-item" style={{ animationDelay: `500ms`, fontWeight: 'lighter' }}>V3ntus</h1>
        <p className="fade-in-item" style={{ animationDelay: `1000ms` }}>Full-stack, self-taught developer</p>
      </div>
      <ThemeProvider theme={darkTheme}>
        <Slide direction="up" in={true} timeout={1500}>
           <FontAwesomeIcon icon={faAngleDown} style={{ position: "absolute", bottom: "24px" }} />
        </Slide>
      </ThemeProvider>
    </>
  );
}

class WebsiteLink extends React.Component {
  render() {
    if (this.props.website) {
      return (
        <a href={this.props.website} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{fontSize: `24px`, paddingRight: `10px` }} />
        </a>
      );
    }
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    console.log(this.props.leftBtn, this.props.rightBtn)
  }

  handleLClick(e) {
    e.currentTarget.parentNode.parentNode.parentNode.previousElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end"
    })
  }

  handleRClick(e) {
    e.currentTarget.parentNode.parentNode.parentNode.nextElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end"
    })
  }

  render() {
    return (
      <div className="project" id={this.props.id}>
        <div style={{ padding: "2em", marginLeft: "4em", position: "absolute", bottom: 0 }}>
          <div className="project-nav">
            <Fab disabled={!this.props.leftBtn} onClick={this.handleLClick} id="project-left-nav">L</Fab>
            <Fab disabled={!this.props.rightBtn} onClick={this.handleRClick} id="project-right-nav">R</Fab>
          </div>
          <div className="project-links" style={{ alignItems: `center` }}>
            <a href={this.props.github}>
              <FontAwesomeIcon icon={faGithub} style={{fontSize: `24px`, paddingRight: `10px`}} />
            </a>
            <WebsiteLink website={this.props.website} />
          </div>
          <div className="project-description">
            <p>{this.props.description}</p>
          </div>
          <div className="project-title" style={{}}>
            <h1 style={{ fontSize: "4em" }}>{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

function Projects() {
  return (
    <ParallaxLayer
        offset={1}
        speed={0.5}
        id="projects"
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          color: 'white',
          scrollSnapAlign: "top"
        }}>
          {
            [
              {
                id: "top-project",
                title: "Darvester",
                description: "Proof of concept Discord user and guild information harvester",
                github: "https://github.com/darvester/darvester",
                website: "https://dev.gladiusso.com/darvester"
              },
              {
                title: "Website",
                description: "My website source",
                github: "https://github.com/V3ntus"
              }
            ].map((project, idx, array) => {
              return <Project {...project} leftBtn={!!idx} rightBtn={!(array.length <= (idx + 1))}/>
            })
          }
      </ParallaxLayer>
  )
}

root.render(
<Parallax pages={3} style={{ top: '0', left: '0' }} id="parallax-root">
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#111111', scrollSnapAlign: "top" }}>
    <Header />
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ scrollSnapAlign: "top" }}>
    <div className="project-backdrop">
      <img src="darvester.png" />
    </div>
  </ParallaxLayer>

  <Projects />
</Parallax>
);
