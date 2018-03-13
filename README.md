# new-project-boilerplate

This is my simple boilerplate for new projects. If you want to use it, you'll need:
- Node.js - https://nodejs.org/en/,
- Gulp - after installing Node.js, run command line and type <code>npm install gulp --g</code> (so you can use it globally),
- Any text editor or IDE,
- Any browser.

When you set up all of the above, clone or download this repository and in your command line put the path to your directory with all the files. Then, type <code>npm install</code> in your command line, so npm can install all required packages. You can also type <code>npm update</code> to make sure that the packages are up to date.

After that you will be able to use 2 main tasks:
- typing <code>gulp</code> will start "dev" task, which includes SCSS to CSS converter, watcher for changes in your files and browserSync, which reloads your page everytime you make a change.
- typing <code>gulp build</code> will start "building" task, which will create a "dist" directory with all the files ready to deploy to your server - concatenated, uglified, and transpiled to ES5 JS, minified, concatenated and auto-prefixed CSS, compressed images and of course your index.html with timestamps added to your CSS and JS files. Also it will move all the favicons, manifest.json and serviceworker.js with updated cache name.

Also included are normalize.css, latest jQuery and basic serviceworker.js with registeration in main.js so you can easily make a PWA.

#### Important note - since v2.3 you have to manually replace "cachename-" in the <code>gulpfile.js</code> (in the 'serviceWorkerCache' task at the bottom) and <code>serviceworker.js</code> ('CACHE_NAME' variable at the top) to your desired cache name - they obviously have to match to make it work.

With this boilerplate I recommend using SCSS with Flexbox and BEM, but you are free to change whatever you want. There are already few SCSS rules and mixins by default, so you can build on that, but feel free to delete everything and start from scratch however you want. There is also a working nav/menu component with basic scripts for mobile version.

You can find some more info in the index.html comments.

##### Included Scss mixins:
- <code>flex-row</code> - display: flex and flex-direction: row.
- <code>flex-column</code> - display: flex and flex-direction: column.
- <code>flex-center-row</code> - display: flex, justify-content: center, align-items: center and flex-direction: row.
- <code>flex-center-column</code> - display: flex, justify-content: center, align-items: center and flex-direction: column.
- <code>mq-max</code> - media query mixin - input a max-width in parentheses to add a new media rule.
- <code>mq-min</code> - media query mixin - input a min-width in parentheses to add a new media rule.
- <code>mq-minmax</code> - media query mixin - input a min-width as first argument in parentheses and max-width as second to add a new media rule.
- <code>v-center</code> - used to center vertically with absolute positioning.
- <code>one-third</code> - to make elements width almost 33%.

### Enjoy!

License: MIT
