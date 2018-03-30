<?php
/* ------------------------------------------------------------------------ */
/* Theme Menus */
/* ------------------------------------------------------------------------ */

function oi_menu() { 
  register_nav_menus(
    array(
      'main_menu' => 'Main Navigation',
      'secondary_menu' => 'Footer Navigation',
	  'topline_menu' => 'Top Line Navigation',
    )
  );
  
}
add_action( 'init', 'oi_menu' );

function is_blog() {
	global $post;
	$posttype = get_post_type( $post );
	return ( ( $posttype == 'post' ) && ( is_home() || is_single() || is_archive() || is_category() || is_tag() || is_author() ) ) ? true : false;
}

function fix_blog_link_on_cpt( $classes, $item, $args ) {
	if( !is_blog() ) {
		$blog_page_id = intval( get_option('page_for_posts') );
		if( $blog_page_id != 0 && $item->object_id == $blog_page_id )
			unset($classes[array_search('current_page_parent', $classes)]);
	}
	return $classes;
}
add_filter( 'nav_menu_css_class', 'fix_blog_link_on_cpt', 10, 3 );

function additional_active_item_classes($classes = array(), $menu_item = false){
global $wp_query;

if(in_array('current-menu-item', $menu_item->classes)){
    $classes[] = 'current-menu-item';
}

if ( $menu_item->post_name == 'portfolio' && is_post_type_archive('portfolio') ) {
    $classes[] = 'current-menu-item';
}

if ( $menu_item->post_name == 'portfolio' && is_singular('portfolio') ) {
    $classes[] = 'current-menu-item';
}


return $classes;
}
add_filter( 'nav_menu_css_class', 'additional_active_item_classes', 10, 2 );

?>