
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-violet-200 rounded-xl m-2">
        <h2 className="text-3xl text-center p-4 m-4">Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map(bookmark => <Bookmark
                bookmark={bookmark}
                key={bookmark.id}
            ></Bookmark>) 
        }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks
