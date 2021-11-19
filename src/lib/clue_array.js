function clueArray(method) {
    let clues = [];
    switch (method) {
        case 'shooting':
            clues = [
                { name: 'bullet hole', description: 'Hole made by bullet'}, 
                { name: 'bullet casing', description: '' }, 
                { name: 'pistol', description: 'six round revolver. Smells of cordite.' }
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
                { name: 'lighter', description: 'Lighter with ornate pattern... half full'}, 
                { name: 'lighter fluid', description: 'Gas canister used to refill lighter'}
            ];
            break;
        case 'pushed out of window': 
            clues = [
                { name: 'fingerprints',  description: "a set of grubby fingerprints"}, 
                { name: 'open window', description: "Window left open..." },
            ];
            break;
        case 'stabbing':
            clues = [
                { name: 'knife', description: 'Knife stained with blood of the Lord' }, 
                { name: 'bloodstain', description: 'Most likely from Lord Marberry'}
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
