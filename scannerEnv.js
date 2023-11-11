let messagePage = document.querySelector('.environment-title');
let url = window.location.hostname;

let keyWords = ['test', 'dev'];

let isTestEnv = keyWords.some(function(word) {
    let regex = new RegExp('\\b' + word + '\\b', 'i');
    return regex.test(url);
});

if (isTestEnv) {
    messagePage.innerHTML = "IT IS TEST ENVIRONMENT";
} else {
    let isDevEnv = keyWords.includes(url.toLowerCase());

    if (isDevEnv) {
        messagePage.innerHTML = "IT IS DEV ENVIRONMENT";
    } else {
        messagePage.innerHTML = "IT IS NEITHER TEST NOR DEV ENVIRONMENT";
    }
}
