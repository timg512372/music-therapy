import React, { Component } from 'react';
import NextSeo from 'next-seo';
import Header from '../components/Header';

class Post extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <NextSeo
                    config={{
                        title: 'Contact — Music To Heal',
                        twitter: { title: 'Contact — Music To Heal' },
                        openGraph: {
                            title: 'Contact — Music To Heal'
                        }
                    }}
                />
                <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                    <Header page="" />
                </div>

                <h2 style={{ textAlign: 'center', margin: '2vh 0 6vh 0' }}>Blog Post Title</h2>
            </div>
        );
    }
}

export default Post;
