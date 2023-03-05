const menuopen = document.getElementById('menu')
const menuclose = document.getElementById('close')
const menuslidein = document.getElementById('navbar')
let phoneSize1 = window.matchMedia('(max-width: 435px)')
let NewsWriteUp = document.querySelector('#newsWU')



menuopen.addEventListener('click', () => {
    menuopen.style.cssText = 'animation: diss .5s ease-in-out 1;'
    menuslidein.style.cssText = 'transform: translateX(0%); transition: .5s linear;'
    document.querySelector('nav').style.cssText = 'box-shadow: -10px 0px 20px -5px #000086;'
    setTimeout(() => {
        menuopen.style.cssText = 'display: none;'
    }, 500)
    setTimeout(() => {
        menuclose.style.cssText = 'display: block;'
    }, 500)
    console.log('first')

})

menuclose.addEventListener('click', () => {
    menuopen.style.cssText = 'animation: diss .5s ease-in-out 1;'
    menuslidein.style.cssText = 'transform: translateX(100%); transition: .5s linear;'
    document.querySelector('nav').style.cssText = 'box-shadow: none;'
    menuclose.style.cssText = 'display: none;'
    setTimeout(() => {
        menuopen.style.cssText = 'display: block;'
    }, 500)
    console.log('first')
})


if(phoneSize1.matches){
    window.onscroll = function () {
        if(this.scrollY > 0){
            document.querySelector('nav').style.cssText = 'box-shadow: -10px 0px 20px -5px #000086;'
        }else if(this.scrollY === 0){
            document.querySelector('nav').style.cssText = 'box-shadow: none;'
        }
    }
    NewsWriteUp.textContent = 'get ultrices vitae etiam nunc iaculis ipsum magna. Phasellus libero morbi tincidunt cras'

}else {
    console.log('firsts')
}