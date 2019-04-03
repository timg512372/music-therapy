import React, { Component } from 'react';
import * as types from '../redux/types';
import posed from 'react-pose';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import anime from 'animejs';
import Transition from 'react-transition-group/Transition';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import Link from 'next/link';

import Header from '../components/Header';

import '../styles.scss';

class LandingPage extends Component {
    state = {
        isVisible: false
    };

    static async getInitialProps({ req, store }) {
        store.dispatch({
            type: types.CHANGE_PAGE,
            payload: '~'
        });

        const project = [];
        req.firebaseServer
            .database()
            .ref('projects')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    project.push(child.key);
                });
            });

        const links = [];
        const archive = [];
        await req.firebaseServer
            .database()
            .ref('recipients')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    if (child.val().archive == true) {
                        archive.push(child.key);
                    } else {
                        links.push(child.key);
                    }
                });
            });

        store.dispatch({
            type: types.GET_RECIPIENTS,
            payload: { links, archive }
        });

        store.dispatch({
            type: types.GET_PROJECTS,
            payload: project
        });
    }

    componentDidMount() {
        //console.log('componentdidmount');
        this.setState({ isVisible: true });
    }

    renderParticles = () => {
        return (
            <Transition onEnter={animateParticles} timeout={4000} in={this.state.isVisible}>
                <Particles
                    className="particles"
                    style={{ height: '40vh', position: 'absolute', top: '80px' }}
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            size: {
                                value: 4,
                                random: true
                            },
                            color: {
                                value: '#2cc99d'
                            },
                            move: {
                                enable: true,
                                direction: 'right',
                                out_mode: 'out',
                                bounce: false,
                                speed: 3,
                                random: false,
                                attract: {
                                    enable: false,
                                    rotateX: 0,
                                    rotateY: 0
                                }
                            },
                            line_linked: {
                                distance: 120,
                                color: '#2cc99d',
                                opacity: 0.9,
                                width: 1.3
                            }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'repulse'
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 1
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
            </Transition>
        );
    };

    renderNavLinks = () => {
        return navlinks.map(link => {
            return (
                <div
                    style={{
                        height: '22vw',
                        width: '22vw',
                        backgroundImage: `url(${link.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: '22vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '5vw 1vw 0 1vw'
                    }}
                    key={link.href}
                >
                    <a
                        style={{
                            textDecoration: 'none',
                            fontSize: '180%'
                        }}
                        href={link.href}
                        className="navlink"
                    >
                        {link.text}
                    </a>
                </div>
            );
        });
    };

    render() {
        const Animation = posed.div({
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        });

        return (
            <div style={{ margin: '3vw' }}>
                <title> Music To Heal </title>
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[
                            {
                                children: (
                                    <div style={{ width: '100%' }}>
                                        <img
                                            src="/static/sample.jpg"
                                            style={{
                                                width: '94vw',
                                                height: '58vw'
                                            }}
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
                                        <Header page={this.props.page} />

                                        <div
                                            style={{
                                                color: '#ffffff',
                                                margin: '15vw 0px 20px 0px',
                                                letterSpacing: '0.1em',
                                                fontFamily: 'Jost',
                                                fontSize: '190%',
                                                fontWeight: '400'
                                            }}
                                        >
                                            sage hill school / newport coast, ca
                                        </div>
                                        <div
                                            style={{
                                                fontSize: '450%',
                                                fontWeight: '900',
                                                color: '#ffffff',
                                                lineHeight: '100%',
                                                letterSpacing: '0.04em'
                                            }}
                                        >
                                            MUSIC TO HEAL
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
                                            margin: '10vw 0 0 10px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {this.renderNavLinks()}
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                                marginTop: '10vw',
                                                width: '100%'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: '200%',
                                                    fontFamily: 'Jost',
                                                    width: '30%',
                                                    letterSpacing: '0.1em',
                                                    paddingLeft: '10%'
                                                }}
                                            >
                                                {' '}
                                                Music To Heal{' '}
                                            </div>
                                            <div
                                                style={{
                                                    width: '40%',
                                                    textAlign: 'left',
                                                    fontSize: '110%'
                                                }}
                                            >
                                                Every month, our group of high school musicians meet
                                                at the Genesis Alta Care Center, performing for
                                                those who suffer from dementia and Alzheimers. We
                                                hope to give back to the community through the power
                                                of musical therapy.
                                            </div>
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

const Box = posed.button({
    hoverable: true,
    init: {
        borderColor: '#FFFFFF',
        color: '#ffffff',
        backgroundColor: 'rgb(0,0,0,0)'
    },
    hover: {
        //borderColor: '#000000',
        color: '#000000',
        backgroundColor: '#ffffff'
    }
});

const animateParticles = particles => {
    //console.log('particles');
    return anime({
        targets: particles,
        delay: 500,
        opacity: {
            value: [0, 1]
        },
        easing: 'easeOutQuint',
        duration: 3000
    });
};

const animateMainheadingIn = mainheading => {
    return anime({
        targets: mainheading,
        opacity: {
            value: [0, 1]
        },
        filter: ['blur(7px)', 'blur(0px)'],
        translateY: [500, 0],
        rotate: {
            value: [90, 0]
        },
        easing: 'easeOutQuint',
        duration: 1000
    });
};

const animateSubheadingIn = subheading => {
    return anime({
        targets: subheading,
        opacity: {
            value: [0, 1]
        },
        filter: ['blur(7px)', 'blur(0px)'],
        scale: {
            value: [10, 1]
        },
        easing: 'easeOutQuint',
        duration: 800
    });
};

const animatePrinterIn = printer => {
    //console.log('something happened');
    return anime({
        targets: printer,
        opacity: {
            value: [0, 1]
        },
        filter: ['blur(7px)', 'blur(0px)'],
        scale: {
            value: 1.3
        },
        easing: 'easeOutQuint',
        duration: 1800
    });
};

const animateHeadingIn = heading => {
    //console.log('something happened');
    return anime({
        targets: heading,
        opacity: {
            value: [0, 1]
        },
        filter: ['blur(7px)', 'blur(0px)'],
        scale: {
            value: 1.4,
            duration: 1800
        },
        translateY: -15,
        easing: 'easeOutQuart',
        duration: 1900
    });
};

const styles = {
    dropdown: {
        width: '100%',
        textAlign: 'left',
        margin: '10px 10px 0 20px'
    }
};

const navlinks = [
    { src: '/static/note.png', href: '/mission', text: 'Our Mission' },
    { src: '/static/note.png', href: '/gallery', text: 'Gallery' },
    { src: '/static/note.png', href: '/group', text: 'Members' }
];

const mapStateToProps = state => {
    return {
        page: state.page
    };
};

export default connect(
    mapStateToProps,
    null
)(LandingPage);
