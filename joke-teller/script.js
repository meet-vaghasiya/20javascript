const button = document.getElementById('button')
const audioElement = document.getElementById('audio')

// disabel/enable button
function toggleButton() {
    button.disabled = !button.disabled
}

// voiceRss speech function
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'b0175702843f404493dde45acc59c433',
        src: joke,
        hl: 'en-us',
        // v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
    toggleButton()
}
async function getJokes() {
    // toggleButton()

    let joke = ''
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        if (data.setup) {
            joke = `${data.setup}  ...  ${data.delivery}`
        } else {
            joke = data.joke
        }
        tellMe(joke)
    } catch (error) {
        console.error(error)
    }
}


// add event Listeners
button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)