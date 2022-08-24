const typeText = document.getElementById('typeText');
const textToBeTyped = ["a software developer", "a web developer", "Batman", "Joanna Skoczen"] 
let index = 0, isAdding = true , textToBeTypedIndex = 0

// type animation
function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      if (index > textToBeTyped[textToBeTypedIndex].length) {
        isAdding = false
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        index++
      }
    } else {
      if (index === 0) {
        isAdding = true
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTyped.length
      } else {
        index--
      }
    }
    playAnim()
  }, isAdding ? 120 : 60)
}
playAnim()

const root = document.getElementById('hero-section');
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});