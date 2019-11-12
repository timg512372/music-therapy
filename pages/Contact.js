import React, { Component } from 'react';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import * as types from '../redux/types.js';
import NextSeo from 'next-seo';
import Header from '../components/Header';

import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

class Contact extends Component {
    static async getInitialProps({ req, query, store }) {
        store.dispatch({
            type: types.CHANGE_PAGE,
            payload: 'c'
        });
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
                    style={{
                        margin: this.props.desktop ? '20px 45% 0% 45%' : '20px 0 40px 0 ',
                        ...styles.button
                    }}
                />
            );
        }

        return (
            <Button
                label="Submit"
                accent
                style={{
                    margin: this.props.desktop ? '20px 45% 0% 45%' : '20px 0 40px 0 ',
                    ...styles.button
                }}
            />
        );
    }

    render() {
        console.log(this.state.email);
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
                {this.props.desktop ? (
                    <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                        <Header page="" />
                    </div>
                ) : (
                    <div style={{ height: '4vh' }} />
                )}

                <h2 style={{ textAlign: 'center', margin: '2vh 0 6vh 0' }}>Contact Us</h2>
                <form
                    action="https://formspree.io/20chunga@sagehillschool.org"
                    method="POST"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: this.props.desktop ? '0 15% 0 15%' : '0 5% 0 5%'
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
                            name="name"
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
                            name="email"
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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}

const styles = {
    button: {
        width: '10%',
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
    null
)(Contact);
