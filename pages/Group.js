import React, { Component } from 'react';
import * as firebase from 'firebase';
//import * as admin from 'firebase-admin';
import { connect } from 'react-redux';
import { Image, Transformation } from 'cloudinary-react';
import anime from 'animejs';
import Transition from 'react-transition-group/Transition';
import NextSeo from 'next-seo';

import { getGroup } from '../redux/actions';
import * as types from '../redux/types.js';
import Person from '../components/Person';
import BioModal from '../components/BioModal';
import Popover from 'react-simple-popover';
import Header from '../components/Header';

class Group extends Component {
    static async getInitialProps({ req, query, store }) {
        store.dispatch({
            type: types.CHANGE_PAGE,
            payload: 't'
        });

        const leadership = [];
        req.firebaseServer
            .database()
            .ref('leadership')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    const temp = child.val();
                    leadership.push({
                        name: child.key,
                        src: temp.image,
                        bio: temp.bio,
                        order: temp.order,
                        role: temp.role
                    });
                });
                leadership.sort((a, b) => a.order > b.order);
            });

        const reformat = [];
        await req.firebaseServer
            .database()
            .ref('group')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    reformat.push({
                        id: child.key,
                        name: child.key,
                        src: child.val()
                    });
                });
            });

        store.dispatch({
            type: types.GET_GROUP,
            payload: reformat
        });

        store.dispatch({
            type: types.GET_LEADERSHIP,
            payload: leadership
        });
    }

    state = {
        dropdown: false
    };

    renderLeadership = () => {
        if (!this.props.leadership) {
            return <h4> Loading ... </h4>;
        }

        console.log(this.state.dropdown);

        try {
            const leaders = this.props.leadership.map(person => {
                return (
                    <div ref="target" backgroundColor="yellow" height="2vh" width="5vw">
                        <Person
                            key={person.name}
                            src={person.src}
                            name={person.name}
                            role={person.role}
                            onClick={() => this.setState({ dropdown: !this.state.dropdown })}
                        />
                        <h4>{person.bio}</h4>
                    </div>
                );
            });

            return leaders;
        } catch {
            return <h4> Loading ... </h4>;
        }
    };

    renderStudent = () => {
        if (!this.props.group) {
            return <h4> Loading ... </h4>;
        }

        try {
            const students = this.props.group.map(student => {
                return <Person src={student.src} name={student.name} key={student.name} />;
            });

            return students;
        } catch {
            return <h4> Loading... </h4>;
        }
    };

    render() {
        //console.log(this.state);
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <NextSeo
                    config={{
                        title: 'Members — Music To Heal',
                        twitter: { title: 'Members — Music To Heal' },
                        openGraph: {
                            title: 'Members — Music To Heal'
                        }
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Header page="e" />
                </div>
                <div style={{ margin: '0% 15% 0% 15%' }}>
                    <h2 style={{ textAlign: 'center', fontFamily: 'Jost', fontWeight: '300' }}>
                        {' '}
                        Meet our Group{' '}
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {this.renderLeadership()}
                    </div>

                    <div
                        style={{
                            height: '1.5px',
                            backgroundColor: '#cccccc',
                            borderRadius: '1px',
                            margin: '10px 0 40px 0'
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap'
                        }}
                    >
                        {this.renderStudent()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        group: state.group,
        leadership: state.leadership
    };
};

export default connect(
    mapStateToProps,
    { getGroup }
)(Group);
