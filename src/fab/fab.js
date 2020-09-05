import React, { Component } from 'react'

export default class fab extends Component {
    render() {
        return (
            <div className="fab" onClick={e => this.props.showForm(true)}>
                &#43;

            </div>
        )
    }
}
