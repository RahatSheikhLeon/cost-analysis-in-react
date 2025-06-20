<?php
/**
 * Plugin Name: Food Expense Tracker
 * Description: A Gutenberg block to track food expenses using React.
 * Version: 1.0.0
 * Author: Your Name
 */

defined('ABSPATH') || exit;

// অটোমেটিক ডিপেন্ডেন্সি লোড করুন
function food_expense_tracker_register_block() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        'food-expense-tracker-block',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type('food-expense-tracker/block', [
        'api_version' => 2,
        'editor_script' => 'food-expense-tracker-block',
        'render_callback' => 'food_expense_tracker_render_callback'
    ]);
}
add_action('init', 'food_expense_tracker_register_block');

// ফ্রন্টএন্ড রেন্ডারিং (save.js থেকে HTML রিটার্ন করবে)
function food_expense_tracker_render_callback($attributes) {
    return '<div id="food-expense-tracker-root"></div>';
}