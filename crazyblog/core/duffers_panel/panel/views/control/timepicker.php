<?php if ( !$is_compact ) echo VP_View::instance()->load( 'control/template_control_head', $head_info ); ?>

<input type="text" data-id="timepicker" name="<?php echo esc_attr( $name ); ?>" class="vp-input vp-timepicker input-large" value="<?php echo esc_attr( $value ); ?>" />
<?php $custom_script = 'jQuery(document).ready(function () {
        sh_timepicker();
    });';
    wp_add_inline_script('vp-option', $custom_script);
?>
<?php
if ( !$is_compact )
	echo VP_View::instance()->load( 'control/template_control_foot' );?>