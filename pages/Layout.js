import Footer from 'grommet/components/Footer';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
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
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100vw',
                        backgroundColor: '#F8F8F8'
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
                        <Anchor href="/mission">About</Anchor>
                    </Box>
                </div>
            </Footer>
        );
    }

    render() {
        return (
            <App style={{ maxWidth: '100vw' }}>
                <Article
                    style={{
                        maxWidth: '100vw',
                        padding: '0px',
                        backgroundColor: '#FAFAFA'
                    }}
                >
                    <div style={{ minHeight: '81vh' }}>{this.props.children}</div>

                    {this.renderFooter()}
                </Article>
            </App>
        );
    }
}

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
