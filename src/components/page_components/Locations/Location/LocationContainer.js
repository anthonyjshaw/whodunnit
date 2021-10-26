import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { useParams } from 'react-router';

// __utils
import camelCaseName from '../../../../lib/__utils__/camel_case_name';
import { capitalizeMultipleWords } from '../../../../lib/__utils__/capitalize_multiple_words';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import removeDashes from '../../../../lib/__utils__/remove_dashes';
import { culpritClues } from '../../../../lib/culprit_clues';
import { locations } from '../../../../lib/locations';
import { clueArray } from '../../../../lib/clue_array';

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

    const locationSvgs = {
        "lounge": <Suspense fallback={renderLoader()}><Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "diningRoom": <Suspense fallback={renderLoader()}><DiningRoom mouseOver={handleMouseOver} click={handleClick} clue={clueArray(localStorage.getItem('death'))[1].name} mouseOut={handleMouseOut}/></Suspense>,
        "study": <Suspense fallback={renderLoader()}><Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} clue={clueArray(localStorage.getItem('death'))[0].name}/></Suspense>,
        "kitchen": <Suspense fallback={renderLoader()}><Kitchen mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "garden": <Suspense fallback={renderLoader()}><Garden mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "bedroom": <Suspense fallback={renderLoader()}><Bedroom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} clue={culpritClues[culprit].guilty[0].name}/></Suspense>
    };

    const locationSvg = locationSvgs[`${camelCaseName(location)}`];

    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Locations | ${capitalizeMultipleWords(location)}`;
    });
    
    function handleMouseOver(e) {
        setClue(e.target.dataset.name);
    }

    function handleMouseOut() {
        setClue('');
    }

    function handleClick(e) {
        setClueItem(e.target.dataset.clue);
        console.log(clueItem);
        setClueList((prev) => {
            if (prev.includes(clueItem)) {
                e.target.setAttribute('disabled', ''); 
                return [...prev];
            } else {
                cluePopup.current.classList.add('popup-show');
                setTimeout(() => {
                    cluePopup.current.classList.remove('popup-show');
                }, 3000);
                return [...prev, clueItem];
            }
        });
    }

    return (
        <Suspense fallback={renderLoader()}>
            <Location clue={clue} ref={cluePopup} location={location} svg={locationSvg} icon={icon}/>
        </Suspense>
    );
}