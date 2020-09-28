const panels = document.querySelectorAll('.panel')

function togglePanel() {
  console.log(this)
  this.classList.toggle('open')
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
  }
}

panels.forEach(element => {
  element.addEventListener('click', togglePanel)
  element.addEventListener('transitionend', toggleActive)
})


