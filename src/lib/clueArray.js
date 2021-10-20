

function clueArray(method) {
    let clues = [];
    switch (method) {
        case 'shooting':
            clues = ['bullet hole', 'bullet casing', 'pistol'];
            break;
        case 'poison':
            clues = ['empty bottle'];
            break;
        case 'set on fire':
            clues = ['lighter', 'gas'];
            break;
        case 'pushed out of window': 
            clues = ['open window', ];
            break;
        case 'stabbing':
            clues = ['knife', 'bloodstain']
            break;
        default: 
            console.log("Not a murder method");
            clues = [];
            break;
    }
    return clues;
}

console.log(clueArray('poison'));