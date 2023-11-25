// Featured articles section
fetch('https://blogapi-31c0.onrender.com/blogs')
    .then(res => res.json())
    .then(data => {
        console.log(data.blogs)
        const blogData = data.blogs
        data.blogs.map((item, index) => {
            const headers = document.getElementById(`title${index}`)
            const date = document.getElementById(`date${index}`)
            const snippets = document.getElementById(`snippet${index}`)
            const tags = document.getElementById(`tag${index}`)
            const tagTwos = document.getElementById(`tagTwo-${index}`)
            const tagThrees = document.getElementById(`tagThree-${index}`)
            const links = document.getElementById(`link${index}`)
            const imgs = document.getElementById(`img${index}`)
            let title = item.title
            const titleLInk = title.split(' ').join('-')
            links.addEventListener('click', () => {
                window.location.href = `https://www.google.com/${titleLInk}`
            })
            headers.textContent = item.title
            snippets.textContent = item.snippet.slice(0, 80) + '...'
            tags.textContent = item.tagOne
            tagTwos.textContent = item.tagTwo
            tagThrees.textContent = item.tagThree
            imgs.setAttribute('src', item.image ? item.image : '/images/blog3.png')
        })
    })
    .catch(err => {
        console.error(err)
    })


// newsletter form submit
const submit = document.getElementById('form')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
const newsAlert = document.getElementById('newsAlert')



let data = {
    fullname: fullname.value,
    email: email.value
}
const regAlerrt = document.getElementById('regAlert')
const regClose = document.getElementById('regClose')

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(fullname.value, email.value)
    newsAlert.textContent = ''
    if (fullname.value.length > 2 && email.value.length > 2) {
        fetch('https://blogapi-31c0.onrender.com/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname: fullname.value,
                email: email.value
            })
        })
        .then(res=>{
            console.log(res)
            if(res.status === 200){
                console.log('nice')
                regAlerrt.style.cssText = 'display: block'
            }
        })
    }else{
        console.log('not valid')
        newsAlert.textContent = 'Add a valid Name or Email'
    }

})


regClose.addEventListener('click', ()=>{
    regAlerrt.style.cssText = 'display: none'
})
