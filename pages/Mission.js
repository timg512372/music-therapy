import React, { Component } from 'react';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import NextSeo from 'next-seo';

import Header from '../components/Header';

class Mission extends Component {
    render() {
        return (
            <div style={{ margin: '5vh' }}>
                <NextSeo
                    config={{
                        title: `Mission — Music To Heal`,
                        twitter: { title: 'Mission — Music To Heal' },
                        openGraph: {
                            title: 'Mission — Music To Heal'
                        }
                    }}
                />
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[
                            {
                                children: (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    >
                                        <img
                                            src="/static/aboutus.jpg"
                                            style={{ width: '100%', height: '100%' }}
                                            alt="some sample"
                                        />
                                    </div>
                                ),
                                amount: 0.1,
                                slowerScrollRate: true
                            },
                            {
                                children: (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start',
                                            width: '98.7%',
                                            textAlign: 'center',
                                            margin: '2vh 0 0 10px'
                                        }}
                                        className="heading"
                                    >
                                        <Header page="h" />

                                        <div
                                            style={{
                                                color: '#ffffff',
                                                margin: '18vh 0px 20px 0px',
                                                letterSpacing: '0.1em',
                                                fontFamily: 'Jost',
                                                fontSize: '190%',
                                                fontWeight: '400'
                                            }}
                                        >
                                            Our Mission
                                        </div>
                                    </div>
                                ),
                                amount: 0.1,
                                slowerScrollRate: false
                            }
                        ]}
                        style={{
                            height: '90vh'
                        }}
                    />

                    <ParallaxBanner
                        layers={[
                            {
                                children: (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                ),
                                amount: 0.1,
                                slowerScrollRate: false
                            },
                            {
                                children: (
                                    <div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                width: '100%',
                                                marginTop: '20vh'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '40%',
                                                    textAlign: 'center',
                                                    fontSize: '200%',
                                                    fontFamily: 'Jost',
                                                    letterSpacing: '0.1em',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                who we are
                                            </div>
                                            <div
                                                style={{
                                                    width: '40%',
                                                    fontSize: '110%',
                                                    lineHeight: '150%',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                This is Music Therapy Lorem ipsum dolor sit etc etc
                                                etc amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                width: '100%',
                                                marginTop: '10vh'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '40%',
                                                    textAlign: 'center',
                                                    fontSize: '200%',
                                                    fontFamily: 'Jost',
                                                    letterSpacing: '0.1em',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                why alzheimer's
                                            </div>
                                            <div
                                                style={{
                                                    width: '40%',
                                                    fontSize: '110%',
                                                    lineHeight: '150%',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                This is Music Therapy Lorem ipsum dolor sit etc etc
                                                etc amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat
                                                cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                    </div>
                                ),
                                amount: 0.1,
                                slowerScrollRate: false
                            }
                        ]}
                        style={{
                            height: '100vh'
                        }}
                    />
                </ParallaxProvider>
                <style jsx>{`
                    .navlink {
                        color: #ffffff;
                    }
                `}</style>
            </div>
        );
    }
}

export default Mission;
