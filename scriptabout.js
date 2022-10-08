const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const button = document.querySelector('.send-btn');
const inputEmail = document.querySelector('.input-email')
const modal = document.querySelector('.modal-main');
const closeButton = document.querySelector('.close')
const modalValue = document.querySelector('.modal-main p')
const textValue = document.querySelector('.input-subject')
const nameValue = document.querySelector('.input-name')
const icons = document.querySelectorAll('.icon.switch')
const circles = document.querySelectorAll('.circle')
const sections = document.querySelectorAll('.section')
const discordName = document.querySelector('.discord-name')
const discordIcon = document.querySelector('.discord')
const copyNoti = document.querySelector('.copy-noti')
const darkModeBtn = document.querySelectorAll('.dark-mode-button')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
// const layout = shadowRoot.querySelector('.icon-inner')
// closeButton.addEventListener('click',() => {
//     modal.classList.remove('active')
// })

// function sendMail(){


// Email.send({
//     Host : "smtp.gmail.com",
//     Username : "lamtungdao28@gmail.com",
//     Password : "Daotunglam28",
//     To : 'lamtungdao28@gmail.com',
//     From : inputEmail.value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );}


    icons.forEach((icon,index) => {
        const section = sections[index]
        const circle = circles[index]
        icon.addEventListener('click', (e) => {
            
            $('.circle.active').classList.remove('active')
            $('.section.active').classList.remove('active')

            section.classList.add('active')
            section.classList.add('animate__animated')
            section.classList.add('animate__fadeIn')
            circle.classList.add('active')

            
            // icon.style.transform = 'scale(1) translateY(-30px)'
            
            // setTimeout(() => {
            //     icon.style.transform = 'scale(1.4)'
            // }, 200) 
            // icon.addEventListener('hover', () => {
            //     icon.style.transform = 'scale(1)'})

            })
        })
window.onload = () => {
    document.body.classList.remove('preload')
}
discordIcon.addEventListener('click', () => {navigator.clipboard.writeText('1am#6977').then(() => {
    copyNoti.style.transform = 'translateY(-10px)';
    copyNoti.style.opacity = '1';
    setTimeout(() => { copyNoti.style.transform = 'translateY(0px)'; copyNoti.style.opacity = '0'; },600)
    
})
}) 
discordIcon.addEventListener('mouseleave', () => {
    copyNoti.style.transform = 'translateY(0px)';
    copyNoti.style.opacity = '0';
})
darkModeBtn.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        let theme 
        if (document.body.classList.contains('dark-mode')) {
            moon.classList.remove('active')
            sun.classList.add('active')
            theme = 'light'
        }
        else {
            theme = 'dark'
            moon.classList.add('active')
            sun.classList.remove('active')
        }
        localStorage.setItem('themeUser', JSON.stringify(theme))
        document.body.classList.toggle('dark-mode')

    }
    
    )
})
let getTheme = JSON.parse(localStorage.getItem('themeUser'))
if (getTheme == 'dark') {

    document.body.classList.add('dark-mode')
    moon.classList.add('active')
    sun.classList.remove('active')

}
else {
    document.body.classList.remove('dark-mode')
    moon.classList.remove('active')
    sun.classList.add('active')
}
