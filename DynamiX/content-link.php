<?php
/**
 * The template for displaying posts in the Link Post Format on index and archive pages
 *
 * @package WordPress
 */
 
/* :: Get Custom Field Data
--------------------------------------------- */

include(NV_FILES .'/inc/classes/post-fields-class.php');

/* :: / ------------------------------------- */ ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    	
        <div class="article-row row">
        
			<?php if( $NV_arhpostpostmeta == 'display' && $NV_postmetaalign != 'post_title' )
            { ?>   
                <aside class="post-metadata columns two">
                <?php include(NV_FILES .'/inc/classes/metadata-class.php'); ?>
                </aside><!-- /post-metadata --> 
            <?php
            } ?>
            
            <header class="post-titles <?php echo $columns; ?>">
                
                <?php 
                include(NV_FILES .'/inc/classes/post-title-class.php'); // Style Post Titles
                
                if( $NV_arhpostpostmeta == 'display' && $NV_postmetaalign == 'post_title' )
                {
                    include(NV_FILES .'/inc/classes/metadata-class.php');
                    
                } ?>
                
            </header><!-- / .post-titles -->
            
            <section class="entry <?php echo $columns; ?>">
                <?php if ( is_search() ) : // Only display Excerpts for Search ?>
                    <?php the_excerpt(); ?>
                <?php else : ?>
                    <?php do_shortcode(the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'themeva' ) )); ?>
                    <?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'themeva' ) . '</span>', 'after' => '</div>' ) ); ?>
                <?php endif; ?>
            </section><!-- / .entry -->
        
        </div>
    
		<?php 
    	// Check if placed within a widget
        if( $NV_is_widget != true )
		{ 
			include(NV_FILES .'/inc/classes/post-footer-class.php');	 
		} ?>
  
	</article><!-- #post-<?php the_ID(); ?> -->