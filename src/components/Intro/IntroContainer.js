import React from 'react';
import Intro from './Intro';

export default function IntroContainer() {
    const strings = ['The year is 1954.<br/>Lord Astley of Marberry is dead.<br/>You are a private investigator.<br/>Find the culprit.<br/>You have six suspects:'];
    return (
        <Intro strings={strings} />
    )
}
