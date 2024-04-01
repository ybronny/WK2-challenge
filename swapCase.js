function swapCase(str) {
    let swap= "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            swap += char.toLowerCase();
        } else {
            swap += char.toUpperCase();
        }
    }
    return swap;
}

console.log(swapCase("The Quick Brown Fox"))