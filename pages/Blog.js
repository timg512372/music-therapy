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
                <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                    <Header page="b" />
                </div>
                <h2 style={{ textAlign: 'center', margin: '2vh 0 15vh 0' }}>Our Blog</h2>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            margin: '10vh'
                        }}
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
                            Blog 2 Title: November 2018
                        </div>
                        <div
                            style={{
                                width: '50%',
                                fontSize: '110%',
                                lineHeight: '150%'
                            }}
                        >
                            This is Music Therapy Lorem ipsum dolor sit etc etc etc amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />
                            <Link href="/post/[id]" as="/post/first">
                                <a>View Post</a>
                            </Link>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                            margin: '10vh'
                        }}
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
                            Blog 1 Title: October 2018
                        </div>
                        <div
                            style={{
                                width: '50%',
                                fontSize: '110%',
                                lineHeight: '150%',
                                opacity: '0.8'
                            }}
                        >
                            This is Music Therapy Lorem ipsum dolor sit etc etc etc amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />
                            <Link href="/post/[id]" as="/post/second">
                                <a>View Post</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const button = {
    borderRadius: '0px',
    borderWidth: '1px',
    fontFamily: 'Jost',
    fontWeight: 200
};

export default Blog;
