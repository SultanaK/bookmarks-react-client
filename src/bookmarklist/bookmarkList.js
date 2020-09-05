import React, { Component } from 'react'
import Bookmark from '../bookmark/bookmark'
export default class bookmarkList extends Component {
    render() {
        const bookmarks = this
            .props.bookmarks
            .map((bookmark, i) => <Bookmark {...bookmark} key={i} />);
        return (
            <div className="bookmarkList">
                {bookmarks}  
            </div>
        )
    }
}
bookmarkList.defaultProps = {
    bookmarks: []
};

