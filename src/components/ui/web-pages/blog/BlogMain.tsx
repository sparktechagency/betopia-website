import React from 'react';
import BlogBanner from './BlogBanner';
import Planning from './Planning';
import Transforming from './Transforming';
import Highlights from './Highlights';

const BlogMain: React.FC = () => {
    return (
        <React.Fragment>
            <BlogBanner/>
            <Planning/>
            <Transforming/>
            <Highlights/>
        </React.Fragment>
    );
};

export default BlogMain;