<?php global $pmc_data; $postmeta = get_post_custom(get_the_id()); if(isset($postmeta["link_post_url"][0])){	$link = $postmeta["link_post_url"][0];} else {	$link = "#";}?>	<div class="entry">		<div class = "meta">			<div class="topLeftBlog">					<h2 class="title"><a href="<?php echo esc_url($link)  ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>								<div class = "post-meta">					<div class="post-icon"><i class="fa fa-link"></i></div>					<?php echo get_the_author_link() ?>				</div>				</div>			<div class="blogContent">				<div class="blogcontent"><?php the_excerpt(); ?> </div>				<a class="blogmore" href="<?php echo esc_url($link)  ?>"><?php _e('Check out this link','pmc-themes'); ?> </a>			</div>		</div>			</div>	