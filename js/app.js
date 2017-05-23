var offset = 70;
var duration = 200;
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset && $(window).width() > 767) {
        jQuery('.sticky-header').fadeIn(duration);
    } else {
        jQuery('.sticky-header').fadeOut(duration);
    }
});

var colors = ["Server", "Microsoft Windows Server 2013", "MCSA Windows Server 2010 Management", "MS6292 Server Security", "MSEX01 Citrix Server Troubleshooting", "MS6425 VMWare Server 2012 Implementation Guide", "Serializing arrays in C#"];
 
$('#hd__search').typeahead({source: colors, minLength: 3});


$(document).on('click',function(e)
{
    var container = $(".outer--mobile-header");

    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        
        $('.collapse').collapse('hide');
    }
});