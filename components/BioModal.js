import React from 'react';
import Transition from 'react-transition-group/Transition';

import Person from './Person';

const BioModal = props => {
    if (props.show) {
        return (
            <React.Fragment>
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        backgroundColor: '#999999',
                        opacity: '0.75',

                        zIndex: 200,
                        left: '0',
                        top: '0'
                    }}
                    onClick={props.onToggleModal}
                />

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        left: '0',
                        top: '0'
                    }}
                >
                    <div
                        style={{
                            height: '70vh',
                            width: props.desktop ? '70vw' : '90vw',
                            marginTop: 150 + window.scrollY + 'px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            boxShadow: 'true',
                            padding: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 300
                        }}
                        onClick={event => event.preventDefault()}
                        className="biomodal"
                    >
                        <Person
                            src={props.person.src}
                            name={props.person.name}
                            role={props.person.role}
                            horizontal={props.desktop}
                            noBio
                        />
                        <h6
                            style={{
                                marginTop: props.desktop ? '5vh' : '0vh',
                                fontSize: props.desktop ? '1vw' : '1vh'
                            }}
                        >
                            &emsp;&ensp;
                            {props.person.bio}{' '}
                        </h6>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return null;
};

export default BioModal;
