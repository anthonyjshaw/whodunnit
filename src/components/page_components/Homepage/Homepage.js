import  React  from 'react';
import { Link } from 'react-router-dom';
// import suspects from '../../../lib/suspect_array';

export default function Homepage(props) {
    
    // const [gameText, setGameText] = useState(() => {
    //     return localStorage.getItem('hasSession') === 'true' ? 'Continue': "Start";
    // }); 
    // const initSettings = ['death', 'location', 'culprit', 'hasSession'];
    
    // useEffect(() => {
    //     localStorage.setItem('hasSession', 'true');
    //     document.title = 'Whodunnit?';
    // });

    // function newGame() {
    //             const random = Math.floor(Math.random() * suspects.length)
    //             let culprit;
    //             if (localStorage.getItem('culprit') === '') {
    //                 culprit = suspects[random].name;
    //                 localStorage.setItem('culprit', culprit);
    //             }
    // }

    // function quitGame() {
    //         const confirm  = window.confirm("Are you sure you want to quit?");
    //         if (confirm) {
    //             suspects.forEach(e => localStorage.removeItem(`${e.name}-suspicious`));
    //             initSettings.forEach(e => e === 'hasSession' ? localStorage.setItem(e, 'false') : localStorage.setItem(e, ''));
    //             localStorage.removeItem('clueList');
    //             setGameText('Start');
    //         } else {
    //             return;
    //         }
    // } 
    // const link = localStorage.getItem('hasSession') === 'true' ? '/characters' : '/crime';
    
    return (
        <div className="container container-fade-in">
            <h1 className="page-header">Whodunnit?</h1>
            <div className="flex flex-column"> 
                <img src="/assets/homepage-logo.svg" alt='homepage icon' className="homepage-icon"/>
                <div className="button-container">
                    <Link to={props.link} onClick={props.newGame}><button className="homepage-btn">{props.gameText} investigation</button></Link>
                    <button className='homepage-btn' onClick={props.quitGame}>Quit Game</button>
                </div>
            </div>
            <div style={{height:200}}>

            </div>
        </div>
    );
}