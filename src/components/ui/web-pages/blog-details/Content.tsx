import { BlogItem } from '@/types';
import React from 'react';

interface IContentProps {
    content: BlogItem[];
}

const Content: React.FC<IContentProps> = ({ content }) => {
    return (
        <div>
            {
                content.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description1}</p>

                        <ul className='list-disc ml-5 mb-5'>
                            {item.list.map((listItem, idx) => (
                                <li key={idx}>{listItem}</li>
                            ))}
                        </ul>
                        {item?.description2 && <p>{item.description2}</p>}

                        {item?.list2 &&
                            <ul className='list-disc ml-5 mb-5'>
                                {item.list2.map((listItem, idx) => (
                                    <li key={idx}>{listItem}</li>
                                ))}
                            </ul>
                        }

                        {item?.subFooter && <p>{item.subFooter}</p>}


                    </div>
                ))
            }

        </div>
    );
};

export default Content;