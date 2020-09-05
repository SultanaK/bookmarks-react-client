import React, { Component } from 'react';
import BookmarkList from '../bookmarklist/bookmarkList';
import Fab from '../fab/fab';
import '../fab/fab.css'

export default class bookmarkApp extends Component {
    render() {
        return (
            <div className="bookmarkApp">
                <BookmarkList bookmarks={this.props.bookmarks}/>
                <Fab showForm={this.props.showForm}/> 
            </div>
        )
    }
}
