const paymentOptions = document.querySelector('.paymethod')
const paymentplan = document.querySelector('#plan')
const paymentplanCancel = document.querySelector('#cancelp')
const allSections = document.querySelectorAll('section')

// flutterwave




paymentplan.addEventListener('click', ()=>{
    paymentOptions.style.cssText = 'display: flex;'
    for(i=0; i<allSections.length; i++){
        allSections[i].style.cssText = 'filter: brightness(40%); background-color: white;'
    }
    document.querySelector('nav').style.cssText = 'filter: brightness(40%); background-color: white;'
})

paymentplanCancel.addEventListener('click', ()=>{
    paymentOptions.style.cssText = 'display: ;'
    for(i=0; i<allSections.length; i++){
        allSections[i].style.cssText = 'filter: ; background-color: ;'
    }
    document.querySelector('nav').style.cssText = 'filter: ; background-color: ;'
})

const paystack = document.querySelector('#paystack')
const bankTransfer = document.querySelector('#bt')

paystack.addEventListener('click', ()=>{
    paystack.style.cssText = 'border: 3px solid  green;'
    bankTransfer.style.cssText = 'border: ;'
    document.getElementById('load').style.cssText = 'visibility: visible;'
    setTimeout(()=>{
        window.location.href = 'https://paystack.com/pay/mentorship-payment'
    },3000)
})





bankTransfer.addEventListener('click', (e)=>{
    paystack.style.cssText = 'border: ;'
    bankTransfer.style.cssText = 'border: 3px solid  green;;'
    document.getElementById('load').style.cssText = 'visibility: visible;'
    setTimeout(()=>{
        paymentOptions.style.cssText = 'display: ;'
        document.querySelector('form').style.display = 'flex'
    },1000)
})

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll('input')
    setTimeout(()=>{
        for(i=0; i<inputs.length; i++){
            inputs[i].style.cssText = 'border: 2px solid  green;'
        }
    },2000)
})

