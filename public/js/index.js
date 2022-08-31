const mediaQuery = window.matchMedia('(max-width: 600px)')

const buttons = document.querySelectorAll('button')
const heroImg = document.querySelector('img.hero-img')

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