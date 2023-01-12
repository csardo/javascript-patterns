es2015 introduced built-in javascript modules.
 - module: file containg js code, can expose/hide certain values
   - promotes encapsulation-- values inside are private by default. Need to explicitly `export` to have them be accessible in other files.

When using just <b>HTML</b>, you can use modules by adding the `type="module"` attribute to the script tag:

    <script src="./math.js" type="module">

Or, when using Node, you can add `"type": "module"` to your `package.json`.