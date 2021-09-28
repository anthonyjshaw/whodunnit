import React from 'react';
import InitTyped from '../Typed/InitTyped';


export default function IntroContainer() {
    const strings = ['<br/>Lord Marberry is dead.<br/>You are a private investigator hired by the grieving widow.<br/>Find the culprit.<br/>You have six suspects:'];
    const intro = [['^12000 The wayword son.'], ['^14000 The long suffering butler.'],['^18000 The maid.'],['^20000 The French teacher.'],['^22000 The best friend.'],['^24000 And of course, the grieving widow herself.']];
    const introMapped = intro.map(e =><li key={intro.indexOf(e) + 1}><InitTyped strings={e} backSpeed={2} typeSpeed={100}/></li>);
    return (
        <div className="container">
            <InitTyped strings={strings} backSpeed={50} typeSpeed={50}/>
            <ol>{introMapped}</ol>
            <InitTyped strings={['^30000 <p>Use your investigative skills to uncover the mystery of Marberry and find out <span class="whodunnit">"Whodunnit?"</span></p>']} backSpeed={50} typeSpeed={50} />
        </div>
    )
}
