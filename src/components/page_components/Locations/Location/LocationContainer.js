import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';

// __utils
import camelCaseName from '../../../../lib/__utils__/camel_case_name';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import removeDashes from '../../../../lib/__utils__/remove_dashes';

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

    const icon = localStorage.getItem('location') === location ? <FontAwesomeIcon icon={faSkull} /> : "";
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });
    
    const locationSvgs = {
        "lounge": <Suspense fallback={renderLoader()}><Lounge mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "diningRoom": <Suspense fallback={renderLoader()}><DiningRoom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "study": <Suspense fallback={renderLoader()}><Study mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "kitchen": <Suspense fallback={renderLoader()}><Kitchen mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>,
        "garden": <Suspense fallback={renderLoader()}><Garden mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut} /></Suspense>,
        "bedroom": <Suspense fallback={renderLoader()}><Bedroom mouseOver={handleMouseOver} click={handleClick} mouseOut={handleMouseOut}/></Suspense>
    }
    const locationSvg = locationSvgs[`${camelCaseName(location)}`];

    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Locations | ${location}`;
    })
    
    function handleMouseOver(e) {
        setClue(e.target.dataset.name)
    }

    function handleMouseOut(e) {
        setClue('');
    }

    function handleClick(e) {
        e.preventDefault();
        setClueList((prev) => {
            if (prev.includes(clue)) {
                e.target.setAttribute('disabled', ''); 
                return [...prev];
                } else {
                return [clue, ...prev];
              }
        });
    }

    return (
        <Suspense fallback={renderLoader()}>
            <Location clue={clue} location={location} svg={locationSvg} icon={icon}/>
        </Suspense>
    );
}