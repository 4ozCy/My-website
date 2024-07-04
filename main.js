// Rate Limiting Configuration
const rateLimit = {
    lastRequestTime: 0,
    delay: 2000 // 2 seconds delay between requests
};

const textToCodeMap = {
    'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
    'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
    'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15',
    'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
    'u': '21', 'v': '22', 'w': '23', 'x': '24', 'y': '25', 'z': '26',
    ' ': '27'
};

const codeToTextMap = Object.keys(textToCodeMap).reduce((obj, key) => {
    obj[textToCodeMap[key]] = key;
    return obj;
}, {});

document.getElementById('showTextToCode').addEventListener('click', () => {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('textToCodeContainer').style.display = 'block';
});

document.getElementById('showCodeToText').addEventListener('click', () => {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('codeToTextContainer').style.display = 'block';
});

document.querySelectorAll('.backButton').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('textToCodeContainer').style.display = 'none';
        document.getElementById('codeToTextContainer').style.display = 'none';
        document.getElementById('initialButtons').style.display = 'block';
    });
});

function canMakeRequest() {
    const currentTime = new Date().getTime();
    if (currentTime - rateLimit.lastRequestTime >= rateLimit.delay) {
        rateLimit.lastRequestTime = currentTime;
        return true;
    }
    return false;
}

document.getElementById('textToCodeButton').addEventListener('click', () => {
    if (!canMakeRequest()) {
        alert('Please wait before making another request.');
        return;
    }
    const textInput = document.getElementById('textInput').value.toLowerCase();
    const codedMessage = textInput.split('').map(char => textToCodeMap[char]).join(' ');
    document.getElementById('codeOutput').value = codedMessage;
});

document.getElementById('codeToTextButton').addEventListener('click', () => {
    if (!canMakeRequest()) {
        alert('Please wait before making another request.');
        return;
    }
    const codeInput = document.getElementById('codeInput').value.trim().split(' ');
    const decodedMessage = codeInput.map(code => codeToTextMap[code]).join('');
    document.getElementById('textOutput').value = decodedMessage;
});
