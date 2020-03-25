function scrollToShop() {
  var elmnt = document.getElementById("products-header");
  elmnt.scrollIntoView();
}
function clearfilters() {

  $('.type-buttons').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    if($buttonGroup.val() != '') {
      $buttonGroup.hide();
    }
  });
  $("#min_price").val(0);
  $("#max_price").val(3000);
  $('.aboutusmenucontainer').hide();
	$(".type-select").val('');
	$(".type-select").trigger('change');
	$(".price-select").val('');
	$(".price-select").trigger('change');
	$('#allitems-button').show();
	$('#all-prices-button').click();
	$('#allitems-button').click();
  $('.postheader').hide();
	$('.slideshow-container').hide();
	$('.aboutuscontainer').hide();
	$('.contactuscontainer').hide();
	$('.dropdownn-content').hide();
	$('.grid').removeClass('hidden');
  $('.products-all').show();
	$('#all-items').removeClass('hidden');
	$('#products-header').show();
	$('.grid').isotope();
}

function menuFunction(s) {
  $('.products-all').show();
	$('.quicksearch').val('');
  $("#min_price").val(0);
  $("#max_price").val(3000);
	$("#select-filter").val(s);
	$('#' + s.slice(1) + '-button').trigger('click');
	$('#' + s.slice(1) + '-button').show();
  $('.aboutusmenucontainer').hide();
	$('#allitems-button').show();
  $('.dropdownn-content').toggle();
  $('#all-prices-button').click();
  $('#' + s.slice(1) + '-button').prop('value').split(' ').forEach(function(el){
    $('#' + el + '-button').show();
  });
  $('.postheader').hide();
	$('.grid').removeClass('hidden');
	$('#all-items').removeClass('hidden');
  $('#products-header').show();
	$('.grid').isotope();
  if(s == '') {
    $('#allitems-button').click();
    $('#products-header').text('All Items');
    $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  } else {
    $('#products-header').text($('#' + s.slice(1) + '-button').text());
    $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  }
}
function menuPriceFunction(s) {
  $('.products-all').show();
	$('.quicksearch').val('');
	$("#select-filter").val(s);
	$('#allitems-button').trigger('click');
	$('#allitems-button').show();
  $("#min_price").val(0);
  $("#max_price").val(parseInt(s));
  $('.aboutusmenucontainer').hide();
	$('#allitems-button').show();
  $('.dropdownn-content').toggle();
  $('#under' + s + '-button').show();
  $('#under' + s + '-button').trigger('click');
  $('.postheader').hide();
	$('.grid').removeClass('hidden');
	$('#all-items').removeClass('hidden');
  $('#products-header').show();
  if(s == '') {
    $('#products-header').text('All Items');
    $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  } else {
    $('#products-header').text("All Items");
    $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  }
  $('.grid').isotope();
}

function showNoItems() {
  $('.noItems').show();
  $('.cantfind').hide();
}
function removeNoItems() {
  $('.noItems').hide();
  $('.cantfind').show();

}

var filterFns = {
  numberGreaterThan200: function() {
    var number = $( this ).find('.price').text().split('$');
    return ((parseInt( number[0], 10 ) >= 200) || (parseInt(number[number.length-1], 10) >= 200));
  },
  numberBetween100and200: function() {
    var number = $( this ).find('.price').text().split('$');
    return ((parseInt( number[0], 10 ) >= 100 && parseInt( number[0], 10 ) < 200) || (parseInt(number[number.length-1], 10) < 200 && parseInt(number[number.length-1], 10) >= 100));
  },
  numberLessThan25: function() {
    var number = $( this ).find('.price').text().split('$');
    return (parseInt( number, 10 ) < 25);
  },
  plzwork: function() {
    var min = $("#min_price").val();
    var max = $("#max_price").val();
    var price = $( this ).find('.price').text().split('$');
    return ((parseInt( price[0], 10 ) > min && parseInt( price[0], 10 ) < max) || (parseInt( price[price.length-1], 10 ) > min && parseInt( price[price.length-1], 10 ) < max));
  },

};



// store filter for each group
var filters = {};
var qsRegex;

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  getSortData: {
    price: function(itemElem) {
       var price = $( itemElem ).find('.price').text().slice(2);
       return parseInt(price, 10);
    },
    highprice: function(itemElem) {
      var highprice = $( itemElem ).find('.price').text().split('$');
      var ans = highprice[highprice.length-1];
      return parseInt(ans, 10);
    }
  },
  filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {

      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return searchResult && isMatched;
  }
});

$('#dropbtn').on( 'click', function() {

    // reset filters
    $('.dropdownn-content').toggle();
  	$('.quicksearch').val('');
    $("#min_price").val(0);
    $("#max_price").val(3000);
    filters = {};
    $('.grid').isotope({filter: function() {

      var isMatched = true;
      var $this = $(this);

      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      for ( var prop in filters ) {
        var filter = filters[ prop ];
        // use function if it matches
        filter = filterFns[ filter] || filter;
        // test each filter
        if ( filter ) {
          isMatched = isMatched && $(this).is( filter );
        }
        // break if not matched
        if ( !isMatched ) {
          break;
        }
      }
      return isMatched;
    }});
});


$('.type-button').on( 'click', function() {
  var $this = $(this);
  $('.quicksearch').val('');

  $("#slider-range").slider({
    values: [0, 3000]
  });
  $("#min_price").val(0);
  $("#max_price").val(3000);

  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // arrange, and use filter fn
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return isMatched;
  }});
  $('#products-header').text($this.text());
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}
});

$('.price-button').on( 'click', function() {
  var $this = $(this);
  $('.quicksearch').val('');

  $("#slider-range").slider({
    values: [0, $this.val()]
  });
  $("#min_price").val(0);
  $("#max_price").val($this.val());

  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // arrange, and use filter fn
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return isMatched;
  }});
  $('#products-header').text("All Items");
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}
});

$('.type-select').on( 'change', function() {
  // get filter value from option value
  var $this = $(this);
  $('.quicksearch').val('');
  $("#min_price").val(0);
  $("#max_price").val(3000);
  // get group key
  var filterGroup = $this.attr('data-filter-group');
  filters[ filterGroup ] = $this.context.value;
  // use filterFn if matches value
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return isMatched;
  }});
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');

  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}

});
$('.price-select').on( 'change', function() {
  // get filter value from option value
  var $this = $(this);
  // get group key
  var filterGroup = $this.attr('data-filter-group');
  filters[ filterGroup ] = $this.context.value;
  // use filterFn if matches value
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    if($('.type-select').val() != '') {
      return isMatched;
    } else {
      return searchResult && isMatched;
    }
  }});
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');

  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}

});
$('.sort-select').on( 'change', function() {
  var $this = $(this);
  if ($this.val() == "sortPriceAsc()") {
    sortPriceAsc();
  }
  if ($this.val() == "sortPriceDes()") {
    sortPriceDes();
  }
  if ($this.val() == "") {
    $grid.isotope({ sortBy : 'original-order' });
  }

});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    if($( this ).is('.is-checked.sortButton')) {
      $( this ).removeClass('is-checked');
      $grid.isotope({ sortBy : 'original-order' });
    } else {

    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
    }
  });
});

var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return searchResult;
  }});
  $('#products-header').text('Search: '+ $('.quicksearch').val());
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');
  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}
}) );

function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
function sortPriceAsc() {
  $('.grid').isotope({sortBy: 'price', sortAscending: true});
}
function sortPriceDes() {
  $('.grid').isotope({sortBy: 'highprice', sortAscending: false});
}

$('.price-range-field').on( 'change', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = 'size';
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // arrange, and use filter fn
  $grid.isotope({filter: function() {

    var isMatched = true;
    var $this = $(this);

    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter =  filterFns[ filter] || filter;

      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    if($('.type-buttons').find('.is-checked').val() != 'allitems') {
      return isMatched;
    } else {
      return searchResult && isMatched;
    }
  }});
  $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');

  if ( $grid.data('isotope').filteredItems.length == 0) {
    showNoItems();
  } else {removeNoItems();}
});

$("#min_price,#max_price").on('change', function () {
  var min_price_range = parseInt($("#min_price").val());
  var max_price_range = parseInt($("#max_price").val());
  if (min_price_range > max_price_range) {
    $('#max_price').val(min_price_range);
  }
  $("#slider-range").slider({
    values: [min_price_range, max_price_range]
  });
});


$("#min_price,#max_price").on("paste keyup", function () {
  var min_price_range = parseInt($("#min_price").val());
  var max_price_range = parseInt($("#max_price").val());
  if(min_price_range == max_price_range){
    max_price_range = min_price_range + 100;
    $("#min_price").val(min_price_range);
    $("#max_price").val(max_price_range);
  }
  $("#slider-range").slider({
    values: [min_price_range, max_price_range]
  });

});


$(function () {
  $("#slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 3000,
    values: [0, 3000],
    step: 1,

    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }

      $("#min_price").val(ui.values[0]);
      $("#max_price").val(ui.values[1]);

      var $this = $(this);
      // get group key
      var $buttonGroup = $this.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $this.attr('data-filter');
      // arrange, and use filter fn
      $grid.isotope({filter: function() {

        var isMatched = true;
        var $this = $(this);

        var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
        for ( var prop in filters ) {
          var filter = filters[ prop ];
          // use function if it matches
          filter =  filterFns[ filter] || filter;

          // test each filter
          if ( filter ) {
            isMatched = isMatched && $(this).is( filter );
          }
          // break if not matched
          if ( !isMatched ) {
            break;
          }
        }
        if($('.type-buttons').find('.is-checked').val() != 'allitems') {
          return isMatched;
        } else {
          return searchResult && isMatched;
        }
      }});
      $('.numberofitems').text(' (' + $grid.data('isotope').filteredItems.length + ')');

      if ( $grid.data('isotope').filteredItems.length == 0) {
        showNoItems();
      } else {removeNoItems();}


    }
  });

  $("#min_price").val($("#slider-range").slider("values", 0));
  $("#max_price").val($("#slider-range").slider("values", 1));

});
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(o).i(4(){$("p").q(\'<r t="u" m="9/3-6-0.9"/>\');s a="";$("#3-0").c(4(){$("#3-6-0 #0").g()});$(h).f(4(){$("#3-6-0 #0").j("k")});$("#0 a.l").c(4(){d(a!=""){$("#"+a).n("a").e("7");$("#"+a).b("8")};d(a==$(1).5("2")){$("#"+$(1).5("2")).b("8");$(1).e("7");a=""}v{$("#"+$(1).5("2")).w("8");a=$(1).5("2");$(1).x("7")};y z})});',36,36,'menu|this|name|responsive|function|attr|admin|downarrow|fast|css||slideUp|click|if|removeClass|resize|slideToggle|window|ready|removeAttr|style|submenu|href|prev|document|head|append|link|var|rel|stylesheet|else|slideDown|addClass|return|false'.split('|'),0,{}))
