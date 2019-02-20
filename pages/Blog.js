import React, { Component } from 'react';
import Header from '../components/Header';
import NextSeo from 'next-seo';

class Blog extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%'
                }}
            >
                <NextSeo
                    config={{
                        title: 'Blog — Music To Heal',
                        twitter: { title: 'Blog — Music To Heal' },
                        openGraph: {
                            title: 'Blog — Music To Heal'
                        }
                    }}
                />
                <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                    <Header page="b" />
                </div>
                <h2 style={{ textAlign: 'center' }}> Our Blog </h2>
                <p style={{ fontFamily: 'Jost' }}> sample font size text testing... </p>
            </div>
        );
    }
}

export default Blog;
