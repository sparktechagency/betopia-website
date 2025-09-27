import BlogDetailsMain from '@/components/ui/web-pages/blog-details/BlogDetailsMain'
import React, { Suspense } from 'react';

const page = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogDetailsMain />
            </Suspense>
        </React.Fragment>
    )
}

export default page