<?php header('Content-type: text/javascript'); ?>jQuery(document).ready(function( $ ) { $("#slides").slides({ preload: true, preloadImage: "http://127.0.0.1:8080/wordpress/wp-content/themes/equilibrium/images/layout/loading.gif", play: 0, pause: 2500, slideEasing: 'easeOutSine', fadeEasing: 'easeOutSine', hoverPause: true, container: 'slides-container', pagination: true, generatePagination: true, fadeSpeed: 350, slideSpeed: 350, autoHeight: true, autoHeightSpeed: 350, effect: "slide", crossfade: true, randomize: false, start: 1});});