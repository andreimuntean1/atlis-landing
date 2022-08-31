const mediaQuery = window.matchMedia('(max-width: 600px)')

const buttons = document.querySelectorAll('button')
const heroImg = document.querySelector('img.hero-img')
const joinButtons = document.querySelectorAll('.form button')

const handleChange = e => {
  if (e.matches) {
    buttons.forEach(button => {
      if(button.innerText === 'Join Waitlist' && mediaQuery.matches)
        button.innerText = 'Join'
    })
    heroImg.src = '/assets/icons/globe.png'
  }
}

mediaQuery.addListener(handleChange)
handleChange(mediaQuery)

joinButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    button.classList.add('joined')
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
  })
})