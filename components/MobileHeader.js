import React, { Component } from 'react';
import MenuIcon from 'grommet/components/icons/base/Menu';
import CloseIcon from 'grommet/components/icons/base/Close';

import Link from 'next/link';
class MobileHeader extends Component {
    state = {
        show: 0
    };

    render() {
        return (
            <div
                style={{
                    margin: '1vh 0px -4vh 0px',
                    //height: '20vw',
                    zIndex: 10,
                    width: '100vw'
                    //backgroundColor: 'blue'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100vw'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100vw',
                            marginBottom: '10vw'
                        }}
                    >
                        <a style={{ fontSize: '20px', marginLeft: '20px' }} href="/">
                            Music To Heal
                        </a>
                        {this.state.show === 0 ? (
                            <MenuIcon
                                size="xlarge"
                                onClick={() => this.setState({ show: 1 })}
                                colorIndex="brand"
                                style={{ marginRight: '20px' }}
                            />
                        ) : (
                            <CloseIcon
                                size="xlarge"
                                onClick={() => this.setState({ show: 0 })}
                                colorIndex="plain"
                                style={{ marginRight: '20px' }}
                            />
                        )}
                    </div>
                    {this.state.show !== 0 ? this.renderPanel() : null}
                </div>
            </div>
        );
    }

    renderPanel() {
        return (
            <div style={{ width: '100%', backgroundColor: '#FAFAFA', marginTop: '-20px' }}>
                {navlinks.map(object => {
                    return (
                        <Link href={object.link} key={object.text} passHref>
                            <a
                                style={{ color: '#c6c5b5' }}
                                onClick={
                                    object.onClick
                                        ? () => this.setState({ show: object.onClick })
                                        : () => this.setState({ show: 0 })
                                }
                            >
                                <div
                                    style={{
                                        fontSize: '200%',
                                        marginBottom: '2vh',
                                        textAlign: 'center',
                                        width: '100%'
                                    }}
                                >
                                    {object.text}
                                </div>
                            </a>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

const navlinks = [
    { text: 'Our Mission', link: '/mission', page: 'h' },
    { text: 'Gallery', link: '/gallery', page: 'g' },
    { text: 'Members', link: '/group', page: 'e' },
    { text: 'Blog', link: '/blog', page: 'b' },
    { text: 'Contact', link: '/contact', page: 'c' }
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
        fontWeight: 200
    }
};

export default MobileHeader;
