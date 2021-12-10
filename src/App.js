import {AnimatePresence} from 'framer-motion/dist/framer-motion'
import { useContext, useRef } from "react";
import AnimatedCursor from "react-animated-cursor"
import './App.css';
import AddPost from "./Components/AddPost/AddPost";
import Header from './Components/Header/Header';
import Posts from "./Components/Posts/Posts";
import contentContext from "./context/contentContext";


function App() {
  let appRef = useRef()
  const{content} = useContext(contentContext)

  function changeBgPosition(e) {
    let x = (  - window.innerWidth -  e.pageX  ) / 60
    let y = ( window.innerHeight - e.pageY  ) / 60 
  
    appRef.current.style.backgroundPosition = `${x}px ${y}px`
    appRef.current.style.transition = "all 0.6s ease"
  }
  return (
    <div className="App">
      <div className="bg__overlay" ref={appRef} onMouseMove={changeBgPosition}></div>
      <Header />
      <div className="content__wraper"
      >
        <AnimatePresence>
        
        {
          content === 'form' ? (
            <div className="animate__animated animate__fadeInRight">
              <AddPost />
            </div>
          ) : (
            <div className="animate__animated animate__fadeInLeft">
              <Posts />
            </div>
          )
        }
      </AnimatePresence>
     
      </div>
      <div className="cursor">
        <AnimatedCursor 
          innerSize={0}
          outerSize={1}
          color='255,255,255'
          outerAlpha={0.1}
          innerScale={0}
          outerScale={1.7}
        />
      </div>
    </div>
  );
}

export default App;
