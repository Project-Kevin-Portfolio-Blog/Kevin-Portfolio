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
            let title = item.title
            const titleLInk = title.split(' ').join('-')
            links.addEventListener('click', () => {
                window.location.href = `https://www.google.com/${titleLInk}`
            })
            headers.textContent = item.title
            snippets.textContent = item.snippet.slice(0, 80)
            tags.textContent = item.tagOne
            tagTwos.textContent = item.tagTwo
            tagThrees.textContent = item.tagThree
            date.textContent = item.createdAt.slice(0, 10)
        })
    })
    .catch(err => {
        console.error(err)
    })


// newsletter form submit
const submit = document.getElementById('sub')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
const newsAlert = document.getElementById('newsAlert')


const data = {
    fullname: fullname.value,
    email: email.value
}


submit.addEventListener('click', () => {
    console.log(fullname.value, email.value)
    newsAlert.textContent = ''
    if (fullname.value.length > 2 && email.value.length > 2) {
        fetch('https://blogapi-31c0.onrender.com/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }else{
        console.log('not valid')
        newsAlert.textContent = 'Add a valid Name or Email'
    }

})
