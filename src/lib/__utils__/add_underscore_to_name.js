export default function addUnderscoreToName(str) {
    try {
        return str.replace(/\s/g, '_');
    } catch (error) {
        console.error(error);
    }
}