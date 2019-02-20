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

    renderAccordian = () => {
        return (
            <Accordion
                style={{
                    fontWeight: '400',
                    margin: '0 20% 0 20%',
                    borderWidth: '0px',
                    width: '60%',
                    backgroundColor: '#FAFAFA'
                }}
            >
                <AccordionPanel
                    heading="Our Process"
                    style={{
                        borderWidth: '0px',
                        width: '100%',
                        backgroundColor: 'green'
                    }}
                >
                    <div style={styles.dropdown}>
                        We receive pictures and measurements of our recipients’ arms, and we use
                        that information to model them a custom hand to maximize the hand’s
                        effectiveness and comfort. We can also accommodate for color and design
                        requests. We then print each hand in many parts. After that we carefully
                        assemble them and ship them to our recipients.
                    </div>
                </AccordionPanel>
                <AccordionPanel heading="Who's making the hands?">
                    <div style={styles.dropdown}>
                        We are a dedicated group of students from{' '}
                        <a
                            href="https://www.sagehillschool.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sage Hill School
                        </a>{' '}
                        in Southern California who trying to make a difference. You can learn more
                        about our team <a href="/contact">here</a>.
                    </div>
                </AccordionPanel>
                <AccordionPanel heading="Can I buy one?">
                    <div style={styles.dropdown}>
                        Nope. Sorry, we typically make hands for recipients who are either unable to
                        afford or access traditional prosthesis. On a case by case basis, we will
                        work with recipients who would like a hand under other circumstances, in
                        particular, those who are within our geographic region.
                    </div>
                </AccordionPanel>
                <AccordionPanel heading="How can I become a recipient?">
                    <div style={styles.dropdown}>
                        <a href="/contact">Reach out to us!</a> Tell us your story, and we would be
                        glad to add you as a recipient. We typically make hands for recipients who
                        are either unable to afford or access traditional prosthesis. On a case by
                        case basis, we will work with recipients who would like a hand under other
                        circumstances, in particular, those who are within our geographic region.
                    </div>
                </AccordionPanel>
            </Accordion>
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
            <div style={{ margin: '5vh' }}>
                <title> Music To Heal </title>
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
                                            src="/static/sample.jpg"
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
                                        <Header page={this.props.page} />

                                        <div
                                            style={{
                                                color: '#ffffff',
                                                margin: '27vh 0px 20px 0px',
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
                                            margin: '6vw 0 0 10px'
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
                                                    fontSize: '150%',
                                                    fontFamily: 'Jost',
                                                    width: '30%',
                                                    letterSpacing: '0.1em'
                                                }}
                                            >
                                                {' '}
                                                Insert Tagline Here{' '}
                                            </div>
                                            <div style={{ width: '40%', textAlign: 'left' }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis aute irure dolor in
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
    { src: '/static/links.jpg', href: '/mission', text: 'Our Mission' },
    { src: '/static/links.jpg', href: '/gallery', text: 'Gallery' },
    { src: '/static/links.jpg', href: '/group', text: 'Members' }
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
