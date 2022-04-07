const d = document, $members = d.getElementById('gallery'), $template = d.getElementById('template-card').content, $fragment = d.createDocumentFragment(), cardContent = [
    {
        title: 'تصوير وتغطية احمد ردين',
        img: src="assets/img/ph1.jpg",
        description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
        by: 'ahmadrodain',
        category: 'photo'
    },
    {
      title: 'تصوير وتغطية احمد ردين',
      img: src="assets/img/ph4.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'photo'
    },
    {
      title: 'تصوير وتغطية احمد ردين',
      img: src="assets/img/ph3.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'photo'
  },
    {
      title: 'تصوير وتغطية احمد ردين',
      img: src="assets/img/ph2.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'photo'
  },


{
  title: 'تصوير وتغطية احمد ردين',
  img: src="assets/img/ph5.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'photo'
},
// end photo
    {
        title: 'تصوير وتغطية احمد بن ردين',
        img: src="assets/img/mr1.jpg",
        description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
        by: 'ahmadrodain',
        category: 'marriage'
    },
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/mr4.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'marriage'
    },
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/mr2.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'marriage'
  },
  {
    title: 'تصوير وتغطية احمد بن ردين',
    img: src="assets/img/mr3.jpg",
    description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
    by: 'ahmadrodain',
    category: 'marriage'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/mr5.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'marriage'
},
// end marriage
    {
        title: 'تصوير وتغطية احمد بن ردين',
        img: src="assets/img/kid1.jpg",
        description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
        by: 'ahmadrodain',
        category: 'kids'
    },
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/kid2.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'kids'
  },
  {
    title: 'تصوير وتغطية احمد بن ردين',
    img: src="assets/img/kid3.jpg",
    description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
    by: 'ahmadrodain',
    category: 'kids'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/kid4.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'kids'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/kid5.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'kids'
},
// end kids
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/pd6.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'Products'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/pd7.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'Products'
},
    {
        title: 'تصوير وتغطية احمد بن ردين',
        img: src="assets/img/pd1.jpg",
        description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
        by: 'ahmadrodain',
        category: 'Products'
    },
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/pd3.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'Products'
  },
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/pd2.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'Products'
  },
 
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/pd4.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'Products'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/pd5.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'Products'
},

// end Products
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp2.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
    {
      title: 'تصوير وتغطية احمد بن ردين',
      img: src="assets/img/sp1.jpg",
      description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
      by: 'ahmadrodain',
      category: 'sports'
  },
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp3.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp4.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp5.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp6.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp7.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
},
{
  title: 'تصوير وتغطية احمد بن ردين',
  img: src="assets/img/sp8.jpg",
  description: 'جميع الحقوق محفوظة للمصور احمد بن ردين',
  by: 'ahmadrodain',
  category: 'sports'
}
// end sports
]
  
cardContent.forEach(el=> {
    $template.querySelector('figure').setAttribute('data-category',el.category)
    $template.querySelector('figure').setAttribute('data-description',el.description)
    $template.querySelector('figure').setAttribute('data-by',`By ${el.by}`)
    $template.querySelector('img').setAttribute('src',el.img)
    $template.querySelector('img').setAttribute('alt',`${el.by} Photo`)
  	$template.querySelector('img').setAttribute('title',`${el.title} Photo`)
 
    let $clone = d.importNode($template,true)
    $fragment.appendChild($clone)
})   
$members.appendChild($fragment)
  
window.addEventListener('load', () => {
d.getElementById('gallery').classList.add('uploaded')
const overlay = d.querySelector('.overlay'), fullscreen = d.querySelector('#toggle-fullscreen i')
d.querySelectorAll('.grid .gallery__figure img').forEach( (element) => {
    element.addEventListener('click', () => {
      	const title = element.getAttribute('title'),
              alt = element.getAttribute('alt'),
              route = element.getAttribute('src'),
              description = element.parentNode.dataset.description,
              by = element.parentNode.dataset.by
        overlay.classList.remove('hidden')
      	d.querySelector('.overlay img').title = title
        d.querySelector('.overlay img').alt = alt
        d.querySelector('.overlay img').src = route
        d.querySelector('.overlay .leyend').innerHTML = description
      	d.querySelector('.overlay figcaption').innerHTML = by
    })
})

d.querySelector('#gallery__close').addEventListener('click', () => {
	    overlay.classList.add('hidden')
	  	if (d.fullscreenElement) {
	      fullscreen.classList.remove('fa-compress')
	      fullscreen.classList.add('fa-expand')
	      exitPromise = d.exitFullscreen()
	    }
	})
  d.querySelector('.gallery__open').addEventListener('click', event => { 
    if(event.target.id == 'open') {
      overlay.classList.add('hidden')
      fullscreen.classList.remove('fa-compress')
      fullscreen.classList.add('fa-expand')
      d.fullscreenElement ? d.exitFullscreen() : ''
    }
  })
	d.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
	fullscreen.classList.toggle('fa-expand')
	fullscreen.classList.toggle('fa-compress')
	d.fullscreenElement ? d.exitFullscreen() : overlay.requestFullscreen()
	})
})