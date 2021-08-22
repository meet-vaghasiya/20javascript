const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')

const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const navItems = [nav1, nav2, nav3, nav4, nav5]
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        console.log(nav)
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
        console.log(`slide-${direction2}-${i + 1}`)
    })
}


function toggleNav() {
    menuBars.classList.toggle('change')

    //toggle menu active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')) {
        // overlay.classList.remove('overlay-slide-left')
        // overlay.classList.add('overlay-slide-right')
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')




        //animate in
        // nav1.classList.remove('slide-out-1')
        // nav1.classList.add('slide-in-1')
        // nav2.classList.remove('slide-out-2')
        // nav2.classList.add('slide-in-2')
        // nav3.classList.remove('slide-out-3')
        // nav3.classList.add('slide-in-3')
        // nav4.classList.remove('slide-out-4')
        // nav4.classList.add('slide-in-4')
        // nav5.classList.remove('slide-out-5')
        // nav5.classList.add('slide-in-5')
        navAnimation('out', 'in');


    } else {

        // overlay.classList.remove('overlay-slide-right')
        // overlay.classList.add('overlay-slide-left')
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')

        navAnimation('in', 'out');


        //aniamtion out
        // nav1.classList.remove('slide-in-1')
        // nav1.classList.add('slide-out-1')
        // nav2.classList.remove('slide-in-2')
        // nav2.classList.add('slide-out-2')
        // nav3.classList.remove('slide-in-3')
        // nav3.classList.add('slide-out-3')
        // nav4.classList.remove('slide-in-4')
        // nav4.classList.add('slide-out-4')
        // nav5.classList.remove('slide-in-5')
        // nav5.classList.add('slide-out-5')
    }
}




//event listeners
menuBars.addEventListener('click', toggleNav)
nav1.addEventListener('click', toggleNav)
nav2.addEventListener('click', toggleNav)
nav3.addEventListener('click', toggleNav)
nav4.addEventListener('click', toggleNav)
nav5.addEventListener('click', toggleNav)