import React from 'react';

class ToolingPage extends React.Component {
    render() {
        return (
            <div className="init-component-row">
                <div className="col">
                    <div className="row text-left">
                        <div className="special-heading">
                            <h2>Web Dev Tooling</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                Web development tools allow developers to work with a variety of web technologies, 
                                including HTML, CSS, the DOM, JavaScript, and other components that are handled by 
                                the web browser.
                            </p>
                            <p className="pt-3">
                                In regards to the iCan we use tooling to help us edit webaprts without corrupting the code. 
                                This can happen by accidently deleting an extra closing tag or by moving a group of code
                                to the wrong place.
                            </p>
                            <hr />
                            <p className="pt-3">
                            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><strong>Visual Studio Code</strong></a>: Used to edit code blocks with ease.
                            </p>
                            <p className="pt-3">
                                <strong>Google Chrome Dev tools</strong>: Used to inspect a webpage and gain some insight into what is going on with the page 
                                and help comb through errors and bugs.
                                <br />
                                -> To view Google Chrome Dev Tools click F12 while in google chrome or rightclick the page and select "Inspect Element."
                            </p>
                        </div>
                    </div>
                    <div className="row text-left my-5">
                        <div className="special-heading">
                            <h2>References</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer"><strong>W3Schools</strong></a>: Great reference to learn and study up on HTML &amp; CSS.
                            </p>
                            <p className="pt-1">
                                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer"><strong>FontAwesome</strong></a>: All our icons we use on the iCan are from fontawesome. 
                            </p>
                            <p className="pt-1">
                                <a href="http://test.website.pscu.org/brandStylingGuide/" target="_blank" rel="noopener noreferrer"><strong>BrandStylingGuide</strong></a>: A guideline to what we can and cannot use throughout our web presences. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolingPage;