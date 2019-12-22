function loadingContent(){
    const loading = document.querySelector('.loading');
    const bodyContent = document.querySelector('.body-content');
    
    setTimeout(function(){
        loading.style.display = 'none'; 
        bodyContent.style.display = 'block'; 
        },3000);
}

document.addEventListener('load',loadingContent());


$(document).ready(function(){
  $('.carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  });
});
$(document).ready(function(){
    $('.works-slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
  });

  //smooth scroll


  $('.nav nav ul li a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },2000);
    }
});

//visual scroll effects

 
function scrollAppear(){
    var introText = document.querySelector('.first-cards');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPostion = window.innerHeight /1.9;

    if(introPosition < screenPostion){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',scrollAppear);



