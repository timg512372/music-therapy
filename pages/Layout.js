import Footer from 'grommet/components/Footer';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Popover from 'react-simple-popover';
import { connect } from 'react-redux';

import Link from 'next/link';
import '../styles.scss';

import React, { Component } from 'react';

class Layout extends Component {
    state = {
        dropdown: false,
        secondDropdown: ''
    };

    renderFooter() {
        return (
            <Footer
                justify="between"
                size="small"
                style={{
                    padding: '0% 1.5% 0% 1.5%',
                    margin: '0.5vh 0 1.5vh 0'
                }}
            >
                <Title>
                    <s />
                    Sage Hill Music Therapy Club
                </Title>
                <Box direction="row" align="center" pad={{ between: 'medium' }}>
                    <Paragraph margin="none">© 2019 Sage Hill Music Therapy Club</Paragraph>
                    <Anchor href="/privacy-policy">Privacy Policy</Anchor>
                    <Anchor href="/contact">Contact</Anchor>
                    <Anchor href="/">About</Anchor>
                </Box>
            </Footer>
        );
    }

    renderHeader() {
        return (
            <Header
                fixed={true}
                width="full"
                style={{ padding: '0% 1.5% 0% 1.5%', height: '7vw', zIndex: 1 }}
            >
                <Title>
                    <a style={{ fontSize: '30px', margin: 0 }} href="/">
                        <img
                            src="/static/biglogo.png"
                            alt="logo"
                            style={{ height: '5vw', marginBottom: 0 }}
                        />
                    </a>
                </Title>
                <Box flex={true} justify="end" direction="row" responsive={false}>
                    <ul
                        className="navbar-nav mr-auto"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '2.5vw'
                        }}
                    >
                        {navlinks.map(link => {
                            return (
                                <li className="nav-item" style={styles.navlink} key={link.link}>
                                    <Link href={link.link} passHref>
                                        <a style={{ color: '#7ed4c6' }}>
                                            <div
                                                className={
                                                    this.props.page === link.page
                                                        ? 'text active'
                                                        : 'text'
                                                }
                                            >
                                                {link.text}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Box>
                <style jsx>{`
                    .text {
                        color: #416989;
                        font-weight: 500;
                    }
                    .text:hover {
                        color: #7ed4c6;
                        text-decoration: none;
                        text-decoration-color: #7ed4c6;
                    }
                    .active {
                        color: #7ed4c6;
                        text-decoration: none;
                    }
                    ul {
                        list-style-type: none;
                    }
                `}</style>
            </Header>
        );
    }

    render() {
        return (
            <App style={{ maxWidth: '100vw' }}>
                <Article
                    style={{
                        maxWidth: '100vw',
                        padding: '0px'
                    }}
                >
                    {this.renderHeader()}

                    <div style={{ minHeight: '81vh' }}>{this.props.children}</div>

                    {this.renderFooter()}
                </Article>
            </App>
        );
    }
}

const navlinks = [
    { text: 'Our Mission', link: '/mission', page: 'h' },
    { text: 'Gallery', link: '/gallery', page: 'g' },
    { text: 'Members', link: '/group', page: 't' },
    { text: 'Blog', link: '/blog', page: 'b' },
    { text: 'Alzheimers and Dementia', link: '/', page: 'a' },
    { text: 'Contact', link: '/contact', page: 'c' }
];

const styles = {
    navlink: {
        margin: '6px 25px 0px 0px',
        fontWeight: '500'
        //color: "#CCCCCC"
    },
    navBar: {
        borderWidth: '0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px'
    },
    search: {
        borderWidth: '0px',
        width: '20vw',
        marginRight: '3vw',
        height: '40px',
        marginTop: '10px',
        fontSize: '1.2vw'
    }
};

const mapStateToProps = state => {
    return {
        recipients: state.recipients,
        projects: state.projects,
        page: state.page
    };
};

export default connect(
    mapStateToProps,
    null
)(Layout);
