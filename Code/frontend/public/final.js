setTimeout(function() {
	jQuery("#preloader").remove(),
	$("#main-wrapper").addClass("show");
}, 1500);


"use strict"

var dlabSettingsOptions = {};

function getUrlParams(dParam) 
	{
		var dPageURL = window.location.search.substring(1),
			dURLVariables = dPageURL.split('&'),
			dParameterName,
			i;

		for (i = 0; i < dURLVariables.length; i++) {
			dParameterName = dURLVariables[i].split('=');

			if (dParameterName[0] === dParam) {
				return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
			}
		}
	}

(function($) {
	
	"use strict"
	
	var body = $('body');
	var direction =  getUrlParams('dir');
	
	dlabSettingsOptions = {
			typography: "poppins",
			version: "light",
			layout: "vertical",
			primary: "color_1",
			headerBg: "color_3",
			navheaderBg: "color_3",
			sidebarBg: "color_1",
			sidebarStyle: "full",
			sidebarPosition: "fixed",
			headerPosition: "fixed",
			containerLayout: "full",
			direction: 'ltr',
		};
		
	
	new dlabSettings(dlabSettingsOptions); 

	jQuery(window).on('resize',function(){
        /*Check container layout on resize */
		///alert(dlabSettingsOptions.primary);
        dlabSettingsOptions.containerLayout = $('#container_layout').val();
        /*Check container layout on resize END */
        
		new dlabSettings(dlabSettingsOptions); 
	});
	
	if(direction == 'rtl' || body.attr('direction') == 'rtl'){
        direction = 'rtl';
			jQuery('.main-css').attr('href','css/style-rtl.css');
		}else{
			direction = 'ltr';
			jQuery('.main-css').attr('href','css/style.css');
		}
	
})(jQuery);
/* Cookies Function */
function setCookie(cname, cvalue, exhours) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes */
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

function getCookie(cname) 
	{
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

function deleteCookie(cname) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (1)); // 1/1000 second
		var expires = "expires="+ d.toString();
		//document.cookie = cname + "=1;" + expires + ";path=/";
		document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"+";path=/";
	}

function deleteAllCookie(reload = true)
	{
		jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				deleteCookie(optionKey);
		});
		if(reload){
			location.reload();
		}
	}
 	
/* Cookies Function END */	





function chartTheme(){
	if($('body').attr('data-theme-version') == "light"){
		return "Light";
	}else{
		return "Dark";
	}
}
function tradingfuture(){
  new TradingView.widget(
	{
	  "width": "100%",
	  "height": 516,
	  "symbol": "BITSTAMP:BTCUSD",
	  "interval": "D",
	  "timezone": "Etc/UTC",
	  "theme": chartTheme(),
	  "style": "1",
	  "locale": "en",
	  "toolbar_bg": "#f1f3f6",
	  "enable_publishing": false,
	  "withdateranges": true,
	  "hide_side_toolbar": false,
	  "allow_symbol_change": true,
	  "show_popup_button": true,
	  "popup_width": "1000",
	  "popup_height": "650",
	  "container_id": "tradingview_85dc0"
	}
  );
}

var element = document.querySelector('body');
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if(mutation.attributeName === "data-theme-version"){
			tradingfuture();
		}
	});
});
observer.observe(element, {
	attributes: true
});

jQuery(window).on('load',function(){
	setTimeout(function(){
		tradingfuture();
	}, 1000); 
	
});
