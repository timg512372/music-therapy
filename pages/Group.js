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

class Group extends Component {
    static async getInitialProps({ req, query, store }) {
        store.dispatch({
            type: types.CHANGE_PAGE,
            payload: 't'
        });

        const links = [];
        const archive = [];
        req.firebaseServer
            .database()
            .ref('recipients')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    if (child.val().archive == true) {
                        archive.push(child.key);
                    } else {
                        links.push(child.key);
                    }
                });
            });

        const project = [];
        req.firebaseServer
            .database()
            .ref('projects')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    project.push(child.key);
                });
            });

        const faculty = [];
        req.firebaseServer
            .database()
            .ref('faculty')
            .once('value')
            .then(datasnapshot => {
                datasnapshot.forEach(child => {
                    faculty.push({
                        name: child.key,
                        src: child.val().image,
                        bio: child.val().bio
                    });
                });
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
            type: types.GET_RECIPIENTS,
            payload: { links, archive }
        });

        store.dispatch({
            type: types.GET_PROJECTS,
            payload: project
        });

        store.dispatch({
            type: types.GET_FACULTY,
            payload: faculty
        });
    }

    state = {
        profile: ''
    };

    renderFaculty = () => {
        if (!this.props.faculty) {
            return <h4> Loading ... </h4>;
        }

        try {
            const teachers = this.props.faculty.map(teacher => {
                return (
                    <Person
                        key={teacher.name}
                        src={teacher.src}
                        name={teacher.name}
                        faculty
                        onClick={() => this.setState({ profile: teacher })}
                    />
                );
            });

            return teachers.reverse();
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
            <div style={{ margin: '0% 15% 0% 15%' }}>
                <NextSeo
                    config={{
                        title: 'Our Group | Music Therapy',
                        twitter: { title: 'Our Group | Music Therapy' },
                        openGraph: {
                            title: 'Our Group | Music Therapy'
                        }
                    }}
                />
                <h2 style={{ textAlign: 'center' }}> Meet our Service Group </h2>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {this.renderFaculty()}
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

                <Transition
                    onEnter={modalEnter}
                    timeout={0}
                    in={this.state.profile !== ''}
                    onExit={modalExit}
                >
                    <div className="biomodal">
                        <BioModal
                            show={this.state.profile !== ''}
                            onToggleModal={() => this.setState({ profile: '' })}
                            person={this.state.profile}
                        />
                    </div>
                </Transition>
            </div>
        );
    }
}

const modalEnter = biomodal => {
    return anime({
        // targets: biomodal,
        // opacity: {
        //     value: [0, 1]
        // },
        // easing: 'easeOutQuint',
        // duration: 1000
    });
};

const modalExit = biomodal => {
    return anime({
        // targets: biomodal,
        // opacity: {
        //     value: [1, 0]
        // },
        // easing: 'easeOutQuint',
        // duration: 1000
    });
};

const mapStateToProps = state => {
    return {
        group: state.group,
        faculty: state.faculty
    };
};

export default connect(
    mapStateToProps,
    { getGroup }
)(Group);
