export function addUnderscoreToName(name) {
    try {
        return name.replace(/\s/g, '_');
    } catch (error) {
        console.error(error);
    }
}