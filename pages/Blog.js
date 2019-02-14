import React, { Component } from 'react';
import Header from '../components/Header';

class Blog extends Component {
    render() {
        return (
            <div>
                <Header page="b" />
                <h2> Incomplete Blog Page </h2>
                <p style={{ fontFamily: 'Jost' }}> sample font size text testing... </p>
            </div>
        );
    }
}

export default Blog;
