
const b = document.getElementById('1');
b.classList.add('img1')
console.log(b)
let s = () => {
    b.classList.remove('img1')
    b.classList.add('img123')

}
setTimeout(s, 3000);


let q = document.getElementById('2');
q.classList.add('img123');
let w = () => {
    q.classList.remove('img123')
    q.classList.add('img1')

}
setTimeout(w, 3000);


let q_2 = document.getElementById('3');
q_2.classList.add('img123');
let r = () => {
    q.classList.add('img123')
    q_2.classList.remove('img123')
    q_2.classList.add('img1')
}
setTimeout(r, 6000);




