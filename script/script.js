const products =[
  {
      id: 1,
      title: 'Lenova Yoga',
      price: 3000,
      availability: true,
  },
  {
      id: 2,
      title: 'Acer Aspine',
      price: 1800,
      availability: true,
  },
  {
      id: 3,
      title: 'Dell Vostro',
      price: 3400,
      availability: true,
  },
  {
    id: 4,
    title: 'Lenova Yoga',
    price: 3000,
    availability: true,
},
{
    id: 5,
    title: 'Acer Aspine',
    price: 1800,
    availability: true,
},
{
    id: 6,
    title: 'Dell Vostro',
    price: 3400,
    availability: true,
},
{
  id: 7,
  title: 'Lenova Yoga',
  price: 3000,
  availability: true,
},
{
  id: 8,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 9,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 10,
  title: 'Lenova Yoga',
  price: 3000,
  availability: true,
},
{
  id: 11,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 12,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 12,
  title: 'Lenova Yoga',
  price: 3000,
  availability: true,
},
{
  id: 14,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 15,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 16,
  title: 'Lenova Yoga',
  price: 3000,
  availability: true,
},
{
  id: 17,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 18,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 19,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 20,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 21,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 22,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
{
  id: 23,
  title: 'Acer Aspine',
  price: 1800,
  availability: true,
},
{
  id: 24,
  title: 'Dell Vostro',
  price: 3400,
  availability: true,
},
];

let order = [];

function addToBasket(productId) {

  renderCart();
  rerenderTotalPrice();
}

function removeFromBasket(productId) {
  renderCart();
  rerenderTotalPrice();
}

function rerenderTotalPrice() {

  document.getElementById('basket-items');

  cart.innerHTML = '';
  order.forEach((item) => {
      const el = document.createEvent('li');
      el.innerText = item.title;
      el.onclick = () => removeFromBasket(item.id);
      cart.appendChild(el);
  });
}

role="tablist" 
role="tab"
role="tabpanel"
$('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    event.target 
    event.relatedTarget 
  })
 
$(document).ready(function() {

$('#myCarouselArticle').carousel({
    interval: 5000
  });
});
$('.carousel').carousel({
  interval: 6000
})
$('.carousel').carousel({
responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }
]
});

