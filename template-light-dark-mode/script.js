const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


//chagne image mode
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


// Dark Model style
function darkMode() {
    console.log(nav)
    // nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
    // textBox.style.backgroundColor = 'rgb(255 255 255/50%)'
    // toggleIcon.children[0].textContent = 'Dark mode'
    // localStorage.setItem('theme', 'dark')
    // // toggleIcon.children[1].classList.remove('fa-sun')
    // // toggleIcon.children[1].classList.add('fa-moon')
    // toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    // imageMode('dark')


}
function lightMode() {
    console.log(nav)
    // nav.style.backgroundColor = 'rgb(255 255 255/50%)'
    // textBox.style.backgroundColor = 'rgb(0 0 0 /50%)'
    // toggleIcon.children[0].textContent = 'Light mode'
    // localStorage.setItem('theme', 'light')

    // // toggleIcon.children[1].classList.remove('fa-moon')
    // // toggleIcon.children[1].classList.add('fa-sun')
    // toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    // imageMode('light')


}
function toggleDarkLightMode(isLight) {
    nav.style.backgroundColor = isLight ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255/50%)'
    textBox.style.backgroundColor = isLight ? 'rgb(255 255 255/50%)' : 'rgb(0 0 0 /50%)'

    toggleIcon.children[0].textContent = isLight ? 'Dark mode' : 'Light mode'
    isLight ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    // toggleIcon.children[1].classList.remove('fa-sun')
    // toggleIcon.children[1].classList.add('fa-moon')

    isLight ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')

    isLight ? imageMode('dark') : imageMode('light')

}


// switch theme
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        // darkMode()
        toggleDarkLightMode(true)
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        // lightMode()
        toggleDarkLightMode(false)
    }
}

const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        // darkMode()
        toggleDarkLightMode(true)
    }
}

// event listeners

toggleSwitch.addEventListener('change', switchTheme)