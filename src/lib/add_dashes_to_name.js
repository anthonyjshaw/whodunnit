export default function addDashesToName(name) {
    return name.replaceAll(/\s/g, '-');
}