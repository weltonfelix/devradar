## Componente:
  Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação  

  Uma função que retorna algum conteúdo HTML, CSS, JS (JSX). Crie um novo quando estiver repetindo um trecho de código 3 vezes ou mais ou quando você consegue isolar um pedaço da aplicação dentro de algo que não infrinja no funcionamento dos outros componentes.
### Sintaxe:
  Todo nome de componente começa com a primeira letra MAIÚSCULA. E você pode usá-lo como uma tag HTML. O recomendado é ter apenas um componente por arquivo.
### Ex.:
    function App(){return ((JSX))}
    <App/>


## Estado:
  Informações mantidas pelo componente.(Imutabilidade)

  Informação que o componente vai manipular. Toda função própria de um componente deve ser criada dentro dele mesmo.


## Propriedade
  Informações que um componente PAI passa para o componente FILHO.

  Um atributo HTML passado para um componente. Para colocar um componente abaixo do outro é necessário um container em volta deles. Para isso usamos o *fragment*, que é uma tag que abre e fecha sem nenhum tag name: <></>

### Ex.:
    function Header(props){return <h1>{props.title}</h1>}
    <Header title="Dashboard"/>

# React README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
