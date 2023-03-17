# Deploying a react app

Guided project developed during the course [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) from Udemy.

## Course section:

- 22: Deploying react apps

## Technologies:

- Lazy loading
  - `loader: () => import("myPath").then((module) => module.myFunction())`
  - `lazy` + `Suspense`
    - `const MyComponent = lazy(() => import("myPath"))`
    - `element: <Suspense><MyComponent/></Suspense>`
