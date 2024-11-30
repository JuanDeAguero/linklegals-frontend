import "./app.css"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

const Home = () => <div className="landing-page">
    <div className="landing-page-content">
        <div className="title">Innovation to Empower</div>
        <div className="subtitle">Harnessing AI to create Practical Solutions for Everyday Challanges</div>
        <Link to="/about" className="learn-more">Learn More</Link>
    </div>
</div>

const About = ({ isMobile, showMenu, scrollY }) => {
    
    const ourStoryRef = useRef(null)
    const innovateRef = useRef(null)
    const identifyingProblemRef = useRef(null)
    const missionVisionRef = useRef(null)
    const initialStepsRef = useRef(null)
    const innovationCollabRef = useRef(null)
    const futureGoalsRef = useRef(null)
    const callToActionRef = useRef(null)
    const researchRef = useRef(null)
    const collaborationsRef = useRef(null)

    const scrollToElementWithOffset = (elementRef, offset = 0) => {
        if (elementRef && elementRef.current) {
            const elementPosition = elementRef.current.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY + offset
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }
  
    return (
      <div className="page" style={{ overflow: showMenu && isMobile ? "hidden" : "auto", height: showMenu && isMobile ? "calc(100vh - 60px)" : "auto" }}>
        <div className="about-guide">
          <button className="about-guide-button" onClick={() => ourStoryRef.current.scrollIntoView({ behavior: "smooth" })}>Our Story</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => innovateRef.current.scrollIntoView({ behavior: "smooth" })}>Innovate, Connect, Empower</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => identifyingProblemRef.current.scrollIntoView({ behavior: "smooth" })}>Identifying the Problem</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => missionVisionRef.current.scrollIntoView({ behavior: "smooth" })}>Mission and Vision</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => initialStepsRef.current.scrollIntoView({ behavior: "smooth" })}>Initial Steps and Development</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => innovationCollabRef.current.scrollIntoView({ behavior: "smooth" })}>Innovation and Collaboration</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => futureGoalsRef.current.scrollIntoView({ behavior: "smooth" })}>Future Goals</button>
          <button className="about-guide-button about-guide-subtitle" onClick={() => callToActionRef.current.scrollIntoView({ behavior: "smooth" })}>Call to Action</button>
          <button className="about-guide-button" onClick={() => researchRef.current.scrollIntoView({ behavior: "smooth" })}>Research</button>
          <button className="about-guide-button" onClick={() => collaborationsRef.current.scrollIntoView({ behavior: "smooth" })}>Collaborations</button>
        </div>
        <div className="about-guide-mobile" style={{ position: scrollY < 65 ? "absolute" : "fixed", top: scrollY < 65 ? "5px" : "0" }}>
            <button className="about-guide-mobile-button" onClick={() => scrollToElementWithOffset(ourStoryRef, -40)}>1. Our Story</button>
            <button className="about-guide-mobile-button" onClick={() => scrollToElementWithOffset(researchRef, -40)}>2. Research</button>
            <button className="about-guide-mobile-button" onClick={() => scrollToElementWithOffset(collaborationsRef, -40)}>3. Collaborations</button>
        </div>
        <div className="about-title" ref={ourStoryRef}>Our Story</div>
        <div className="about-subtitle" ref={innovateRef}>Innovate, Connect, Empower</div>
        <div className="about-text">“The future of human work is in specific domain expertise. Understanding the challenges and then using autonomously intelligent technology to help us provide solutions.”</div>
        <div className="about-text">- Jensen Huang</div>
        <div className="about-text">Our journey starts with recognizing the vital role of domain experts in guiding AI to solve real-world problems. In many sectors, experts see the potential of existing technologies if adapted correctly. Instead of waiting for these changes to happen, we took action to create practical AI-driven tools. We saw an opportunity to make AI beneficial for those with fewer resources by helping them share their stories more effectively.</div>
        <div className="about-subtitle" ref={identifyingProblemRef}>Identifying the Problem</div>
        <div className="about-text">Many AI innovations are not addressing the needs of underrepresented communities. Specifically, we identified a few key problems to address:</div>
        <div className="about-text">Repetitive Storytelling: Clients expend valuable time and energy recounting their experiences to multiple individuals involved in their case, resulting in fatigue and the omission of important details.</div>
        <div className="about-text">Limited Options: Time constraints force clients to accept less optimal choices.</div>
        <div className="about-text">Document Complexity: The complex nature of many documents renders them difficult for clients to comprehend.</div>
        <div className="about-text">Language Barriers: These barriers pose substantial challenges to accessing legal services.</div>
        <div className="about-subtitle" ref={missionVisionRef}>Mission and Vision</div>
        <div className="about-text">Our mission is to innovate, connect, and empower by creating AI solutions that are advanced, accessible, and socially responsible. We envision a platform that prioritizes user safety and confidentiality.</div>
        <div className="about-subtitle" ref={initialStepsRef}>Initial Steps and Development</div>
        <div className="about-text">We began with research to understand our audience"s needs. This led to the development of our mobile app, which in its first phase, offers essential services that will be expanded over time. Currently, the app is in the MVP stage with plans to add more features to make a beta version available to our collaborators for testing. This approach combines AI technology with human expertise to ensure accuracy and reliability.</div>
        <div className="about-subtitle" ref={innovationCollabRef}>Innovation and Collaboration</div>
        <div className="about-text">We believe in the power of collaboration. By working with partners, we ensure our solutions are grounded in real-world needs. User privacy and safety are central to our development process, and we are committed to maintaining the highest ethical standards.</div>
        <div className="about-subtitle" ref={futureGoalsRef}>Future Goals</div>
        <div className="about-text">Looking ahead, we plan to scale our services and introduce new features that will further empower our users. Our goal is to continuously innovate and improve, making our platform a trusted resource for communities around the world.</div>
        <div className="about-subtitle" ref={callToActionRef}>Call to Action</div>
        <div className="about-text">Join us on this journey. Whether you’re a potential user, a collaborator, or simply someone who believes in our mission, we welcome you. Together, we can innovate, connect, and empower.</div>
        <div className="about-title" ref={researchRef}>Research</div>  
        <div className="about-title" ref={collaborationsRef}>Collaborations</div>
      </div>
    )
}

const Services = () => <div className="page"></div>
const Contact = () => <div className="page"></div>
const TranslatorGPT = () => <div className="page"></div>

const BackgroundGradient = () => {
    const location = useLocation()
    return <>
        <div className="background-gradient" style={{ height: location.pathname === "/" ? "100vh" : "5px", top: location.pathname === "/" ? "0" : "60px", zIndex: location.pathname === "/" ? "-1" : "2" }} />
    </>
    
}

const App = () => {

    const [showMenu, setShowMenu] = useState(true)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1050)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1050);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }, [isMobile])

    const onLinkClick = () => {
        if (isMobile) {
            setShowMenu(false)
        }
    }

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
    <Router>
        <div className="app">
        <BackgroundGradient />
            <nav>
                <div className="nav-content">
                    <img className="logo" src="logo.png" />
                    {showMenu ? <div className="nav-right">
                        <Link to="/" onClick={onLinkClick} className="nav-button">Home</Link>
                        <Link to="/about" onClick={onLinkClick} className="nav-button">About</Link>
                        <Link to="/" onClick={onLinkClick} className="nav-button">Services</Link>
                        <Link to="/" onClick={onLinkClick} className="nav-button">Contact</Link>
                        <Link to="/" onClick={onLinkClick} className="nav-button">Translator GPT</Link>
                        <div className="nav-right-background" />
                    </div> : null}
                    <button className="menu" onClick={() => setShowMenu(!showMenu)}>
                        <img className="menu-icon" src="menu.png" />
                    </button>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About isMobile={isMobile} showMenu={showMenu} scrollY={scrollY} />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/translator-gpt" element={<TranslatorGPT />} />
            </Routes>
        </div>
    </Router>
    )
}

export default App