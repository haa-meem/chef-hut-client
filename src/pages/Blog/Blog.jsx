import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { Button } from 'react-bootstrap';

const BlogPDF = () => (
    <Document>
        <Page>
            <Text>
                                       My Blog

                Tell us the differences between uncontrolled and controlled components.
                
                The main difference between uncontrolled and controlled components is that with uncontrolled components, the DOM manages the state of the input, while with controlled components, the component manages the state of the input. Controlled components provide more control and flexibility for developers, but can be more complex to implement. Uncontrolled components, on the other hand, are simpler to implement but offer less control over user input.


                How to validate React props using PropTypes?

                PropTypes is a built-in library in React that provides a way to validate the props passed to a component. By using PropTypes, you can ensure that your components receive the correct data types and catch errors early in development. To use PropTypes, you need to import it and define the PropTypes for your component, specifying the data types and any required props. If any of the props fail the validation, a warning will be shown in the console, making it easier to debug and maintain your code.


                Tell us the difference between node js and express js.

                Node.js provides a powerful runtime environment for running JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of features and utilities for building web applications. You can think of Node.js as the foundation, while Express.js is a tool built on top of it that makes it easier to build web applications.


                What is a custom hook, and why will you create a custom hook?
                custom hooks are a powerful feature of React that allow you to encapsulate and reuse stateful logic across different components. You can create a custom hook to encapsulate any logic that needs to be reused across multiple components, such as fetching data, managing state, or handling side effects.
            </Text>
        </Page>
    </Document>
);

const Blog = () => {
    return (
        <div className='text-center'>
            <h1 className='text-warning my-2 me-3 d-inline'>My Blog</h1>
            <PDFDownloadLink document={<BlogPDF />} fileName="blog.pdf">
                <Button className='mb-3' variant='warning'> {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download PDF"
                }Download PDF</Button>
            </PDFDownloadLink>
            <div className='border border-warning p-2 mb-2 rounded-4'>
                <h2 className='text-info'>Tell us the differences between uncontrolled and controlled components.</h2>
                <p>The main difference between uncontrolled and controlled components is that with uncontrolled components, the DOM manages the state of the input, while with controlled components, the component manages the state of the input. Controlled components provide more control and flexibility for developers, but can be more complex to implement. Uncontrolled components, on the other hand, are simpler to implement but offer less control over user input.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
                <h2 className='text-info'>How to validate React props using PropTypes?</h2>
                <p>
                    PropTypes is a built-in library in React that provides a way to validate the props passed to a component. By using PropTypes, you can ensure that your components receive the correct data types and catch errors early in development. To use PropTypes, you need to import it and define the PropTypes for your component, specifying the data types and any required props. If any of the props fail the validation, a warning will be shown in the console, making it easier to debug and maintain your code.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
                <h2 className='text-info'>Tell us the difference between node js and express js.</h2>
                <p>Node.js provides a powerful runtime environment for running JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of features and utilities for building web applications. You can think of Node.js as the foundation, while Express.js is a tool built on top of it that makes it easier to build web applications.</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
                <h2 className='text-info'>What is a custom hook, and why will you create a custom hook?</h2>
                <p> custom hooks are a powerful feature of React that allow you to encapsulate and reuse stateful logic across different components. You can create a custom hook to encapsulate any logic that needs to be reused across multiple components, such as fetching data, managing state, or handling side effects.</p>
            </div>
        </div>
    );
};

export default Blog;