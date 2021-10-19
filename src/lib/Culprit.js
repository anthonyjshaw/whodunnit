import Suspect from "./Suspect";

export default class Culprit extends Suspect{
    constructor(suspect, motive, weapon) {
        super();
        this._suspect = suspect;
        this._motive = motive;
        this._weapon = weapon;
    }
}