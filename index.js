const button = document.querySelector('.button')
const showMenu = document.querySelector('.menu')
const xIcon = document.querySelector('.xIcon')
const absolute = document.querySelector('.absolclass')

button.addEventListener('click',()=>{
    showMenu.classList.remove('hidden')
    absolute.classList.add("absolute")
})
xIcon.addEventListener('click',()=>{
    showMenu.classList.add('hidden')
    absolute.classList.remove("absolute")
})
// const button=document.querySelector('#button')
// const showmenu = document.querySelector('#myMenu')
// const xMark = document.querySelector('#xMark')
// const search = document.querySelector('#search')

// button.addEventListener('click',()=>{
//     showmenu.classList.remove('hidden')
//     showmenu.classList.add('absolute')
//     search.classList.remove('relative')

   
// })

// xMark.addEventListener('click',()=>{
//     showmenu.classList.add('hidden')
//     showmenu.classList.remove('absolute')
//     search.classList.add('relative')
    
// })
