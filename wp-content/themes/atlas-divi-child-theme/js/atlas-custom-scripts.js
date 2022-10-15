// Projects bg color change homepage
	
  jQuery(document).ready(function($) {
    jQuery('.scroll-trigger-waypoint-begin').waypoint(function() {
       jQuery('.section-with-white-bg').toggleClass('section-with-color-bg');  
    }, {offset: '25%'});    
  });
  
  jQuery(document).ready(function($) {
    jQuery('.scroll-trigger-waypoint-end').waypoint(function() {
       jQuery('.section-with-white-bg').toggleClass('section-with-color-bg');
  
    }, {offset: '25%'});    
  });

	
// Projects text color change homepage
 jQuery(document).ready(function($) {
    jQuery('.scroll-trigger-waypoint-begin').waypoint(function() {
       jQuery('.text-black-projects').toggleClass('text-white-projects');  
    }, {offset: '25%'});    
  });
  
  jQuery(document).ready(function($) {
    jQuery('.scroll-trigger-waypoint-end').waypoint(function() {
       jQuery('.text-black-projects').toggleClass('text-white-projects');
  
    }, {offset: '25%'});    
  });	


// collpasing mobile menu

jQuery(function($) {
    $(document).ready(function() {
        $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children").append('<a href="#" class="mobile-toggle-icon"></a>');
        $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle-icon, ul.et_mobile_menu li.page_item_has_children .mobile-toggle-icon').click(function(event) {
            event.preventDefault();
            $(this).parent('li').toggleClass('mobile-toggle-open');
            $(this).parent('li').find('ul.children').first().toggleClass('visible');
            $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
        });
        iconFINAL = 'P';
        $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children').attr('data-icon', iconFINAL);
        $('.mobile-toggle-icon').on('mouseover', function() {
            $(this).parent().addClass('active-toggle');
        }).on('mouseout', function() {
            $(this).parent().removeClass('active-toggle');
        })
    });
});