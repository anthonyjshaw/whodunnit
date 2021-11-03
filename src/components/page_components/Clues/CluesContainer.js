import React from "react";
import Clues from './Clues';
import { culpritClues, normalClues } from "../../../lib/culprit_clues";
import addDashesToName from "../../../lib/__utils__/add_dashes_to_name";
import { clueArray } from "../../../lib/clue_array";
import { Link } from "react-router-dom";

const CluesContainer = () => {

	const storedClues = () => {
        const clues = localStorage.getItem('clueList');
        if (clues) {
            return clues.split(',');
        } else {
            return [];
        }
    };

    const clueList = storedClues().filter(e => e.length > 1);
    const noClues = <p style={{ height: 200, fontSize: '2em', textAlign: 'center' }}>No clues! Why don't you <Link to="/locations">search for some clues?</Link></p>;
    const culprit = localStorage.getItem('culprit');
    const mappedClues = storedClues().length === 0 ? noClues : clueList.map((e) => {

		const culClues = culpritClues[culprit].guilty.find(f => e === f.name);
		const arrClues = clueArray(localStorage.getItem('death')).find(f => e === f.name);
        const newNormalClue = normalClues.find(f => e === f.name);

		const description = () => {
			if (culClues === undefined && arrClues !== undefined) {
				return arrClues.description;
			} else if (arrClues === undefined && culClues !== undefined) {
				return culClues.description;
			} else {
                return newNormalClue.description;
            }
		}

       	return (
            <div key={clueList.indexOf(e) + 1} className="clue">
                <img src={`${process.env.PUBLIC_URL}/assets/clues/${addDashesToName(e)}.svg`} alt={e} className="clue-icon"/>
                <p>Name: {e}</p>
                <p>Description: {description()}</p>
            </div>
       );
    });

	return (
		<Clues mappedClues={mappedClues} />
	);
}

export default CluesContainer;