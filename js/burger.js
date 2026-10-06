

document.addEventListener('DOMContentLoaded', () => {
  const newBurger = document.querySelector('.burger')

  const navigation = document.querySelector('.navigation')

  if(!newBurger) return

  newBurger.addEventListener('click', function() {

    if(!this.querySelector('div').classList.contains('_active')) {
      this.querySelectorAll('div').forEach(el => {
        el.classList.add('_active')
      });
      navigation.classList.add('navigation--active')
      this.classList.add('_active')
    }
    else {
      this.querySelectorAll('div').forEach(el => {
        el.classList.remove('_active')
      });
      navigation.classList.remove('navigation--active')
      this.classList.remove('_active')
    }
  })
})