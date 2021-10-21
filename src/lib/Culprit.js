import Suspect from "./Suspect.js";
import suspects from "./suspect_array.js";

class Culprit extends Suspect{
    constructor(suspect, motive, weapon) {
        super();
        this._suspect = suspect;
        this._motive = motive;
        this._weapon = weapon;
    }
};

const suspect = suspects[Math.floor(Math.random() * suspects.length)];
