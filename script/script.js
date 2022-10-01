const openBtn = document.querySelector ('#BtnAddToCart');
const dialog = document.querySelector ('dialog');
const closeBtnAddToCart = dialog.querySelector ('button')

openBtn.onclick = () => dialog.showModal()
closeBtnAddToCart.onclick = () => dialog.close()

// export json
$(document).ready ( function(){
  var products = (function () {
      var products = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': '../JSON/products.json',
          'dataType': "json",
          'success': function (json) {
          products = json;
          }
      });
      return products;
  })();
  });

let order = [];

function addToBasket(productId) {

  renderCart();
  rerenderTotalPrice();
}

// for basket

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


// carusel

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

