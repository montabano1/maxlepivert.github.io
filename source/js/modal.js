// Get the modal
var modal = $('#myModal');

function openModal(a, b, c, d, e, f) {
  $('#myModal').show();
  $('.modalImg').attr("src", a);
  $('.modalTitle').text(b);
  $('.modalSKU').text(c[0][1].split(' ')[1] + " " + c[0][1].split(' ')[2]);
  $('.modalSize').find('option').remove().end();
  c.forEach(function(el) {
    $('.modalSize').append($('<option>', {value:el[1], text:el[0], img:el[2]}));
  });
  $('.modalDescription').text(d);
  $('.modalPrice').text(c[0][1].split(' ')[0]);
  $('.sizeModal').text(e);

  if(f == 'cutthumbs') {
    $('.cutthumbs').css('display', 'flex');
    $('.picthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossqthumbs').hide();
    $('.cossetrdthumbs').hide();
    $('.cossetsqthumbs').hide();
    $('.thumbcaption').hide();
  } else if(f == 'picthumbs'){
    $('.picthumbs').css('display', 'flex');
    $('.thumbcaption').show();
    $('.cutthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossetrdthumbs').hide();
    $('.cossetsqthumbs').hide();
    $('.cossqthumbs').hide();
  } else if(f == 'cosrdthumbs'){
    $('.cosrdthumbs').css('display', 'flex');
    $('.thumbcaption').show();
    $('.picthumbs').hide();
    $('.cutthumbs').hide();
    $('.cossqthumbs').hide();
    $('.cossetrdthumbs').hide();
    $('.cossetsqthumbs').hide();
  } else if(f == 'cossqthumbs'){
    $('.cossqthumbs').css('display', 'flex');
    $('.thumbcaption').show();
    $('.picthumbs').hide();
    $('.cutthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossetrdthumbs').hide();
    $('.cossetsqthumbs').hide();
  } else if(f == 'cossetrdthumbs'){
    $('.cossetrdthumbs').css('display', 'flex');
    $('.thumbcaption').show();
    $('.picthumbs').hide();
    $('.cutthumbs').hide();
    $('.cossqthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossetsqthumbs').hide();
  } else if(f == 'cossetsqthumbs'){
    $('.cossetsqthumbs').css('display', 'flex');
    $('.thumbcaption').show();
    $('.picthumbs').hide();
    $('.cutthumbs').hide();
    $('.cossqthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossetrdthumbs').hide();
  } else {
    $('.cutthumbs').hide();
    $('.cosrdthumbs').hide();
    $('.cossqthumbs').hide();
    $('.cossetrdthumbs').hide();
    $('.cossetsqthumbs').hide();
    $('.picthumbs').hide();
    $('.thumbcaption').hide();
  }
}

function changepic(a, b) {
  $('.modalImg').attr("src", a);
  $('.thumbcaption').text(b);
}

function closeModal() {
  $('#myModal').css("display","none");
}

function changeModal(c) {
  $('.modalSKU').text(c.value.split(' ')[1] + " " + c.value.split(' ')[2]);
  $('.modalPrice').text(c.value.split(' ')[0]);
  $('.modalImg').attr("src", c.value.split(' ')[3]);
}

function checkModal(event) {
  if(event.target == document.getElementById('myModal')) {
    $('#myModal').css("display","none");
  }
}

// window.addEventListener('click', function() {debugger});
