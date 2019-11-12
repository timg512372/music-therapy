import React, { Component } from 'react';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';

import Link from 'next/link';
class ProperHeader extends Component {
    state = {
        show: 0
    };

    render() {
        return (
            <Header
                style={{
                    padding: '0% 5% 0% 5%',
                    height: '7vw',
                    zIndex: 1,
                    marginTop: '8vh',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <Title>
                    <div
                        style={{ fontSize: '30px', margin: 0, fontWeight: 'lighter' }}
                        onClick={() => (window.location.href = '/')}
                    >
                        {/* <img
                        src="/static/biglogo.png"
                        alt="logo"
                        style={{ height: '5vw', marginBottom: 0 }}
                    /> */}
                        Music to Heal
                    </div>
                </Title>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <ul
                        className="navbar-nav mr-auto"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '1.5vw'
                        }}
                    >
                        {navlinks.map(link => {
                            return (
                                <li className="nav-item" style={styles.navlink} key={link.link}>
                                    <Link href={link.link} passHref>
                                        <a
                                            style={{
                                                color: '#c6c5b5',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            <div
                                                className={
                                                    this.props.page === link.page
                                                        ? 'text active'
                                                        : 'text'
                                                }
                                                style={{ fontWeight: '300' }}
                                            >
                                                {link.text}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Button label="Contact Us" href="/contact" style={styles.button} />

                <style jsx>{`
                    .text {
                        color: #000000;
                        font-weight: 500;
                    }
                    .text:hover {
                        color: #c6c5b5;
                        text-decoration: none;
                        text-decoration-color: #c6c5b5;
                    }
                    .active {
                        color: #c6c5b5;
                        text-decoration: none;
                    }
                    ul {
                        list-style-type: none;
                    }
                `}</style>
            </Header>
        );
    }
}

const navlinks = [
    { text: 'Our Mission', link: '/mission', page: 'h' },
    { text: 'Gallery', link: '/gallery', page: 'g' },
    { text: 'Members', link: '/group', page: 'e' },
    { text: 'Blog', link: '/blog', page: 'b' }
];

const styles = {
    navlink: {
        margin: '6px 25px 0px 0px',
        fontFamily: 'Jost'
    },
    button: {
        borderRadius: '0px',
        borderWidth: '1px',
        fontFamily: 'Jost',
        marginLeft: '3.5em',
        fontWeight: 200
    }
};

export default ProperHeader;
