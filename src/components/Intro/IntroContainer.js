import React from 'react';
import Intro from './Intro';

export default function IntroContainer() {
    const strings = ['<br/>Lord Astley of Marberry is dead.<br/>You are a private investigator hired by the grieving widow.<br/>Find the culprit.<br/>You have six suspects:'];
    return (
        <div>
            <Intro strings={strings} />
        </div>
    )
}
