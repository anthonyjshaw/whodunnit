export default function addDashesToName(s) {
    try {
        s = s.replace(/\s/g, '-');
    } catch (error) {
        console.error(error);
    }
    return s;
}
