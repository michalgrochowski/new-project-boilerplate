# new-project-boilerplate

This is my boilerplate for new projects. If you want to use it, you'll need:
- Node.js - https://nodejs.org/en/,
- Gulp - after installing Node.js, run command line and type <code>npm install gulp -g</code>,
- Any text editor or IDE,
- Any browser.

When you set up all of the above, clone or download this repository and in your command line put the path to your directory with all the files. Then, type <code>npm install</code> in your command line, so npm can install all required packages. you can also type <code>npm update</code> to check if the packages are up to date.

After that you will be able to use 2 main tasks:
- typing <code>gulp</code> will start "dev" task, which includes sass to css converter, watcher for changes in your files and browserSync, which reloads your page everytime you make a change.
- typing <code>gulp build</code> will start "building" task, which will create a "dist" directory with all the files ready to deploy to your server - minified and concatenated JS, uglified and auto-prefixed CSS, compressed images and of course your index.html.

Also included are normalize.css and latest jQuery.

With this boilerplate I recommend using Scss and BEM, but you are free to change whatever you want. There are already few Scss rules by default so you can build on that, but feel free to delete everything and start from scratch hovewer you want.

Enjoy!
