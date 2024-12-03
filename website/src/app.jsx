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

    useEffect(() => {
        console.log(scrollY)
    }, [scrollY])

    const [section, setSection] = useState("Our Story")

    const sectionNumberToName = (number) => {
        if (number === 0) return "Our Story"
        else if (number === 1) return "Innovate, Connect, Empower"
        else if (number === 2) return "Identifying the Problem"
        else if (number === 3) return "Mission and Vision"
        else if (number === 4) return "Initial Steps and Development"
        else if (number === 5) return "Innovation and Collaboration"
        else if (number === 6) return "Future Goals"
        else if (number === 7) return "Call to Action"
        else if (number === 8) return "Research"
        else if (number === 9) return "Collaborations"
    }

    useEffect(() => {
        const updateSection = () => {
            const currentSection = sections.findIndex(
                (limit, index) => scrollY > sections[index] && scrollY <= sections[index + 1]
            )
            setSection(sectionNumberToName(currentSection))
        }
        updateSection()
    }, [scrollY])

    const determineGuideStyleHelper = (scrollY, prev, max) => {
        if (scrollY > prev && scrollY <= max) {
            return "about-guide-curr"
        } else if (scrollY > prev) {
            return "about-guide-prev"
        }
    }

    const sections = [-1, 150 - 40, 500 - 40, 950 - 40, 1110 - 40, 1365 - 40, 1560 - 40, 1730 - 40, 1910 - 40, 2510 - 40, 10000]

    const determineGuideStyle = (number, scrollY) => {
        if (number === 0) return determineGuideStyleHelper(scrollY, sections[0], sections[1])
        else if (number === 1) return determineGuideStyleHelper(scrollY, sections[1], sections[2])
        else if (number === 2) return determineGuideStyleHelper(scrollY, sections[2], sections[3])
        else if (number === 3) return determineGuideStyleHelper(scrollY, sections[3], sections[4])
        else if (number === 4) return determineGuideStyleHelper(scrollY, sections[4], sections[5])
        else if (number === 5) return determineGuideStyleHelper(scrollY, sections[5], sections[6])
        else if (number === 6) return determineGuideStyleHelper(scrollY, sections[6], sections[7])
        else if (number === 7) return determineGuideStyleHelper(scrollY, sections[7], sections[8])
        else if (number === 8) return determineGuideStyleHelper(scrollY, sections[8], sections[9])
        else if (number === 9) return determineGuideStyleHelper(scrollY, sections[9], sections[10])
    }

    const determineMobile = (ref, refNext) => {
        if (!refNext) {
            if (!ref.current) return ""
            let refPos = ref.current.getBoundingClientRect().top + window.scrollY - 50
            return determineGuideStyleHelper(scrollY, refPos, 10000)
        }
        if (!ref.current || !refNext.current) return ""
        let refPos = ref.current.getBoundingClientRect().top + window.scrollY - 50
        if (ref === ourStoryRef) refPos = -1
        let refNextPos = refNext.current.getBoundingClientRect().top + window.scrollY - 50
        return determineGuideStyleHelper(scrollY, refPos, refNextPos)
    }
  
    return (
      <div className="page" style={{ overflow: showMenu && isMobile ? "hidden" : "auto", height: showMenu && isMobile ? "calc(100vh - 60px)" : "auto" }}>
        <div className="about-guide">
          <button className={"about-guide-button " + determineGuideStyle(0, scrollY)} onClick={() => scrollToElementWithOffset(ourStoryRef, -40)}>Our Story</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(1, scrollY)}  onClick={() => scrollToElementWithOffset(innovateRef, -40)}>Innovate, Connect, Empower</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(2, scrollY)} onClick={() => scrollToElementWithOffset(identifyingProblemRef, -40)}>Identifying the Problem</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(3, scrollY)} onClick={() => scrollToElementWithOffset(missionVisionRef, -40)}>Mission and Vision</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(4, scrollY)} onClick={() => scrollToElementWithOffset(initialStepsRef, -40)}>Initial Steps and Development</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(5, scrollY)} onClick={() => scrollToElementWithOffset(innovationCollabRef, -40)}>Innovation and Collaboration</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(6, scrollY)} onClick={() => scrollToElementWithOffset(futureGoalsRef, -40)}>Future Goals</button>
          <button className={"about-guide-button about-guide-subtitle " + determineGuideStyle(7, scrollY)} onClick={() => scrollToElementWithOffset(callToActionRef, -40)}>Call to Action</button>
          <button className={"about-guide-button " + determineGuideStyle(8, scrollY)} onClick={() => scrollToElementWithOffset(researchRef, -40)}>Research</button>
          <button className={"about-guide-button " + determineGuideStyle(9, scrollY)} onClick={() => scrollToElementWithOffset(collaborationsRef, -40)}>Collaborations</button>
        </div>
        <div className="about-guide-mobile" style={{ visibility: scrollY < 65 && !isMobile ? "collapse" : "visible", position: scrollY < 65 ? "absolute" : "fixed", top: scrollY < 65 ? "5px" : "0", justifyContent: !isMobile && "center", paddingLeft: !isMobile && "0" }}>
            {scrollY >= 65 && !isMobile && <div className="about-guide-mobile-title">{section}</div>}
            {isMobile && <button className={"about-guide-mobile-button " + determineMobile(ourStoryRef, researchRef)} onClick={() => scrollToElementWithOffset(ourStoryRef, -40)}>1. Our Story</button>}
            {isMobile && <button className={"about-guide-mobile-button " + determineMobile(researchRef, collaborationsRef)} onClick={() => scrollToElementWithOffset(researchRef, -40)}>2. Research</button>}
            {isMobile && <button className={"about-guide-mobile-button " + determineMobile(collaborationsRef, null)} onClick={() => scrollToElementWithOffset(collaborationsRef, -40)}>3. Collaborations</button>}
        </div>
        <div className="about-title about-first" ref={ourStoryRef}>Our Story</div>
        <div className="about-subtitle" ref={innovateRef}>Innovate, Connect, Empower</div>
        <div className="about-text about-quote">“The future of human work is in specific domain expertise. Understanding the challenges and then using autonomously intelligent technology to help us provide solutions.”</div>
        <div className="about-text about-jensen">- Jensen Huang</div>
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
        <div className="about-text">We are committed to research and innovation to better serve our community and service providers. We're developing a mobile app that uses AI to create practical solutions, prioritizing user safety, confidentiality, and ethical use of emerging technologies.</div>
        <div className="about-text">Our key initiatives include:</div>
        <div className="about-text">User-Centric Design: Ensuring our app is intuitive and accessible to all users, regardless of their tech proficiency.</div>
        <div className="about-text">Continuous Improvement: Regularly updating our technology and practices based on user feedback and advancements in the field.</div>
        <div className="about-text">Community Engagement: Actively involving our community in the development process to ensure the app meets real-world needs.</div>
        <div className="about-text">Educational Resources: Providing users with resources and support to help them make the most of our technology.</div>
        <div className="about-text">We believe that by integrating these elements, we can create a more inclusive, effective, and secure platform for all.  More detailed information about the application will be available soon.</div>
        <div className="about-title" ref={collaborationsRef}>Collaborations</div>
        <div className="about-text">We proudly collaborate with American University, which supports our research efforts and contributes to the development of our mobile app by providing access to their extensive resources, including faculty expertise, and technical support. Additionally, we are working with non-profits and private attorneys who offer expert legal guidance, help expand our translation and interpretation services, and provide valuable app usability feedback, which we use to better understand their communities and address their needs.</div>
        <div className="about-text">In these early stages, we plan to collaborate with more organizations and professionals who share our vision of making services more accessible and understandable for everyone through the use of emerging technology. Understanding the importance of privacy, safety, and user empowerment, we are dedicated to ensuring these core values are at the forefront of our initiatives.</div>
        <div className="about-text about-last">Interested in partnering or collaborating with us? Reach out at collaborations@linklegals.com.</div>
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

    const [isSafari, setIsSafari] = useState(false)

    useEffect(() => {
        const userAgent = navigator.userAgent
        const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent) && !isMobile
        setIsSafari(isSafariBrowser)
    }, [isMobile])

    return (
    <>
    {!isSafari || isMobile ? <Router>
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
    </Router> : <div>This website doesn't work on Safari. Try using Google Chrome.</div>}
    </>
    )
}

export default App