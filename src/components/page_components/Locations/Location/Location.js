import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import { locations } from '../../../lib/locations';
import { capitalize } from '../../../../lib/capitalize';
import { addDashesToName } from '../../Characters/Characters';

export default function Location() {
    const {location} = useParams();
    const [clue, setClue] = useState();
    const [clueList, setClueList] = useState(() => {
        return localStorage.getItem(`clueList`) === undefined || localStorage.getItem(`clueList`) === null ? [] : localStorage.getItem(`clueList`).split(',');
    });

    useEffect(() => {
        localStorage.setItem(`clueList`, clueList.join(','))
        document.title = `Whodunnit | Locations | ${location}`;
    })

    function handleMouseOver(e) {
        setClue(e.target.className.baseVal)
    }

    function handleClick(e) {
        e.preventDefault();

        setClueList((prev) => {
            console.log(prev)
            if (prev.includes(clue)) {
                // filter the clicked topping out of state
                return prev.filter(t => t !== clue);
              } else {
                // add the clicked topping to our state
                return [clue, ...prev];
              }
        });
    }
    const mappedClues = clueList === undefined || clueList === null ? [] : clueList.filter(e => e !== '').map(e => <li key={clueList.indexOf(e)}><p>{e}</p></li>);
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">{capitalize(location)}</h1>
            <p>Item: {clue}</p>
            <div className='location-image-wrapper'>
            <svg width="1330" height="1036" viewBox="0 0 1330 1036" fill="none" xmlns="http://www.w3.org/2000/svg" className="location-image">
                <path d="M29 870L815.5 634.5L1309.5 703L1100 1036H29V870Z" fill="#B97C7C"/>
                <path d="M28 0.5H274.5L771 199.5L775 604L28 756V0.5Z" fill="#D83131"/>
                <path d="M1330 87L771 198L775 604.5L1327.5 661.5L1330 87Z" fill="#D83131"/>
                <path d="M271 0H1330V86.5L771.5 199L529 99.5L348 27.5L271 0Z" fill="white" fillOpacity="0.48"/>
                <path d="M897 308.5L962.5 302L965 384.5L900 387L897 308.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M1011 308.5L1076.5 302L1079 384.5L1014 387L1011 308.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M1149 295.5L1214.5 289L1217 371.5L1152 374L1149 295.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M523 400.5L595.5 406L590.5 500H518L523 400.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M367.5 451L416 452.5L417.5 507.5L368.5 509L367.5 451Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M639 360L742 374.5V610.5L645 628L639 360Z" fill="#481616" fillOpacity="0.39" className="door" onMouseOver={handleMouseOver} onClick={handleClick}/>
                <path d="M652 380L733.5 390.336V596.836L658.5 610.499L652 380Z" fill="#481616" fillOpacity="0.39" className="door" onMouseOver={handleMouseOver} onClick={handleClick}/>
                <path d="M664 267L727.5 285L724.5 360.5L664 352V267Z" fill="#C4C4C4" fillOpacity="0.39"/> 
                <path d="M520 257.5L594 275.5V389.5L520 381.5V257.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M323 233.5L455 261V440.5L321 435L323 233.5Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M73.5 152L220 189.5V349L73.5 331.5V152Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M72 379L226 392V405.5L223.5 409L221.5 430L225.5 443.5V453L223 467L222 475L223 480.5L221 482V489V494.5L223.5 495V510.5L69 515L72 379Z" fill="#C4C4C4" fillOpacity="0.39"/>
                <path d="M222.5 745.124V733.66L519.5 817.379V830.835L222.5 745.124Z" fill="#C4C4C4" fillOpacity="0.52" stroke="black"/>
                <path d="M1109 607.5L596.565 808.958L597.815 823.404L1109 619.001L1109 607.5Z" fill="#C4C4C4" fillOpacity="0.52"/>
                <path d="M519.845 817L596.5 809.5L598.061 820.427C598.301 822.107 597.101 823.651 595.413 823.834L519.845 831.999L519.845 817Z" fill="#C4C4C4"/>
                <path d="M734.472 966.342L799.161 924.539L805.557 933.534C806.541 934.917 806.182 936.84 804.766 937.776L741.347 979.673L734.472 966.342Z" fill="#C4C4C4" fillOpacity="0.31"/>
                <path d="M601.999 993L602 870.5L615.811 874.385C617.105 874.749 617.999 875.929 617.999 877.273L617.999 999.5L601.999 993Z" fill="#C4C4C4" fillOpacity="0.31"/>
                <path d="M736.613 871.998L738.115 952.991L739.997 973L750.116 990.991L767.501 1028.5L757.135 1033.68C755.672 1034.41 753.893 1033.84 753.135 1032.39L734.616 996.991L727.116 958.991L723.004 881.485L736.613 871.998Z" fill="#583808"/>
                <path d="M748.497 722.501L738.496 797.001L737.887 871.998L729.6 877.097C727.571 878.345 724.967 876.845 725.029 874.464L726.998 799.001L739.997 721.499L748.497 722.501Z" fill="#583808"/>
                <path d="M531.5 849.996L548 853.498L573 849.997L573 860.689L569.153 870.36C568.75 871.372 567.83 872.086 566.749 872.226L553 874L529.5 870.5L526 857L531.5 849.996Z" fill="#C4C4C4" fillOpacity="0.31"/>
                <path d="M531.5 871L553.5 874L569 872.5L571.498 885.312L566.499 927L563.467 961.309C563.342 962.723 562.244 963.856 560.834 964.024L546.499 965.735L532.753 963.735L524.499 881.622L531.5 871Z" fill="#C4C4C4" fillOpacity="0.31"/>
                <path d="M606 849.28L709.5 801.5L803 834.5L726 880L606 849.28Z" fill="#3F2D19" fillOpacity="0.51"/>
                <path d="M605.718 851L722.088 880.293L722.088 902.5L602 870.5L605.718 851Z" fill="#C4C4C4" fillOpacity="0.37"/>
                <path d="M29 658.5L147 644.5L259 629.5V650L143.5 666.5L29 681.5V658.5Z" fill="#C4C4C4" fillOpacity="0.55"/>
                <path d="M309 539.5H364.75H420.5L517.5 526.5L521 528.5L520 535H515.5L513.5 533.5L511 536L509 545V550L511.5 554L515 554.5L517 554L518 551L519 550.75L520 550.5L523 558.5L521 563L518.5 563.5L518 568.673V575L514.5 598.5L510.5 657.5L478.5 664V564L473.5 555.663H456.5L448.5 561.5L411.02 568.673H387L365.5 564L341.5 561.5L335 568.673L329.5 579V626V694.5L309 698.5V539.5Z" fill="#C4C4C4" fillOpacity="0.55"/>
                <path d="M1328.5 705V1035.5H1101L1211 865.5L1310.5 705H1328.5Z" fill="#6A3636" fillOpacity="0.6"/>
                <path d="M334.5 780.5L32.595 867.5L32.595 797.231L144.025 769.098L229.5 749.5L334.5 780.5Z" fill="#6A3636" fillOpacity="0.6"/>
                <path d="M503.375 812.203L225.173 733.163C217.873 731.089 216.235 721.481 222.434 717.105C223.467 716.377 224.64 715.873 225.88 715.626L867.906 588.006C874.608 586.674 881.453 586.206 888.273 586.614L1102.65 599.419C1103.53 599.472 1104.39 599.759 1105.13 600.25C1108.47 602.479 1107.95 607.541 1104.23 609.047L854.5 710L608.514 803.87C602.197 806.28 595.6 807.88 588.88 808.631L534.127 814.753C523.808 815.907 513.363 815.04 503.375 812.203Z" fill="#A74132" stroke="black" className="table" onMouseOver={handleMouseOver} onClick={handleClick}/>
                <path d="M789 87L796.5 79L808.5 76H822.5L832 82V218L843.75 236.75L845.5 252L857.5 256.5V242.5L866.5 241.5L865 229H861.5L861 224L868.5 223.5L876 222.5L877.5 227V241.5L881.5 242.5H889H902L909 263L905 283.5L860 285.5L851.5 283.5V301.5L826 335H798L789 87Z" fill="white" fillOpacity="0.99"/>
            </svg>

                 {/* <img src={`/assets/locations/${addDashesToName(location)}.svg`} alt={location} className='location-image'/>  */}
            </div>
            <div>
                <ul>
                    {mappedClues}
                </ul>
            </div>
        </div>
    )
}