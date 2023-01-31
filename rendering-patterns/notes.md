How and where to fetch and render content is key to the perf of the app.

<b>Web Vitals</b> are ways to measure how well a website performs. 
1. TTB: time to first byte. Time it takes for client to receive first byte of page content
2. FCP: first contentful paint. Time it takes to render the first piece of content after navigation
3. LCP: largest contentful paint. Time it takes to load + render page's main content
4. TTI: Time to interactive. Time from from the page starts loading to whne it's reliably responding to user input quickly
5. CLS: cumulative layout shift. Measures visual stability to avoid unexpected layout shift
6. FIP: First input delay. Time from when the user interacts with the page to the time when the event handlers are able to run

<b>Glossary</b>
 - Compiling: Converting JavaScript into native machine code - Execution time: The time it takes to execute the previously fetched, parsed, and compiled data
 - Hydration: Attaching handlers to a DOM node whose HTML contents were server-rendered, making the component interactive
 - Idle: The browser's state when it's not performing any action 
 - Loading time: The time it takes to fetch the data from the server 
 - Main thread: The thread on which the browser executes all the JavaScript, performs layout, reflows, and garbage collection 
 - Parsing: Converting an HTML source into DOM nodes, and generating an AST 
 - Processing: Parsing, compiling, and executing the previously fetched data 
 - Processing time: The time it takes to parse and compile the previously fetched data


<b>Client side rendering</b> - render UI in the browser
1. client requests HTML from server
2. server reponds with barebones html
3. browser parses and renders HTML
4. client requests and downloads javascript (via `script` tag)
5. browser executes js, renders content

So you need 2 files: one that has barebones html with an element js can append content to, and a js file, which contains methods to update the DOM tree and dynamically render data.

Pros:
 - interactivity. Rendered content is instantly interactive. The js bundle can directly add event listeners to DOM nodes and uses are never left with a visible but non interactive page
 - single server round trip. The entire web app is loaded on first request

Cons:
 - large bundle size = longer it takes browser to download and execute the js before the first content is visible
 - SEO. Large bundles/waterfall of api requests may result in content not being rendered fast enought for a crawler to index it.

<b>Static rendering</b> - deliver pre-rendered html content that was generated when the site was built.
1. client requests HTML from server
2. server returns requested HtML with all of the elements included
3. browser parses and renders content
4. client requests JS bundle from the server
5. browser hydrates elements (binds event listeners to static html)

When you use react out of the box, it will always default to client side rendering.
 - but you can use next.js to statically render

Pros:
 - cacheability. Pre-rendered HTML files can be cached/served by a global cdn
 - seo
 - availability. always online, even when your backend db goes down
 - load. the db or api won't need to be hit on every request
Cons:
 - dynamic data. If a statically generated page needs dynamic content, for example from an external data source, it needs to fetch this client-side. This can result in a long LCP, and higher server costs.