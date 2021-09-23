import Suspect from './Suspect'

const butler = new Suspect('Butler', 'Long time servant of the house.', 56, 180);
const maid = new Suspect('Maid', 'Recent addition to the household.', 22, 180);
const ladyOfTheHouse = new Suspect('Lady Of The House', 'Unhappy marriage, secret lover.', 44, 180);
const waywordSon = new Suspect('Wayword Son', 'Boozer, also ran, moneygrubbing brat.', 20, 180);
const frenchTeacher = new Suspect('French Teacher', 'Long time servant of the house.', 56, 180);


const suspects = [butler, ladyOfTheHouse, waywordSon, maid, frenchTeacher];
export {suspects};
