import "./app.css"

const App = () => {
    return (
    <div className="app">
        <div className="background-gradient"></div>
        <nav>
            <div className="nav-content">
                <img className="logo" src="logo.png" />
                <div className="nav-right">
                    <button className="nav-button">Home</button>
                    <button className="nav-button">About</button>
                    <button className="nav-button">Services</button>
                    <button className="nav-button">Contact</button>
                    <button className="nav-button">Translator GPT</button>
                </div>
            </div>
        </nav>
        <div className="landing-page">
            <div className="title">Innovation to Empower</div>
            <div className="subtitle">Harnessing AI to create Practical Solutions for Everyday Challanges</div>
            <button className="learn-more">Learn More</button>
        </div>
        <div className="welcome">
            <div className="welcome-section">
                <div className="welcome-title">Welcome to our platform!</div>
                <div className="welcome-text">Request services or inquire about collaborations. Share your details, and we'll get back to you promptly.</div>
                <img className="logo-welcome" src="logo.png" />
            </div>
            <div className="welcome-section">
                <div className="welcome-title">Document Translation Services</div>
                <div className="welcome-text">Receive accurate, timely, and certified translations, with careful attention to detail and cultural context.</div>
                <img className="doc" src="doc.png" />
           </div>
            <div className="welcome-section">
                <div className="welcome-title">USCIS Interpretation Services</div>
                <div className="welcome-text">We provide interpretation for USCIS interviews at Baltimore and Fairfax, with practice sessions to help you feel confident and ready.</div>
                <img className="uscis" src="uscis.png" />
            </div>
            <div className="welcome-section">
                <div className="welcome-title">Request a Quote or Service</div>
                <div className="welcome-text">Fill out the form or email us at Translations@LinkLegals.com for translations and Interpretation@LinkLegals.com for interpretation services. We're here to assist you!</div>
            </div>
        </div>
        <footer></footer>
    </div>
    )
}

export default App