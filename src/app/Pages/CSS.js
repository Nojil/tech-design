import React from 'react';

let pDemoStyles = {
    color: '#ff4c00',
    fontWeight: '900',
    fontSize: '16px'
}
class CSSPage extends React.Component {
    render() {
        return (
            <div className="init-component-row">
                <div className="col">
                    <div className="row text-left">
                        <div className="special-heading">
                            <h2>CSS iCan Usage</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                Within the realm of the iCan we use CSS style custom Web Parts that are then displayed throughout the front end of the
                                iCan website. Each Web part zone will consist of a webpart that is developed with HTML and styled through the CSS master style
                                sheet. Each Web Part can be edited by:
                                <ol className="mt-3">
                                    <li>Clicking the sharepoint Gear in the header and selecting "Edit Page."</li>
                                    <li>Once insid eth page editor click on the Web Part you wish to edit.</li>
                                    <li>A new menu bar will show up allowing you to "Edit Souce" of the website:
                                        <ul>
                                            <li>Format Text -> Edit Source</li>
                                        </ul>
                                    </li>
                                    <li>Upon clicking "Edit Source" a modal will popup with the source code for the said web part.
                                        <ul>
                                            <li>Within this HTMl code you can Add/Remove/Update many aspects of the selected web part.</li>
                                            <li>Note: Within here you will see a lot of HTML code that should never be changed.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </p>
                            <p className="pt-3">
                                Styling can be applied to any element within the HTML code through the use of the "style" attribute on the desired
                                HTML tag. We must always be mindful of how a style may interact with all other element of the page. 
                            </p>
                            <p className="pt-3">
                                Throughout the iCan many css styling is done through the use of "classes." We want to maintain this practice moving forward
                                as is creates resuability throughout the iCan. 
                            </p>
                        </div>
                   </div>
                   <div className="row text-left">
                        <div className="col">
                            <hr />
                            <p className="pt-3">
                                CSS styles is used throughout every single website/web application. Styles are used to create the look of a website/web application. 
                                Think of CSS as all the walls and infrastructure of a building. We cna have different carpet colors, walls painted different colors, and even different
                                bathroom amenaties throughout the building. 
                            </p>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col">
                            <p className="pt-3">
                                Classes are used to styling an element allowing for reusability throughout a website/web application. 
                                Instead of having to write the same style for every <code>{'<p>'}</code> tag we would add all the 
                                styles to a class and then assign that class to any element we want to inherit those styles. <span style={pDemoStyles} >Hello World!</span>
                            </p>
                            <p className="pt-3">
                                An element can have multiple classes, when this happens the element will receive all the styles associated with every class.
                            </p>
                        </div>
                        <div className="col">
                            <pre><code>{`
                                <p class="color-orange font-bold">Hello World!</p>

                                p {
                                    font-size: 16px;
                                }
                                .color-orange {
                                    color: #ff4c00;
                                }
                                .font-bold {
                                    font-weight: 900;
                                }
                                `
                            }</code></pre>
                        </div>
                        <hr />
                    </div>
                    <div className="row text-left">
                        <div className="special-heading">
                            <h2>Common iCan CSS Classes</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                There are 100's of classes used through the iCan that add custom styling to all the iCan webparts. We use these classes to
                                arrange different elements within webparts along with add coloring to text and even the background color of a section within
                                a webpart.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col">
                            <ul>
                                <li>background-orange</li>
                                <li>background-lightgrey</li>
                                <li>background-white</li>
                                <li>background-green</li>
                                <li>background-blue</li>
                                <li>background-grey</li>
                                <li>background-transparent</li>
                                <li>color-white</li>
                                <li>color-grey</li>
                                <li>color-orange</li>
                                <li>color-blue</li>
                                <li>color-green</li>
                                <li>color-red</li>
                            </ul>
                        </div>
                        <div className="col">
                            <pre><code>{`
                                .background-orange {
                                    background-color: #ff4c00;
                                }
                                .background-grey {
                                    background-color: #6E6259;
                                }
                                .background-white {
                                    background-color: #ffffff;
                                }
                                .color-blue {
                                    color: #00B3E3;
                                }
                                .color-green {
                                    color: #00bf6f;
                                }
                                .color-orange {
                                    color: #ff4c00;
                                }
                                `
                            }</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSPage;