import Suspect from "./Suspect.js";

const butler = new Suspect('Butler', 'Long time servant of the house.', 64, 180);
const maid = new Suspect('Maid', 'Recent addition to the household.', 22, 180);
const ladyOfTheHouse = new Suspect('Lady Of The House', 'Unhappy marriage, secret lover.', 44, 180);
const waywardSon = new Suspect('Wayward Son', 'Boozer, also ran, moneygrubbing brat.', 20, 180);
const bestFriend = new Suspect('Business Partner', 'boorish lout, relationship with the lady.', 49, 200);
const frenchTeacher = new Suspect('French Teacher', 'Family owns a failing vineyard in Bordeaux.', 33, 180);


const suspects = [butler, ladyOfTheHouse, waywardSon, maid, frenchTeacher, bestFriend];
export default suspects;
