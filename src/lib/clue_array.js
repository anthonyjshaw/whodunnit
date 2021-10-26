

function clueArray(method) {
    let clues = [];
    switch (method) {
        case 'shooting':
            clues = [
                { name: 'bullet hole', description: 'Hole made by bullet'}, 
                { name: 'bullet casing', description: '' }, 
                { name: 'pistol', description: '' }
            ];
            break;
        case 'poison':
            clues = [
                { name: 'empty bottle', description: "Empty bottle of poison" },
                { name: "stain", description: "greenish stain"}
            ];
            break;
        case 'set on fire':
            clues = [
                { name: 'lighter', description: ''}, 
                { name: 'gas', description: ''}
            ];
            break;
        case 'pushed out of window': 
            clues = [
                { name: 'open window', description: "" }, 
            ];
            break;
        case 'stabbing':
            clues = [
                { name: 'knife', description: '' }, 
                { name: 'bloodstain', description: ''}
            ];
            break;
        default: 
            console.log("Not a murder method");
            clues = [];
            break;
    }
    return clues;
}
export { clueArray };
