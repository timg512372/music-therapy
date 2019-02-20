import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { getGroup } from '../redux/actions';
import * as types from '../redux/types.js';
import NextSeo from 'next-seo';
import Header from '../components/Header';

import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

class Contact extends Component {
    static async getInitialProps({ req, query, store }) {
        // store.dispatch({
        //     type: types.CHANGE_PAGE,
        //     payload: 'c'
        // });
        // const project = [];
        // req.firebaseServer
        //     .database()
        //     .ref('projects')
        //     .once('value')
        //     .then(datasnapshot => {
        //         datasnapshot.forEach(child => {
        //             project.push(child.key);
        //         });
        //     });
        // const links = [];
        // const archive = [];
        // await req.firebaseServer
        //     .database()
        //     .ref('recipients')
        //     .once('value')
        //     .then(datasnapshot => {
        //         datasnapshot.forEach(child => {
        //             if (child.val().archive == true) {
        //                 archive.push(child.key);
        //             } else {
        //                 links.push(child.key);
        //             }
        //         });
        //     });
        // store.dispatch({
        //     type: types.GET_RECIPIENTS,
        //     payload: { links, archive }
        // });
        // store.dispatch({
        //     type: types.GET_PROJECTS,
        //     payload: project
        // });
    }

    state = {
        name: '',
        email: '',
        message: ''
    };

    renderButtons() {
        if (this.state.name && this.state.email && this.state.message) {
            return (
                <Button
                    label="Submit"
                    type="submit"
                    form="form1"
                    value="Send"
                    accent
                    style={{ margin: '20px 45% 0% 45%', width: '10%', ...styles.button }}
                />
            );
        }

        return (
            <Button
                label="Submit"
                accent
                style={{ margin: '20px 45% 0% 45%', width: '10%', ...styles.button }}
            />
        );
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <NextSeo
                    config={{
                        title: 'Contact — Music To Heal',
                        twitter: { title: 'Contact — Music To Heal' },
                        openGraph: {
                            title: 'Contact — Music To Heal'
                        }
                    }}
                />
                <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                    <Header page="" />
                </div>

                <h2 style={{ textAlign: 'center', margin: '2vh 0 6vh 0' }}>Contact Us</h2>
                <form
                    action="https://formspree.io/20chunga@sagehillschool.org"
                    method="POST"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: '0 15% 0 15%'
                    }}
                    id="form1"
                >
                    <FormField label="Name" size="medium" help="Required">
                        <input
                            style={{
                                fontWeight: 'lighter',
                                border: 'none'
                            }}
                            type="text"
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                    </FormField>
                    <FormField label="Email Address" size="medium" help="Required">
                        <input
                            style={{
                                fontWeight: 'lighter',
                                border: 'none'
                            }}
                            type="email"
                            onChange={event => this.setState({ email: event.target.value })}
                        />
                    </FormField>

                    <FormField label="Message" size="large" help="Required">
                        <textarea
                            style={{
                                fontWeight: 'lighter',
                                height: '60%',
                                resize: 'none',
                                border: 'none'
                            }}
                            type="text"
                            placeholder="Message"
                            name="message"
                            rows={10}
                            onChange={event => this.setState({ message: event.target.value })}
                        />
                    </FormField>
                </form>
                {this.renderButtons()}
            </div>
        );
    }
}

const styles = {
    button: {
        borderRadius: '0px',
        borderWidth: '1px',
        fontFamily: 'Jost',
        fontWeight: 200
    }
};

const mapStateToProps = state => {
    return {
        gallery: state.gallery
    };
};

export default connect(
    mapStateToProps,
    { getGroup }
)(Contact);
