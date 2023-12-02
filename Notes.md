## Namaste React Course by Akshay Saini
# _Chapter 01 and chapter 2



## CDN (Content Delivery Network):
- **Purpose:** Efficiently delivers internet content to users globally.
- **Benefits:** Improved performance, load distribution, security, bandwidth savings, scalability, and enhanced user experience.
- **`crossorigin` Attribute:** HTML attribute specifying how the browser should handle requests for loading external resources, such as scripts and stylesheets.

## React:
- **Definition:** JavaScript library for building user interfaces, open-source, and maintained by Facebook.
- **Naming:** Chosen for its reactivity to changes in program state.

## React CDN Links:
- First link: Core React framework algorithm (`react.development.js`).
- Second link: React DOM for DOM operations (`react-dom.development.js`).

## Script Placement in HTML:
Placing script tags at the end of the body improves page load performance, allowing content to load before scripts execute.

## Emmet:
Toolkit providing shortcuts for writing HTML, CSS, and web-related code, enhancing code-writing efficiency.

## Library vs. Framework:
- **Library:** Provides specific functions for use in code.
- **Framework:** Offers a comprehensive structure and is more opinionated.

## React vs. ReactDOM:
- **React:** Core library for building UIs.
- **ReactDOM:** Renders React components into the DOM.

## React CDN Files (`react-development.js` vs. `react-production.js`):
- Development file for debugging, larger size.
- Production file optimized for performance, smaller size.


## Q: What is `NPM`?
A: npm stands for `Node Package Manager`. It is a package manager for JavaScript
`Package Installation`: npm allows developers to easily install and manage external libraries (packages) that are available in the npm registry. 
`Dependency Management`:npm automatically handles dependencies between different packages. When a package is installed, npm also installs the packages it depends on, ensuring that the project has all the necessary components.

- `npm` alternative is `yarn`

### How to initialize `npm`?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q: What is `Parcel/Webpack`? Why do we need it?
A: `Parcel/Webpack` are the Bundlers we used to make our app production ready by minifing the code, optimizing the code, cleaning the consoles etc in order to achieve that thing we use bundlers like parcel/Webpack/Vite packages or dependencies parcel is easy to config and most of all bundlers do the same job in our code.
Parcel is the beast!

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of what all files are changing at realtime via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Tree Shaking - Removing the unused code
* Minification- removing unnecessary characters like whitespaces, comments, and renaming variables to make the code more compact and improve load times.
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses the code
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration - Easy to Config
* Automatic code splitting
* Code Splitting - Breaking down the code into smaller, manageable chunks to optimize the loading of the application.

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> (with a proper file location)
    ```
    - For production build :
    ```
    npx parcel build <entry_point> (with a proper file location)
    ```

## Q: What is `.parcel-cache`?
A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q: What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

- Parcel Commands :

- For development build:
    ```
    npx parcel <entry_point> (with a proper file location)
    ```
- For production build :
    ```
    npx parcel build <entry_point> (with a proper file location)
    ```

## Q: What is difference between `dependencies` vs `devDependencies`?
A: 
## Dependencies:

- **Purpose:** Dependencies are packages that are required for the application to run in a production environment. They are essential for the application's core functionality.

- **Installation:** Dependencies are installed by default when someone installs your published package or when deploying your application.

## devDependencies:

- **Purpose:** devDependencies are packages that are only needed for development and testing purposes. They are not required for the actual execution of the application in a production environment.

- **Installation:** devDependencies are typically installed when someone is setting up the development environment or running tests. They are not included when the application is being prepared for production.




## Q: What is `Tree Shaking`?
A: `Tree shaking` in Parcel is process of removing the unwanted code that we do not use while developing the application.


## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)` means parcel is keeping the track of all the files which are updating at realtime by using the `File Watcher Algorithm` which is written in `C++` and its tell the server to reload and build 


## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - It uses FWAlgo provides real-time updates, allowing developers to see changes immediately without having to manually refresh the page.
* `File watcher algorithm` -  The file watcher is responsible for monitoring changes in the project's source code files.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files by removing code, comments etc
* `Image optimization` - Image optimization is the expensive task it but parcel does it easily.
* `Caching while development` - The bundler intelligently remembers and reuses previous build results, making the process of rebuilding your project faster and more efficient during development. This helps developers see the effects of their changes more quickly without unnecessary delays.
so the building time decreases when u refresh

## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
`node-modules` , `dict`, `parcel-cache` should into your `.gitignore` file.

This is an example of what the .gitignore file could look like:
```
# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

```


## Q: What is the difference between `package.json` and `package-lock.json`?
A: `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts
* With `caret ^` and `tidle` symbol in it.

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```


t.


## Q: Why should I not modify `package-lock.json`?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Q: What is the `dist` folder?
A: The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Q: What is `browserslist`?
A: `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.


Chapter-3


# _Assignment 03 - Laying The Foundation_

## 1: What is `JSX`?

- JSX is a syntax extension to JavaScript. It is a HTML like syntax (but NOT HTML) in javascript.
- Facebook developers build JSX.
- JSX sanitizes your code.
- JSX converts HTML tags into react elements, it easier to write and add HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

### Example 1 - WITH JSX:

```
const element = (
  <h1 className="greeting">
    Hello, world - With JSX!
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

### Example 2 - WITHOUT JSX:

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world - Without JSX!'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

## 2: Superpowers of `JSX`.

- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- We can use JSX to conditionally output some content or data to your DOM safeguards it against an XSS attack as JSX Prevents Injection Attacks.
- JSX also allows React to show more useful error and warning messages.
- JSX helps us in keeping our code simpler and elegant when writing large pieces of code.
- Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

### Example

```
const title = response.potentiallyMaliciousInput;
// JSX Prevents Injection Attacks : This is safe
const element = <h1>{title}</h1>;
```

_Note: In this example, by default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks._

## 3: Role of `type` attribute in script tag? What options can I use there?

The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. The type attribute gives the language of the script or format of the data. It has a Default value which is “text/javascript”.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## 4: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.

- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## 5: What is tree shaking?

- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code or unused code.
- Tree-shaking is an important way to reduce the size of your bundle and improve performance.
- It depends on the static syntax of import and export modules in ES6 (ES2015). By taking tree-shaking concepts into consideration when writing code, we can significantly scale down the bundle size by getting rid of unused JavaScript, thereby optimizing the application and increasing its performance.

## 6: What is React Element?

- Elements are the smallest building blocks of React apps.
- An element describes what you want to see on the screen:

```
const element = <h1>Hello, world</h1>;
```

- Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.


