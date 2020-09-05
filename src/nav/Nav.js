import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div>
            <nav className='Nav'>
                <Link to={'/'}>
                    Bookmark List
      </Link>
                {' '}
                <Link to={'/add-bookmark'}>
                    Add Bookmark
      </Link>
            </nav>

        </div>
    )
}
