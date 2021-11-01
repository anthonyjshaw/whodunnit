import { capitalize } from "./capitalize";

export default function camelCaseName(s) {
    try {
        if (s.split(' ').length < 2) { return s; }
        s = s.split(' ');
        for (let i = 1; i < s.length; i++) {
            s[i] = capitalize(s[i]);
        }
        return s.join('');
    } catch (error) {
        console.error(error);
    }
}

