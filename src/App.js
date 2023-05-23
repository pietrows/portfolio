import "./App.scss";
import logo from "./assets/images/logo.png";
import me from "./assets/images/me.png";
import { useEffect } from "react"


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function App() {

useEffect(() => {
  const header = document.getElementById("header");
  const sticky = header.offsetTop;

  function toggleMenu() {
    if (window.scrollY !== sticky) {
      header.classList.add("sticky")
      header.classList.remove("d-none")
    } else {
      header.classList.add("d-none");
      header.classList.remove("sticky");

    }
  }
  window.onscroll = () => {
    toggleMenu()
  }
}, [])



  return (
    <>
      <header id="header" className="d-none">
        <div className="menu">
          <div className="container d-lg-flex justify-content-between">
            <a className="d-none d-lg-flex align-items-center" href="#home">
              <img width={40} height={40} src={logo} alt="logo" />
            </a>
            <ul className="menu__list d-none d-lg-flex">
              <li className="menu__list--item">About</li>
              <li className="menu__list--item">Portfolio</li>
              <li className="menu__list--item">contact</li>
            </ul>
            <div className="topnav">
              <a className="d-flex align-items-center" href="#home">
                <img width={40} height={40} src={logo} alt="logo" />
              </a>
              <button className="icon" onClick={myFunction}>
                <svg width="35" height="35" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  />
                </svg>
              </button>
            </div>
            <div id="myLinks">
              <a href="#news">About</a>
              <a href="#contact">Portfolio</a>
              <a href="#about">contact</a>
            </div>
          </div>
        </div>
      </header>
      <div className="hero container">
        <div className="row">
          <div className="d-flex col-md-12 mt-5">
            <h1 className="title">HELLO, I'M</h1>
            <h1 className="title title__name">
                Antonio
                Pietro
            </h1>
          </div>
          <h1 className="title title__description">
            AND I'M A <br /> FRONTEND DEVELOPER
          </h1>
        </div>
        <div className="hero__avatar">
          <a href="mailto:abspietro@gmail.com">
            <button className="hero__avatar--button">get in touch</button>
          </a>
          <img src={me} alt="me" />
        </div>
      </div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col">
        <h1 className="section__header">teste</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
