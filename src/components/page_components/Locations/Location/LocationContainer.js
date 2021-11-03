import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { useParams } from 'react-router';

// __utils
import camelCaseName from '../../../../lib/__utils__/camel_case_name';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import removeDashes from '../../../../lib/__utils__/remove_dashes';
import { culpritClues } from '../../../../lib/culprit_clues';
import { clueArray } from '../../../../lib/clue_array';
import suspects from '../../../../lib/suspect_array';

// SVG Components

const Bedroom = lazy(() => import('../../../ui_components/svg_components/Bedroom'));
const DiningRoom = lazy(() => import('../../../ui_components/svg_components/DiningRoom'));
const Garden = lazy(() => import('../../../ui_components/svg_components/Garden'));
const Kitchen = lazy(() => import('../../../ui_components/svg_components/Kitchen'));
const Lounge = lazy(() => import('../../../ui_components/svg_components/Lounge'));
const Study = lazy(() => import('../../../ui_components/svg_components/Study'));

const Location = lazy(() => import('./Location'));
const renderLoader = () => <p>Loading...</p>;

export default function LocationContainer() {

    let { location } = (useParams());
    location = removeDashes(location);

    const cluePopup = useRef(null)

    const icon = localStorage.getItem('location') === location ? <FontAwesomeIcon icon={faSkull} /> : "";
    const [clue, setClue] = useState();
    const [clueItem, setClueItem] = useState();


    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });
    
    const culprit = localStorage.getItem('culprit');

    const normalClues = localStorage.getItem('normalClues').split(', ');
    const newNormalClues = normalClues.map(e => JSON.parse(e));

    const locationSvgs = {
        "lounge": <Suspense fallback={renderLoader()}><Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} normalClue={newNormalClues[0].name}/></Suspense>,
        "diningRoom": <Suspense fallback={renderLoader()}><DiningRoom mouseOver={handleMouseOver} click={handleClick} clue={clueArray(localStorage.getItem('death'))[1].name} normalClue={newNormalClues[1].name} mouseOut={handleMouseOut}/></Suspense>,
        "study": <Suspense fallback={renderLoader()}><Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} normalClue={newNormalClues[2].name} clue={clueArray(localStorage.getItem('death'))[0].name}/></Suspense>,
        "kitchen": <Suspense fallback={renderLoader()}><Kitchen mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} normalClue={newNormalClues[3].name}/></Suspense>,
        "garden": <Suspense fallback={renderLoader()}><Garden mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} normalClue={newNormalClues[4]} clue={culpritClues[culprit].guilty[1].name}/></Suspense>,
        "bedroom": <Suspense fallback={renderLoader()}><Bedroom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} normalClue={newNormalClues[5]} clue={culpritClues[culprit].guilty[0].name}/></Suspense>
    };
    
    const locationSvg = locationSvgs[`${camelCaseName(location)}`];
    
    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Locations | ${capitalizeMultipleWords(location)}`;
    });
    
    function handleMouseOver(e) {
        setClue(e.target.dataset.name);
        setClueItem(e.target.dataset.clue);
    }
    
    function handleMouseOut() {
        setClue('');
    }
    
    function handleClick(e) {
        setClueList((prev) => {
            if (!prev.includes(clueItem)) {
                cluePopup.current.classList.add('popup-show');
                setTimeout(() => {
                    cluePopup.current.classList.remove('popup-show');
                }, 1000);
                return [...prev, clueItem];
            } else {
                return [...prev];
            }
        });
    }

    return (
        <Suspense fallback={renderLoader()}>
            <Location clue={clue} ref={cluePopup} location={location} svg={locationSvg} clueName={clueItem} icon={icon}/>
        </Suspense>
    );
}