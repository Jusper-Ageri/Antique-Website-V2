let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 4000);
}
const modal = document.getElementById('galleryModal');
const btn = document.getElementById('viewGallery');
const span = document.getElementsByClassName('close')[0];
const gallery = document.getElementById('galleryImages');
btn.onclick = () => {
  modal.style.display = 'flex';
  gallery.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
    let img = document.createElement('img');
    img.src = `https://source.unsplash.com/600x400/?interior,decor,${i}`;
    gallery.appendChild(img);
  }
};
span.onclick = () => modal.style.display = 'none';
window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };