import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-start mt-4'>
            <h1>Question: What is context API?</h1>
            <p className='mb-2'>Answer:React data always goes one way. It goes from parent to child which sometimes becomes more complex and coding is more time consuming. To minimize this issue context API is use. It's a react structure which solves prop-drilling issues from all level of a react application. It enables you to exchange unique details from one component to another component even overlooking some child components.</p>
            <h1>Question:What is semantic tag?</h1>
            <p>Answer: Semantic tag is very specific with their purpose of use. They accurately describe the purpose of the element and the type of content that is inside them. Some example of semantic tags are header, footer, table, figure etc. Browsers can easily understand what types of content these are holding. Where non-semantic tags are not specific like div, span etc.   </p>
        </div>
    );
};

export default Blogs;