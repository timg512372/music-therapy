import React, { Component } from 'react';
import Header from '../components/Header';
import NextSeo from 'next-seo';
import Button from 'grommet/components/Button';
import Link from 'next/link';

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
                {this.props.desktop ? (
                    <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                        <Header page="b" />
                    </div>
                ) : (
                    <div style={{ height: '4vh' }} />
                )}
                <h2 style={{ textAlign: 'center', margin: '2vh 0 15vh 0' }}>Our Blog</h2>
                {blogs.map((post, index) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            margin: '10vh 0 10vh 0'
                        }}
                        key={index}
                    >
                        <div
                            style={{
                                width: '30%',
                                textAlign: 'center',
                                fontSize: '150%',
                                fontFamily: 'Jost',
                                letterSpacing: '0.1em',
                                opacity: '0.8'
                            }}
                        >
                            {post.title}
                        </div>
                        <div
                            style={{
                                width: '50%',
                                fontSize: '110%',
                                lineHeight: '150%'
                            }}
                        >
                            {post.text}
                            <br />
                            <br />
                            {post.id ? (
                                <Link href={`/post/${post.id}`} as="/post/first">
                                    <a>View Post</a>
                                </Link>
                            ) : null}
                        </div>
                    </div>
                ))}
                <div style={{ marginTop: '500px' }}></div>
            </div>
        );
    }
}

const blogs = [
    {
        title: 'No Blogs Posted Yet'
    }
];

const button = {
    borderRadius: '0px',
    borderWidth: '1px',
    fontFamily: 'Jost',
    fontWeight: 200
};

export default Blog;
