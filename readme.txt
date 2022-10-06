=== Simple IDE ===
Contributors: motekar
Tags: theme editor, plugin editor, code editor, file editor, file manager, ide, classicpress
Stable tag: 1.0
Requires PHP: 5.5
Requires at least: 4.9
Tested up to: 6.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Code editor, file editor & file manager with auto-complete for WP & PHP functions with syntax highlighting & automatic backups.

== Description ==

Simple IDE is a fork of WPide 2.6. It is a WordPress code editor and file editor with automatic backups. You can edit any files in your wp-content folder, not just plugins and themes. Code completion will help you remember your WordPress/PHP commands providing function reference along the way. Edit multiple files with the tabbed editor.

This plugin would not be possible without the <a href="http://ace.ajax.org/">Ajax.org Cloud9 Editor</a> which is the embedded code editor that powers much of the functionality.

= Current Features: =

*   Syntax highlighting
*   PHP syntax checking before saving to disk to try and banish white screen of death after uploading invalid PHP
*   Line numbers
*   Find+replace
*   Code autocomplete for WordPress and PHP functions along with function description, arguments and return value where applicable
*   Colour assist - a colour picker that only shows once you double click a hex colour code in the editor. You can also drag your own image into the colour picker to use instead of the default swatch (see other notes for info).
*   Automatic backup of every file you edit. (one daily backup and one hourly backup of each file stored in plugins/simple-ide/backups/filepath)
*   File tree allowing you to access and edit any file in your wp-content folder (plugins, themes, uploads etc)
*   Use the file browser to rename, delete, download, zip and unzip files (so you can download a zipped version of your whole theme for example)
*   Create new files and directories
*   Highlight matching parentheses
*   Code folding
*   Auto indentation
*   Tabbed interface for editing multiple files (editing both plugin and theme files at the same time)
*   Using the WordPress filesystem API

= Feature ideas and improvements: =

*   Improve the code autocomplete command information, providing more information on the commands, adding links through to the WordPress codex and PHP.net website for further info.
*   Create an admin panel to choose between syntax highlighting themes and turn on/off other Ajax.org Cloud9 functionality
*   Better automated file backup process
*   Templates/shortcuts for frequently used code snippets, maybe even with an interface to accept variables that could be injected into code snippet templates.
*   Integration with version control systems such as Git

Icon based on <a href="https://thenounproject.com/search/?q=code&i=909303">code</a> by Pravin Unagar.

== Installation ==

1. Upload the `simple-ide` folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Access Simple IDE by clicking the Simple IDE menu item in your main administration menu

== Frequently Asked Questions ==

= What is in place to stop me from breaking my website - "The white screen of death" =

When you edit a PHP file, before that file is saved to the filesystem it is syntax checked to make sure there isn't something obvious that will break your site.

Every file that you edit is backed up before your first save to the filesystem and then on subsequent saves Simple IDE will try and make a backup. It will save a maximum of 1 backup per hour to the server.

As you edit or more specifically save PHP files the restore button will display which will allow you to restore the most recent backup.

If your WordPress install is fully functional then you can use the file tree to browse all of your backed up files (plugins/simple-ide/backups..), if your WordPress install isn't responding then restoring the file using the restore button or directly via FTP/SSH is the only way.

The backed up PHP files cannot be accessed/restored from the web directly without the 40 digit nonce/key so should not pose a security concern.

= Can I override the default file permissions when creating files/directories on the local filesystem =

Yes you can using the below WordPress settings in wp-config.php which will effect files created with Simple IDE and files added during the WordPress upgrade process.

define('FS_CHMOD_DIR', (0755 & ~ umask()));
define('FS_CHMOD_FILE', (0644 & ~ umask()));

= Whenever I try to edit an image the application says that it could not load the image =
Either the image contains no image data (its a new empty file) or the image is not accessible to the image editor. Your images need to be accessible to the web. i.e. if you're developing a site on your local machine behind a router/firewall your local web server could not be accessible to the web.

== Screenshots ==

1. Editor view, showing line numbers and syntax highlighting.
2. Image editor in action
3. Showing auto complete, function reference and file tree.
4. Default colour picker image

== Changelog ==

= 1.0 =
* Initial release.

== Other Feature notes ==

= You can modify the filesystem root using the 'simple_ide_filesystem_root' filter =

So to restrict editing to the Twenty Eleven theme only you could do this:

add_filter('simple_ide_filesystem_root', 'simple_ide_filesystem_root_override');
function simple_ide_filesystem_root_override($path){
    // the default path variable will be WP_CONTENT_DIR
    return $path . "/themes/twentyeleven";
}

= Colour assist =

The colour picker only shows if you double click a hex colour value in the editor (3 or 6 characters with a proceeding hash #FF0000)

The default colour picker has limited colours. You can replace this image with an image of your own by dragging and dropping a new image onto the default one (due to security reasons this can only be an image from the same domain).

Using this you can either create your own swatch of colours or just drag in your websites logo or header image.

If you close the editor any custom colour picker image will be forgotten. We maybe thing about making this persist and also make the image uploadable as well as drag+drop.

