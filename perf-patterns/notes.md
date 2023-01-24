<h2>Bundling</h2>
The file that the browser has to download and fetch only contains relevant code, to ensure the browser can quickly fetch this bundle without too much bandwidth.

<b>Bundlers</b> bundles our app together in one or multiple files
 - can also make code executable in other environments (ie browsers)
 - a bundler receives and `entry` file , from which it starts to bundle the code together
  - if we're importing modules from other files, the bundler traverses these modules in order to include them all in the bundle
  - ex: <img src="bundling.png" />
  - how the bundler creates the output file is entirely configurable
  - common bundlers = webpack, parcel, rollup

<b>Compilers</b> converts javascript/typescript code into another version of js, which could be backwards compat in older browser versions.
 - eg we <i>can</i> use a Private class in js, but not all browsers suppot it yet
 - common compiler = babel

<b>Minifiers</b> can reduce the size of a js file based on a certain config (removes comments, makes vars and function names smaller, removing whitespace, etc)
 - this results in smaller bundle size and faster execution
 - common minifiers = terser, uglify

Combination = ESBuild (a Go-based compiler, bundler, + minifier)

<h2>Practices</h2>

<b>Bundle splitting</b> is the process of creating multiple, smaller bundles rather than one large bundle
 - smaller bundles = less loading, processing, and esecution time (good for users on slow networks or low end devices)

<b>Tree Shaking</b> reduces bundle size by eliminating dead code
 - removes unused code from a js bundle (ie functions not referenced in code)