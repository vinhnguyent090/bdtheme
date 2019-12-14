$(document).ready(function() {
	$('header').prepend(frappe.render_template("logo"));
	$('.main-section').append(frappe.render_template("main-sidebar"));
	$('header').addClass('main-header');
	$('header .navbar').removeClass('navbar-fixed-top');
	$('body').addClass('skin-blue sidebar-mini sidebar-collapse');	
	$('#body_div').addClass('content-wrapper');	
	
	vntheme.set_user_background();
	
});

frappe.provide("bdtheme");

// add toolbar icon
$(document).bind('toolbar_setup', function() {
	frappe.app.name = "bdoop Erp";
	$('.navbar-home').html(frappe._('Home'));

});

bdtheme.set_user_background = function(src, selector, style){
	if(!selector) selector = "#page-desktop";
	if(!style) style = "Fill Screen";
	if(src) {
		if (window.cordova && src.indexOf("http") === -1) {
			src = frappe.base_url + src;
		}
		var background = repl('background: url("%(src)s") center center;', {src: src});
	} else {
		var background = "background-color: #FFFFFF;";
	}

	frappe.dom.set_style(repl('%(selector)s { \
		%(background)s \
		%(style)s \
	}', {
		selector:selector,
		background:background,
		style: ""
	}));
}

frappe.templates["logo"] = '<a href="/desk" class="logo">'
+     ' <span class="logo-mini"><b>bd</b></span>'
+'      <span class="logo-lg"><b>bdoop</b></span>'
+'    </a>';