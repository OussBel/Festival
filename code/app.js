// **************** Affichage du formulaire de réservation *****************/

const buttons = document.querySelectorAll('.btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close')

const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

buttons.forEach((button) => {
  button.addEventListener('click', openModal)
})

close.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

// ******************************************************************************//

const buttonEnvoyer = document.querySelector('button[type="submit"]')

buttonEnvoyer.addEventListener('click', closeModal)
