export default function addDashesToName(s) {
    try {
        s = s.replace(/\s/g, '-');
        return s;
    } catch (error) {
        console.error(error);
    }
}
