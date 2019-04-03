import React, { Component } from 'react';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import NextSeo from 'next-seo';

import Header from '../components/Header';

class Mission extends Component {
    render() {
        return (
            <div style={{ margin: '3vw' }}>
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
                                            width: '100%'
                                        }}
                                    >
                                        <img
                                            src="/static/aboutus.jpg"
                                            style={{ width: '94vw', height: '58vw' }}
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
                                            margin: '1.2vw 0 0 10px'
                                        }}
                                        className="heading"
                                    >
                                        <Header page="h" />

                                        <div
                                            style={{
                                                color: '#ffffff',
                                                margin: '10vw 0px 20px 0px',
                                                letterSpacing: '0.1em',
                                                fontFamily: 'Jost',
                                                fontSize: '190%',
                                                fontWeight: '400'
                                            }}
                                        >
                                            {/* Our Mission */}
                                        </div>
                                    </div>
                                ),
                                amount: 0.1,
                                slowerScrollRate: false
                            }
                        ]}
                        style={{
                            height: '56.5vw'
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
                                                Who We Are
                                            </div>
                                            <div
                                                style={{
                                                    width: '40%',
                                                    fontSize: '110%',
                                                    lineHeight: '150%',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                We are a group of high school students from Sage
                                                Hill School ranging from 10th to 12th grade. Every
                                                month, we meet at the Genesis Alta Care Center in
                                                Garden Grove, CA. Performing for those who suffer
                                                from dementia and Alzheimers, we perform a wide
                                                range of musical genres to give back to the
                                                community through the power of musical therapy.
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
                                                Why Alzheimer's
                                            </div>
                                            <div
                                                style={{
                                                    width: '40%',
                                                    fontSize: '110%',
                                                    lineHeight: '150%',
                                                    opacity: '0.8'
                                                }}
                                            >
                                                Through countless clinical studies and researches,
                                                music is proven to provide Alzheimer’s patients with
                                                a form of therapy. According to Oliver Sacks, MD, a
                                                noted neurologists, “people with Alzheimer’s and
                                                various forms of dementia… are confused… agitated,
                                                some lethargic, some have lost language. But all of
                                                them, without exception, respond to music." We hope
                                                that through our specialties in music, whether it be
                                                instrumental or vocal, we will be able to provide
                                                patients with a form of relief and most importantly,
                                                bring joy to those who could really benefit from it.
                                            </div>
                                        </div>
                                    </div>
                                ),
                                amount: 0.1,
                                slowerScrollRate: false
                            }
                        ]}
                        style={{
                            height: '80vh'
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
