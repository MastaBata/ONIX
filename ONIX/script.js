$(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });


$( document ).ready(function() {
      $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:true,
            prevArrow: "<img src='img/svg/back.svg' class='prev' alt='1'>",
            nextArrow: "<img src='img/svg/next.svg' class='next' alt='2'>",
      });
});

/* Article FructCode.com */
$( document ).ready(function() {
      $(".buy_second").click(
              function(){
                    sendAjaxForm('result_form', 'ajax_form', 'send.php');
                    return false; 
              }
        );
  });
   
  function sendAjaxForm(result_form, ajax_form, url) {
      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
          success: function(response) { //Данные отправлены успешно
                result = $.parseJSON(response);
                $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber +'<br>Сообщение:'+result.message);
            },
            error: function(response) { // Данные не отправлены
              $('#result_form').html('Ошибка. Данные не отправлены.');
            }
         });
  }