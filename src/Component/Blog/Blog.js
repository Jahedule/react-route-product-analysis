import React from 'react';

const Blog = () => {
    return (
      <div className="m-7">
        <div>
          <h1 className="font-bold text-lg flex justify-center mb-5">
          What is the purpose of context API?
          </h1>
          <p className="text-justify">
            The context API is a React structure. The Context API is used to share the data with multiple components, without having to pass data through props manually.The React Context API allows us to produce the global data and share it across the application. This is the alternative to "prop drilling" or moving props from grandparent to child/grandchild, and so on. It is an easier, lighter approach than Redux for sharing the data across the application. The context API has actually always been there but was considered experimental. Moving forward the API was improved to stability, and as of the release of version 16.3, the feature was made available and subsequently considered a new addition to the clan of teatures that make React a wonderful faramework. Context API consists of three major parts which are Create context, Provider, Consumer. 
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg flex justify-center mb-5 mt-5">
          What is a semantic tag?
          </h1>
          <p>
            We know that One of the most important features of HTML5 is its semantics. HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed. Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. The semantic HTML tags help the search gngines and other user devices to determine the importance and context of web pages. The pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience. Semantic HTML elements such as Header, footer, Article, Figure, Details, Mark etc. 
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg flex justify-center mb-5 mt-5">
          What is the difference between inline and block elements?
          </h1>
          <p>
            <span className="font-bold">Inline:</span> Inline elements can begin within a line of the HTML element and it never starts a new line for the HTML. The width is defined only till the tags of inline extends. Inline elements can break among the lines. Inline elements can be nested between block and inline elements, Inline elements are kind of content related elements and display most of the contents. Width and heights are not considered in inline elements. The inline elements do expand in a way to accommodate other elements but not in terms of width and height.{" "} <br></br>
            <span className="font-bold">Block:</span> Blocks cannot begin within a line of the HTML element and it always starts the new line of the HTML. The width is more than inline and is extended till the parent element extends. Block elements cannot break among the lines. Block elements create large structures when compared with inline elements and easily support large files. Width and height are considered and they expand in terms of width, height and borders mainly. This helps the files to find space of its own. 
          </p>
        </div>
      </div>
    );
};

export default Blog;