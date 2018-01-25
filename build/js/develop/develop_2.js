
function initMap(Lat, Lng) {
  map = new google.maps.Map(document.getElementById('map-popup'), {
    center: {lat: Lat, lng: Lng},
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 17,
    disableDefaultUI: true
    //отключить скорлл
    // scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.892887, lng: 27.647476},
    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,
    title: 'ул. Радиальная, 40/2'
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.874978, lng: 27.498240},
    map: map,
    title: 'ул. Уманская, 54/1'
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.851920, lng: 27.676405},
    map: map,
    title: 'ул. Промышленная, 2/1'
  });

  var marker = new google.maps.Marker({
    position: {lat: 52.103287, lng: 23.736909},
    map: map,
    title: 'ул. Янки Купалы, 19'
  });

  var marker = new google.maps.Marker({
    position: {lat: 55.177250, lng: 30.231007},
    map: map,
    title: 'пр. Московский, 35'
  });

  var marker = new google.maps.Marker({
    position: {lat: 52.427485, lng: 30.909152},
    map: map,
    title: 'ул. Барыкина, 321а'
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.907464, lng: 30.296811},
    map: map,
    title: 'ул. Строителей, 21'
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.658296, lng: 23.829751},
    map: map,
    title: 'ул. Победы, 17'
  });

  var marker = new google.maps.Marker({
    position: {lat: 53.163713, lng: 29.197941},
    map: map,
    title: 'ул. Ульяновская, 40'
  });

}

// function newLocation(newLat,newLng) {
// 	map.panTo(newLat, newLng);
// }


$(document).ready(function(){

	var map, Lat, Lng;
	
	$('.width').styler();

	var top = $('.wrap-buy').offset().top-150;
	$(window).scroll(function(){
		if ($(window).scrollTop() >= top) {
			$('.step1, .step2, .step3').addClass('active');
		} else if ($(window).scrollTop() < top-200) {
			$('.step1, .step2, .step3').removeClass('active');
		}
	});

	$('.wrapper-catalogue .see-more').click(function(e){
		e.preventDefault();
		$('.wrapper-catalogue .wrap-tires .tires-item').css('display', 'block');
		$(this).css('display', 'none');
	});

	$('.flip').fancybox({
	    openEffect : 'fade',
	    closeEffect : 'fade',
	    openMethod: 'horizontalflipIn',
        closeMethod: 'horizontalflipOut',
	    autoSize:true,
	    width : 800,
	    height : 884,
	    maxWidth : '100%',
	    wrapCSS:'wrap-map',
	    'closeBtn' : true,
	    fitToView:true,
	    autoCenter: true,
	    padding:'0',
	    afterShow: function(){
            initMap(Lat, Lng);
        },
	});

	$('.flip').click(function(){
		Lat = parseFloat($(this).data('lat'));
        Lng = parseFloat($(this).data('lng'));
	});

	$('.slit').fancybox({
	    openEffect : 'fade',
	    closeEffect : 'fade',
	    openMethod: 'slitIn',
        closeMethod: 'slitOut',
	    autoSize:true,
	    width : 800,
	    height : 884,
	    maxWidth : '100%',
	    wrapCSS:'size-popup',
	    'closeBtn' : true,
	    fitToView:true,
	    autoCenter: true,
	    padding:'0'
	});

  $('#width').styler();
  $('#profile').styler();
  $('#diameter').styler();
  $('.tel').mask("+999 (99) 999-99-99");
});

$(window).load(function(){
  setInterval(function(){
    $('.discount p').toggleClass('active');
  }, 500);
});

$(window).resize(function(){

});