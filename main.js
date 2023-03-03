// window.onload = ()=>{
//     return load 
// }

// function load (){
//     document.querySelector('body').style.display = 'none'
// }

let aboutMeText = document.querySelector('.aboutmeText')
let phoneSize1 = window.matchMedia('(max-width: 435px)')
let mentorWriteUp = document.querySelector('#mentorWU')
let NewsWriteUp = document.querySelector('#newsWU')

if(phoneSize1.matches){
    aboutMeText.textContent = 'Eget ultrices vitae etiam nunc iaculis ipsum magna. Phasellus libero morbi tincidunt cras. Tincidunt dignissim euismod dui egestas donec proin est. Blandit amet erat viverra sit egestas. Ornare cursus sit aliquet ullamcorper pretium cras non. Pellentesque sit ut phasellus interdum molestie maecenas erat pretium, hendrerit. Et facilisi mauris'
    mentorWriteUp.textContent = 'get ultrices vitae etiam nunc iaculis ipsum magna. Phasellus libero morbi tincidunt cras. Tincidunt dignissim euismod dui egestas donec proin est.  Blandit amet erat viverra sit egestas.'
    NewsWriteUp.textContent = 'get ultrices vitae etiam nunc iaculis ipsum magna. Phasellus libero morbi tincidunt cras'
}else{
    console.log('firsts')
}

