import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from "react-icons/fa6";


// eslint-disable-next-line react/prop-types
const Blog = ({ blog }) => {
    // eslint-disable-next-line react/prop-types
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img src={cover} className='w-full mb-8' alt={`Cover picture of the tilte ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img src={author_img} className='w-14 rounded-full' alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 '><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    // eslint-disable-next-line react/jsx-key, react/prop-types
                    hashtags.map(hash => <span><a href="#" className='text-slate-600'>{hash} </a></span> )
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;