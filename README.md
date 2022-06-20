# React fundamentals

## Preview

## folder structure for react app

-   **node modules**: where we keep all dependencies (best practice is to ignore this file for git)
-   **package.json**: it is the manifest file (ex. dependencies),
    ```bash
        npm install
    ```
    it will check the dependencies listed in package.json and install all our dependencies (npm run is possible even without node_modules)
-   **index.html** in public folder: (just a regular html file)
    -   can change title
    -   cdn import
    -   div id="root" is where our whole javascript application is going in
-   **build folder** is the mirror of our react app that is production-ready. (should also ignore for git)

````bash
        npm build
    ```

## new terms I've learnt

-   **Boilerplate code/ boilderplate**: it refers to code which sets up the basic frame for your project. "create-react-app" is an example of boilerplate code. it makes life easier (ex. without it, a programmer would have to write a lot of code to do only minimal/ verbose jobs) || boilerplate itself is the basic frame (ex. basic set up that is provided via create-react-app)
````
