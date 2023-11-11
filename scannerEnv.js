let messagePage = document.querySelector('.environment-title')
let url = window.location.hostname

let keyWords = ['test', 'dev']

let isTestEnv = keyWords.some(function(word) {
    let regex = new RegExp('\\b' + word + '\\b', 'i')
    return regex.test(url)
})

if (isTestEnv) {
    messagePage.innerHTML = "IT IS TEST ENVIRONMENT"
} else {
    messagePage.innerHTML = "IT IS DEV ENVIRONMENT OR YOUR LOCALHOST"
}