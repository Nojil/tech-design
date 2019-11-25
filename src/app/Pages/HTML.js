import React from 'react';

class HTMLPage extends React.Component {
    render() {
        return (
            <div className="init-component-row">
                <div className="col">
                    <div className="row text-left">
                        <div className="special-heading">
                            <h2>Html iCan Usage</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                Within the realm of the iCan we use HTML to build out custom Web Parts that are then displayed throughout the front end of the
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
                        </div>
                    </div>
                    <div className="row text-left my-5">
                        <div className="special-heading">
                            <h2>Common iCan HTML Tags</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                "Tags" are used throughout every single website/web application. Tags are used to identify and/or organize your front end code.
                                I like to think of HTMl tags as the Scaffolding of a building. If your building a new skyscraper the first step, next to the foundation,
                                would be "outlining" the building with steel beams, which are our HTML tags. Most HTML tags must have an opening tag <code>{'<p>'}</code> and a closing tag <code>{'</p>'}</code>.
                                All tags within an open and closing tag will inherit the parents styling.

                            </p>
                            <hr />
                            <p>The <code>{'<div></div>'}</code> tag: defines a division or a section in an HTML document. Often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.</p>
                            <p className="pt-3">The <code>{'<span></span>'}</code> tag: Used to group inline-elements in a document. Provides a way to add a hook to a part of a text or a part of a document.</p>
                            <p className="pt-3">The <code>{'<p></p>'}</code> tag: Known as the Paragraph tag. Defines a paragraph on the page.</p>
                            <p className="pt-3">The <code>{'<h1-6></h*>'}</code> tag: Used to define HTML headings. <code>{'<h1>'}</code> defines the most important heading. <code>{'<h6>'}</code> defines the least important heading.</p>
                            <p className="pt-3">The <code>{'<i></i>'}</code> tag: Used to display a <a href="https://fontawesome.com/" rel="noopener noreferrer" target="_blank">FontAwesome</a> icon.</p>
                            <p className="pt-3">The <code>{'<a></a>'}</code> tag: Known as the anchor tag. Used to "link" to a another page on the website or an external page/website. Can also be used to "anchor" to a section on a page.</p>
                            <p className="pt-3">The <code>{'<strong></strong>'}</code> tag: Used to "bold" a collection of text.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HTMLPage;