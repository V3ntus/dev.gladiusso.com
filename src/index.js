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
  Fab,
  Slide
} from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';
import "./index.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

function Header(props) {
  return (
    <>
      <div className="header" style={{ transform: "rotateX(50deg) rotateZ(12deg)" }}>
        <h1 className="fade-in-item" style={{ animationDelay: `500ms`, fontWeight: 'lighter' }}>V3ntus</h1>
        <p className="fade-in-item" style={{ animationDelay: `1000ms` }}>Full-stack, self-taught developer</p>
      </div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Slide direction="up" in={true}>
          <Fab sx={{ position: "absolute", bottom: "12px" }} color="secondary" ><FontAwesomeIcon icon={faAngleDown} /></Fab>
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
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{fontSize: `36px`, paddingRight: `10px` }} />
        </a>
      );
    }
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div className="project" id={this.props.id}>
        <div className="project-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="project-description">
          <p>{this.props.description}</p>
        </div>
        <div className="project-links" style={{ alignItems: `center` }}>
          <a href={this.props.github}>
            <FontAwesomeIcon icon={faGithub} style={{fontSize: `36px`, paddingRight: `10px`}} />
          </a>
          <WebsiteLink website={this.props.website} />
        </div>
      </div>
    );
  }
}

root.render(
<Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Header />
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#111111' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    <Project
      id="top-project"
      title="Darvester"
      description="Proof of concept Discord user and guild information harvester"
      github="https://github.com/V3ntus/darvester"
      website="https://dev.gladiusso.com/darvester"
    />
  </ParallaxLayer>
</Parallax>
);
