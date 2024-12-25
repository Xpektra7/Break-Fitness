const toggleMenu = document.getElementById('toggleMenu');
const navMenu = document.getElementById('mobileNav');
const classCards = document.querySelectorAll('.classCard');
let clientName = document.getElementById('clientName');
let clientWords = document.getElementById('clientWords');
let count = document.getElementById('index');
let index = 1

names = ['Jessica L.','Maxim E.','Daniel R.','Micheal S.']
words= ['"Joining Break Fitness was the best decision I made this year. The trainers are amazing, and the classes are so fun and engaging!"','"The energy and motivation here are unmatched. I\'ve achieved goals I never thought were possible!"','"I love how inclusive and supportive the community at Break Fitness is. It\'s my happy place!"','"From the smart tech integrations to the personalized plans, Break Fitness has everything I need to succeed!"']

toggleMenu.addEventListener('click' , () => {
    toggleMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        toggleMenu.classList.toggle('active');
    }
})

console.log(classCards);

classCards.forEach(card => {
    card.addEventListener('click', () => {
        classCards.forEach(e => {
            e.classList.remove('selected');
        });
        card.classList.add('selected');
    })
})

function reduceIndex() {
    if (index > 1) {
        index = index - 1; 
    }
    maintenance(index)
}
function increaseIndex() {
    if (index < 4) {
        index = index + 1; 
    }
    maintenance(index)

}

function maintenance(e) {
    clientName.innerHTML = names[e - 1];
    clientWords.innerHTML = words[e - 1];
    count.innerHTML = index;
}