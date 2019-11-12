import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { connect } from 'react-redux';
import NextSeo from 'next-seo';

import * as types from '../redux/types.js';
import Person from '../components/Person';
import BioModal from '../components/BioModal';
import Header from '../components/Header';

class Group extends Component {
    static async getInitialProps({ req, query, store }) {
        store.dispatch({
            type: types.CHANGE_PAGE,
            payload: 't'
        });

        const leadership = [];
        let db = firebase;

        db.database()
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
        await db
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
        profile: ''
    };

    renderLeadership = () => {
        if (!this.props.leadership) {
            return <h4> Loading ... </h4>;
        }

        console.log(this.state.dropdown);

        try {
            const leaders = this.props.leadership.map(person => {
                return (
                    <Person
                        key={person.name}
                        src={person.src}
                        name={person.name}
                        role={person.role}
                        onClick={() => this.setState({ profile: person })}
                    />
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
                {this.props.desktop ? (
                    <div style={{ margin: '-2vh 6vh 0 6vh' }}>
                        <Header page="e" />
                    </div>
                ) : (
                    <div style={{ height: '4vh' }} />
                )}

                <NextSeo
                    config={{
                        title: 'Members — Music To Heal',
                        twitter: { title: 'Members — Music To Heal' },
                        openGraph: {
                            title: 'Members — Music To Heal'
                        }
                    }}
                />
                <div style={{ margin: '0% 15% 0% 15%' }}>
                    <h2 style={{ textAlign: 'center', fontWeight: '300' }}> Meet our Group </h2>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap'
                        }}
                    >
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
                <div>
                    <BioModal
                        show={this.state.profile !== ''}
                        onToggleModal={() => this.setState({ profile: '' })}
                        person={this.state.profile}
                        desktop={this.props.desktop}
                    />
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
    null
)(Group);
