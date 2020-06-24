const leftArrow = document.querySelector('#prev-btn');
const rightArrow = document.querySelector('#next-btn');
const randomButton = document.querySelector('#random-btn');

const image = document.querySelector('#person-img');
const name = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const reviews = [
    {
        image: './img-folder/img1.jpg',
        name: 'Sarah Jones',
        job: 'ux designer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditatelibero? Iste, doloremque nihil? blah blah asdasd akjhjrt sdfsf'
    },
    {
        image: './img-folder/img2.jpg',
        name: 'Alona Montano',
        job: 'interior designer',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus adipisci fugiat, dignissimos magni ipsa atque, iste in quibusdam sunt alias sequi ullam.'
    },
    {
        image: './img-folder/img3.jpg',
        name: 'Im Nayeon',
        job: 'K-Pop Artist',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos numquam iure, voluptates in laboriosam vitae aspernatur, accusamus repudiandae dolorum dignissimos at reprehenderit hic earum ipsum.'
    },
    {
        image: './img-folder/img4.jpg',
        name: 'Jennie Kim',
        job: 'K-Pop Artist',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus adipisci fugiat, dignissimos magni ipsa atque, iste corrupti nesciunt voluptatibus consectetur ratione ex esse. Reiciendis!'
    }
];

let randomCounter = Math.floor(Math.random() * reviews.length);
let counter = randomCounter;

function change(n) {
    image.setAttribute('src', reviews[n].image);
    name.textContent = reviews[n].name;
    job.textContent = reviews[n].job;
    info.textContent = reviews[n].review;
}
change(randomCounter);


leftArrow.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = reviews.length - 1;
    }
    change(counter);
})
rightArrow.addEventListener('click', () => {
    counter++;
    if (counter > reviews.length - 1) {
        counter = 0;
    }
    change(counter);
})
randomButton.addEventListener('click', () => {
    counter = Math.floor(Math.random() * reviews.length);
    change(counter)
})