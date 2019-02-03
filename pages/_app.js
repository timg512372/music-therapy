import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import NextSeo from 'next-seo';

import '../styles.scss';
import { initStore } from '../redux/store';
import Layout from './Layout';
import * as types from '../redux/types';

if (!firebase.apps.length) {
    //console.log('initializing firebase');
    firebase.initializeApp({
        apiKey: 'AIzaSyDUgDq171aHYxrL11LksOAz4UY5kZfUbKM',
        authDomain: 'music-therapy-c96cc.firebaseapp.com',
        databaseURL: 'https://music-therapy-c96cc.firebaseio.com',
        projectId: 'music-therapy-c96cc',
        storageBucket: 'music-therapy-c96cc.appspot.com',
        messagingSenderId: '637424796932'
    });
}

const DEFAULT_SEO = {
    title: 'Music To Heal - Rehabilitation Through Music',
    description:
        'A student-run service group that uses 3D printing to make custom prosthetics for those in need. All of the prosthetics are made by hand using open-source designs in collaboration with E-Nable.',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.musictoheal.org/',
        title: 'Music To Heal - Rehabilitation Through Music',
        description:
            'A student-run service group that uses 3D printing to make custom prosthetics for those in need. All of the prosthetics are made by hand using open-source designs in collaboration with E-Nable.',
        image: '/static/favicon.png',
        site_name: 'Music To Heal',
        imageWidth: 1200,
        imageHeight: 1200
    },
    twitter: {
        title: 'Music To Heal - Rehabilitation Through Music',
        cardType: 'summary_large_image',
        description:
            'A student-run service group that uses 3D printing to make custom prosthetics for those in need. All of the prosthetics are made by hand using open-source designs in collaboration with E-Nable.'
    }
};

// import * as types from '../redux/types';
//import { initGA, logPageView } from '../components/general/analytics';

//Custom app.js to add Redux and a universal toolbar --> DO NOT RENAME
export default withRedux(initStore)(
    class MyApp extends App {
        static async getInitialProps({ Component, ctx, req, query, store }) {
            // store.dispatch({ type: types.GET_RECIPIENTS, payload: 'help' });

            return {
                pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
            };
        }

        // componentDidMount() {
        //     initGA();
        //     logPageView();
        // }

        render() {
            const { Component, pageProps, store } = this.props;

            return (
                <Container>
                    <NextSeo config={DEFAULT_SEO} />
                    <Provider store={store}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </Container>
            );
        }
    }
);
