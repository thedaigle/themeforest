<?php
/**
 * The template for displaying posts in the Video post format
 *
 */
?>

	<article id="post-<?php the_ID(); ?>" <?php post_class('post-entry clearfix'); ?> role="article">
	
		<?php 
		mnky_post_links();
		
		if( get_post_meta( get_the_ID(), 'video_embed', true ) ) { 
			global $wp_embed;
			$video_w = ( isset($content_width) ) ? $content_width : 500;
			$video_h = $video_w/1.61; //1.61 golden ratio
			$embed = $wp_embed->run_shortcode('[embed width="'.$video_w.'"'.$video_h.']'.wp_kses_post(get_post_meta( get_the_ID(), 'video_embed', true )).'[/embed]');
				
			echo '<div class="post-preview"><div class="post-video-wrapper">'. $embed .'</div></div>';
		} ?>

		<?php if ( !is_single() ) : ?>
			<header class="post-entry-header">
				<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'craftsman' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
				<?php mnky_post_meta(); ?>
			</header><!-- .entry-header -->
		<?php endif; ?>

		<?php if( is_single() ) : ?>
			<div class="entry-content">
				<?php
				the_content();
				wp_link_pages( array(
					'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'craftsman' ) . '</span>',
					'after'       => '</div>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
				) );
				?>
			</div><!-- .entry-content -->
		<?php elseif( is_search() ) : ?>
			<div class="entry-summary">

			</div><!-- .entry-summary -->		
		<?php else : ?>
			<div class="entry-summary">
				<?php if ( ot_get_option('content_type') != 'excerpt') : ?>
					<?php 
					$more_link_text = __('Read more','craftsman');
					the_content($more_link_text);
					?>
				<?php else : ?>
					<?php the_excerpt(); ?>
				<?php endif; ?>
			</div><!-- .entry-summary -->
		<?php endif; ?>	

		<?php mnky_post_meta_footer(); ?>

	</article><!-- #post-<?php the_ID(); ?> -->