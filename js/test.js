/** @format */

function switchTheme() {
  let de = document.documentElement
  let isDark = de.getAttribute('theme') == 'dark'
  de.setAttribute('theme', isDark ? 'light' : 'dark')
}
