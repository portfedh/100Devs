
// Listen for click in Photo1
document.getElementById('photo1').onclick = Him
document.getElementById('description1').onclick = Him

// Listen for click in Photo2
document.getElementById('photo2').onclick = Her
document.getElementById('description2').onclick = Her

// Listen for click in Photo3
document.getElementById('photo3').onclick = Personal
document.getElementById('description3').onclick = Personal

// Listen for click in Photo4
document.getElementById('photo4').onclick = Wedding
document.getElementById('description4').onclick = Wedding

// Listen for click in Photo5
document.getElementById('photo5').onclick = Jewels
document.getElementById('description5').onclick = Jewels

function Him() {
  document.querySelector('.mainPhoto').src = 'img/book-main.png'
  document.querySelector('#smallText').textContent = 'By: Rivendel Productions';
  document.querySelector('#heroText').textContent = 'Hardcover Customized Leather Journal';
  document.querySelector('#textDescription').textContent = 'You can write any words to personalize the leather cover ant ehe first page or your book.';
}

function Her() {
  document.querySelector('.mainPhoto').src = 'img/earing-main.png'
  document.querySelector('#smallText').textContent = 'By: WavyPinkCo';
  document.querySelector('#heroText').textContent = 'Colorful dangle statement earrings';
  document.querySelector('#textDescription').textContent = 'Handmade items. 2 inches wide, made of polymer and clay with surgical stainless steel.';
}

function Personal() {
  document.querySelector('.mainPhoto').src = 'img/personal-main.png'
  document.querySelector('#smallText').textContent = 'By: StampByMeStudio';
  document.querySelector('#heroText').textContent = 'Custom ceramic napkin holder';
  document.querySelector('#textDescription').textContent = 'Custom names, words or short phrases in any font or color. Perfect for celebrations and social occasions.';
}

function Wedding() {
  document.querySelector('.mainPhoto').src = 'img/wedding-main.png'
  document.querySelector('#smallText').textContent = 'By: KoKoBlossom';
  document.querySelector('#heroText').textContent = 'Wedding or anniversary Mug';
  document.querySelector('#textDescription').textContent = 'Made by hand and fully customizable.';
}

function Jewels() {
  document.querySelector('.mainPhoto').src = 'img/jewel-main.png'
  document.querySelector('#smallText').textContent = 'By: ZaraTaylor';
  document.querySelector('#heroText').textContent = 'Vintage blue emerald gemstone earings';
  document.querySelector('#textDescription').textContent = 'Sourced from Colombia, hand crafted by local artisans .';
}