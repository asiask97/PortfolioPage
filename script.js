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


document.getElementById('main-container').addEventListener('scroll', () => {
  const main = document.getElementById('main-container')
  const aboutSection = document.getElementById('about-section')
  const projectSection = document.getElementById('project-section')
  const contactSection = document.getElementById('contact-section')
  
  const topAboutToTopViewport = aboutSection.getBoundingClientRect().top;
  const topProjectToTopViewport = projectSection.getBoundingClientRect().top;
  const topContactToTopViewport = contactSection.getBoundingClientRect().top;
  
  const clientHeight =  document.documentElement.clientHeight

  //If user is in hero scetion
  if(main.scrollTop.toFixed() == 0){
    changeDots(document.getElementById('dotOne'))
    changeColor('white')
  }
  //About section 
  if(topAboutToTopViewport.toFixed() < (clientHeight -(clientHeight/2)) && topAboutToTopViewport >= 0 ){
    changeDots(document.getElementById('dotTwo'))
    changeColor('black')
  }
  //Project Section
  if(topProjectToTopViewport.toFixed() < (clientHeight -(clientHeight/2)) && topProjectToTopViewport >= 0){
    changeDots(document.getElementById('dotThree'))
    changeColor('white')

  }
  //Contact Section
  if(topContactToTopViewport.toFixed() < (clientHeight -(clientHeight/2)) && topContactToTopViewport >= 0){
    changeDots(document.getElementById('dotFour'))
    changeColor('black')
  }

})

function changeDots(filled){
  const dots = document.querySelectorAll('.dot')
  dots.forEach(element => {
    if(element == filled) element.innerHTML = '<circle cx="8" cy="8" r="8"/>'
    else element.innerHTML = '<path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"></path>'
  });
}

function changeColor(color){
  const dots = document.querySelectorAll('.dot')
  const navBar = document.querySelectorAll('.navbar')
  const socials = document.querySelectorAll('.social')
  if(color == 'black'){
    dots.forEach(element => {
      element.setAttribute("fill", "black")
    });
    socials.forEach(element => {
      element.setAttribute("fill", "black")
    });
    navBar.forEach(element => {
      element.style.color = 'black'
    });
  }
  else{
    dots.forEach(element => {
      element.setAttribute("fill", "white")
    });
    socials.forEach(element => {
      element.setAttribute("fill", "white")
    });
    navBar.forEach(element => {
      element.style.color = 'white'
    });
  }
}
function moveToSelected(element) {

  if (element == "next") {
    var selected = document.querySelector(".selected").nextElementSibling;
  } else if (element == "prev") {
    var selected = document.querySelector(".selected").previousElementSibling;
  } else {
    var selected = element.parentElement;
  }
  var next = selected.nextElementSibling;
  var prev = selected.previousElementSibling;
  var prevSecond = prev.previousElementSibling;
  var nextSecond = next.nextElementSibling;

  selected.className = ''
  selected.classList.add("selected");
  selected.classList.add("card");

  prev.className = ''
  prev.classList.add("prev");
  prev.classList.add("card");

  next.className = ''
  next.classList.add("next");
  next.classList.add("card");

  if(nextSecond){
    nextSecond.className = ''
    nextSecond.classList.add("nextRightSecond");
    nextSecond.classList.add("card");
  }

  if(prevSecond){
    prevSecond.className = ''
    prevSecond.classList.add("prevLeftSecond");
    prevSecond.classList.add("card");
  }

}

const cards = document.querySelectorAll('.card');
cards.forEach(element => {
  element.addEventListener('click', e =>{
    if(e.target.tagName == 'IMG'){
      moveToSelected(e.target)

    }else{
      moveToSelected(e.target.parentElement)
    }
  })
});

document.getElementById('prev').addEventListener('click', e =>{
  moveToSelected('prev')
})
document.getElementById('next').addEventListener('click', e =>{
  moveToSelected('next')
})