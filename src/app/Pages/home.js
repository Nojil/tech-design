import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div className="init-component-row">
                <div className="col">
                    <div className="row text-left">
                        <div className="special-heading">
                            <h2>Html introduction</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                HTML is the standard markup language for web pages and web applications. With HTML we create the scaffolding of a web page.
                            </p>
                            <ul>
                                <li>HTML stand for Hyper Text Markup Language</li>
                                <li>HTML describes the structure of a Web Page/Web Application</li>
                                <li>HTML consists of a series of elements</li>
                                <li>HTML elements tell the browser how to display the content</li>
                                <li>HTML elements are represented by tags</li>
                                <li>HTML tags label pieces of content such as "heading", "paragraph", "table", and so on</li>
                                <li>Browsers do not display the HTML tags, but use them to render the content of the page</li>
                            </ul>
                        </div>
                        <div className="col">
                            <pre><code>{`
                                <!DOCTYPE html>
                                <html>
                                    <head>
                                    <title>Page Title</title>
                                    </head>
                                    <body>
                                    
                                    <h1>My First Heading</h1>
                                    <p>My first paragraph.</p>
                                    
                                    </body>
                                </html>`
                            }</code></pre>
                        </div>
                    </div>
                    <div className="row text-left my-5">
                        <div className="special-heading">
                            <h2>CSS introduction</h2>
                        </div>
                        <div className="col">
                            <p className="pt-3">
                                HTML is a language that describes the style of an HTML document. CSS describes how HTMl elements should be displayed.
                            </p>
                            <ul>
                                <li>CSS stands for Cascading Style Sheets</li>
                                <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
                                <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
                                <li>External stylesheets are stored in CSS files</li>
                            </ul>
                        </div>
                        <div className="col">
                            <pre><code>{`
                                p {
                                    color: red;
                                    text-align: center;
                                }

                                .center {
                                    text-align: center;
                                    color: red;
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

export default HomePage;