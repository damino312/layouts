let body = document.querySelector('body')
let logos = document.querySelector('.logos')
console.log(logos.offsetWidth)

 logos.style.height = logos.offsetWidth  + 'px'

let after = window.getComputedStyle(logos, ':after');
// after.width = 50 + 'px'
console.log(after.width)



