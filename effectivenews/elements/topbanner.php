<?php if (mom_option('top_banner') == 1) { ?>
<div class="top_banner">
 <div class="inner">
   <?php
    if (mom_option('top_banner_close') == 1) {
     $save_state = 'tb_save_close';
     if (mom_option('top_banner_close_save') == 1) {
       $save_state = 'tb_save_close';
     }
     echo '<a class="tob_banner_close '.$save_state.'" href="#" data-exp="7"><i class="fa-icon-remove"></i></a>';
    }
    if (mom_option('top_banner_content') == 1) {
       echo do_shortcode('[ad id="'.mom_option('top_banner_ad').'"]');
    } else {
      echo apply_filters('the_content', mom_option('top_banner_custom')); 
    }
   ?>
 </div>
</div>
 <?php } ?>