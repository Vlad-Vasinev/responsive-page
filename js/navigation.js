

document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const modalContainer = document.getElementById('modal-popup')

  if (!navigation || !modalContainer) return

  const ulNav = navigation.querySelector('ul')
  if (!ulNav) return

  ulNav.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-modal]')
    if (!li) return

    const templateId = li.dataset.modal
    const template = document.getElementById(templateId)

    if (!template) return

    modalContainer.innerHTML = ''
    modalContainer.appendChild(template.content.cloneNode(true))
    modalContainer.classList.add('modal--active')
  })

  modalContainer.addEventListener('click', (e) => {
    if (e.target.closest('.popup__close')) {
      modalContainer.innerHTML = ''
      modalContainer.classList.remove('modal--active')
    }
  })
})