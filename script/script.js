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

