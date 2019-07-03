import React, { Component } from 'react';
import * as types from '../redux/types';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { connect } from 'react-redux';

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
    }

    componentDidMount() {
        this.setState({ isVisible: true });
    }

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
