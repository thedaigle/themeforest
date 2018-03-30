<?php
/**
 * @author Stylish Themes
 * @since 1.0.0
 */

// File Security Check
if ( ! defined( 'ABSPATH' ) ) { exit; }

$prefix = Haze_Meta_Boxes::get_instance()->prefix;
global $clx_data;

get_header(); ?>

    <!-- ================================================== -->
    <!-- =============== START BREADCRUMB ================ -->
    <!-- ================================================== -->
    <div class="container">
        <div class="row">
            <div class="breadcrumb-container clearfix">

                <!-- BREADCRUMB TITLE -->
                <h1><?= $clx_data['albums-label']; ?></h1>

                <!-- BREADCRUMB -->
                <?= zen_breadcrumbs(); ?>

                <!-- POSTS NAVIGATION -->
                <?php clx_album_single_nav(get_the_ID()); ?>

            </div>
        </div>
    </div>
    <!-- ================================================== -->
    <!-- =============== END BREADCRUMB ================ -->
    <!-- ================================================== -->

    <!-- ================================================== -->
    <!-- =============== START CONTENT-CONTAINER ================ -->
    <!-- ================================================== -->
    <div class="container">
        <div class="row">
            <div class="content-container">
                <div class="content-container-inner clearfix">

                <?php if ( have_posts() ) : ?>

                    <?php while ( have_posts() ) : the_post(); ?>

                        <?php
                            $album_type = rwmb_meta("{$prefix}album_template");
                            get_template_part( 'lib/templates/album/single', $album_type );
                        ?>

                    <?php endwhile; ?>

                <?php else : ?>

                    <?php
                    /* Get the none-content template (error) */
                    get_template_part( 'content', 'none' );
                    ?>

                <?php endif; ?>

                </div>
            </div>
        </div>
    </div>
    <!-- ================================================== -->
    <!-- =============== END CONTENT-CONTAINER ================ -->
    <!-- ================================================== -->

<?php get_footer(); ?>