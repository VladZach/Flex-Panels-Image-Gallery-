const panels = document.querySelectorAll('.panel')
panels.forEach(element => {
  element.addEventListener('click', togglePanel)
})

function togglePanel() {
  console.log(this)
  this.classList.toggle('open')
  this.classList.toggle('open-active')
}