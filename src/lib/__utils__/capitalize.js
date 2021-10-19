const capitalize = (s) => {
    s = s.split('');
    s[0] = s[0].toUpperCase();
    return s.join('');
}

export {capitalize};