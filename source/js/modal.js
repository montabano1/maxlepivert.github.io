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

  if(f) {
    $('.slideshowthumb').hide();
    $('.'+f).css('display', 'flex');
    $('.thumbcaption').show();
  } else {
    $('.slideshowthumb').hide();
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
