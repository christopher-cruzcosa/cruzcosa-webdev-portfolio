import './App.css';

function App() {
  return (
    <div role="main" class="flex-shrink-0">
        <div class="container" style={{backgroundColor: "whitesmoke;"}}>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#011A27"}}>
                    <a class="navbar-brand" href="./index.html" style={{color: "#F0810F;"}}>Christopher Cruzcosa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation" style={{color: "#F0810F;"}}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 d-flex flex-row-reverse">
                            <li class="nav-item active">
                                <a class="nav-link" href="./index.html" style={{color: "#F0810F;"}}>About<span
                                        class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./portfolio.html" style={{color: "#F0810F;"}}>Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./contact.html" style={{color: "#F0810F;"}}>Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./assets/Christopher Cruzcosa Resume.pdf" style={{color: "#F0810F;"}} target="_blank" >Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <br/>

            <main>
                <div class="row ml-2">
                    <div class="col-lg-9">
                        <h3>About Me</h3>
                        <br/>
                        <p class="float-left">
                            <img class="img-fluid float-left mr-5 mb-3" src="/images/headshot.jpg"
                                alt="headshot" style={{width: "33%", height: "33%;"}}/>
                            An IT professional with over 12 years of experience, primarily in
                            the public service sector. Originally from Texas, I went to NYU for college and fell in
                            love with the city. After receiving my B.A. in Ecomomics and Poltiics, I immediately
                            joined the US Army and spent four years on active duty.

                            After completing my tour of duty, I returned to NYC and spent ~ 10 years working in NYC
                            government, primarily in the data analysis and customer success fields.
                            <br/><br/>
                            However, I moved to San Diego in 2020 where I now reside with my family in Carmel
                            Valley. To further grow my formal technology skillset, I'm currently enrolled in a
                            Fullstack Web Development Bootcamp, through UC San Diego. I expect
                            to
                            graduate in late Nov, 2020 and afterwards I'm eager to dive into the web development
                            professional
                            space here in California.
                            <br/><br/>
                            Please reach out to me with any job opportunities you wish to discuss - full-time
                            positions and freelance welcome.
                        </p>
                        <div style={{clear:"both"}}></div>
                        <br/>

                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <strong>Email:</strong> <a
                                    href="mailto:christopher.cruzcosa@gmail.com" style={{color: "#F0810F"}}><strong>christopher-cruzcosa@gmail.com</strong></a>
                            </li>
                            <li>
                                <strong>Github:</strong> <a
                                    href="https://github.com/christopher-cruzcosa" target="_blank" style={{color: "#F0810F"}}><strong>christopher-cruzcosa</strong></a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong> <a
                                    href="https://www.linkedin.com/in/christopher-cruzcosa/" target="_blank" style={{color: "#F0810F"}}><strong>Christopher
                                        Cruzcosa</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <br/><br/><br/>
        </div>
    </div>
  );
}

export default App;
