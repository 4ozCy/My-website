document.getElementById('downloadButton').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    let filename = document.getElementById('filenameInput').value;
    if (filename.trim() === '') {
        filename = 'output';
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = `${filename}.txt`;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
