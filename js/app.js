const sect = document.querySelectorAll('section');
const lists = document.querySelector('.nav-line');


sect.forEach((el, ind) => {
    let listItem = document.createElement('li');
    console.log(el.getAttribute('data-info'));
    listItem.innerHTML = `<a href=#${el.getAttribute('id')}> ${el.getAttribute('data-info')} </a>`
    listItem.setAttribute('class','mylist'+(ind+1));
    lists.appendChild(listItem);
})


/*
sect.forEach((el, ind) => {
    let listItem = document.createElement('li');
    let item = document.querySelector('.section' + (ind + 1));
    console.log(item.getAttribute('data-info'));
    listItem.innerHTML = `<a href=#${item.getAttribute('id')}> ${item.getAttribute('data-info')} </a>`
    lists.appendChild(listItem);
})
*/
let anArray = [0,1,2,3,4,5];
let newArray =[]
for (let i=0; i<anArray.length; ++i) {
    if (i < anArray.length-1) {
        newArray.push((anArray[i] + anArray[i+1])/2)
    }

}
console.log(newArray);

let anotherArray =anArray.map(el => el**2);

console.log(anotherArray);

let filteredArray = anArray.filter(el => el%2 === 0);
console.log(filteredArray);

let length = anArray.length;
console.log(length);

const secMidPos = arr => {
    let secMidPosition = arr.reduce ((acc, val, ind) => {
        if (ind < arr.length-1) {
            acc[ind] = (arr[ind] + arr[ind+1])/2;
        }
        return acc;
    }, []);
    return secMidPosition;
}
console.log(secMidPos(anArray));
let pos = Math.ceil(document.querySelector('.otherp').getBoundingClientRect().top + window.scrollY);
console.log(pos);
if (pos > 290) {
    document.querySelector('.firstp').classList.add('active');
}else {
    document.querySelector('.firstp').classList.remove('active');
}
