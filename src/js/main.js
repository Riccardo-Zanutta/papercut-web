import '../css/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.className = 'js'

  const arr = ['<H', 'e', 'l', 'l', 'o', ' B', 'o', 'y/>']
  const iAmJavascriptES6 = () => console.log(...arr)
  iAmJavascriptES6()
})
