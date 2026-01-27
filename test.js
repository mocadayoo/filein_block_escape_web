const CONVERT_BLOCK_MAP = {
    '0': '▐', '1': '░', '2': '▒', '3': '▓', '4': '▔',
    '5': '▕', '6': '▖', '7': '▗', '8': '▘',
    '9': '▙', 'a': '▚', 'b': '▛', 'c': '▜',
    'd': '▝', 'e': '▞', 'f': '▟'
};

function convertToBlockElement(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(16)).join('') // convert to unicodesequence
                .split('').map(hchar => CONVERT_BLOCK_MAP[hchar]).join(''); // convert to blockmap
}

console.log(convertToBlockElement('こんにちは'))