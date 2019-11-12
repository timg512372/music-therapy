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
                        height: this.props.desktop ? '22vw' : '80vw',
                        width: this.props.desktop ? '22vw' : '80vw',
                        backgroundImage: `url(${link.src})`,
                        backgroundPosition: 'center',
                        backgroundSize: this.props.desktop ? '22vw' : '80vw',
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
                                children: this.props.desktop ? (
                                    <div style={{ width: '100%' }}>
                                        <img
                                            src="/static/sample.jpg"
                                            style={{
                                                width: '94vw',
                                                height: '58vw',
                                                overflow: 'hidden'
                                            }}
                                            alt="some sample"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            width: '100%',
                                            backgroundImage: "url('/static/sample.jpg')",
                                            backgroundrepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            height: '100vh'
                                        }}
                                    ></div>
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
                                        {this.props.desktop ? (
                                            <Header page={this.props.page} />
                                        ) : null}

                                        <div
                                            style={{
                                                color: '#ffffff',
                                                margin: this.props.desktop
                                                    ? '15vw 0px 20px 0px'
                                                    : '30vh 0px 20px 0px',
                                                letterSpacing: '0.1em',
                                                fontFamily: 'Jost',
                                                fontSize: this.props.desktop ? '190%' : '120%',
                                                fontWeight: '400'
                                            }}
                                        >
                                            sage hill school {this.props.desktop ? '/' : <br />}{' '}
                                            newport coast, ca
                                        </div>
                                        <div
                                            style={{
                                                fontSize: this.props.desktop ? '450%' : '300%',
                                                fontWeight: this.props.desktop ? '900' : '800',
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
                            height: this.props.desktop ? '56.5vw' : '100vh'
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
                                            margin: this.props.desktop
                                                ? '10vw 0 0 10px'
                                                : '12vh 0 0 10px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: this.props.desktop
                                                    ? 'row'
                                                    : 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {this.renderNavLinks()}
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: this.props.desktop
                                                    ? 'row'
                                                    : 'column',
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
                                                    width: this.props.desktop ? '30%' : '90%',
                                                    letterSpacing: '0.1em',
                                                    paddingLeft: this.props.desktop ? '10%' : '0'
                                                }}
                                            >
                                                {' '}
                                                Music To Heal{' '}
                                            </div>
                                            <div
                                                style={{
                                                    width: this.props.desktop ? '40%' : '90%',
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
                            height: this.props.desktop ? '90vh' : '170vh'
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
