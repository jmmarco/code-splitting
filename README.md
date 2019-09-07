# Code splitting with React 🍽 🍕

The [`lazy`function](https://reactjs.org/docs/code-splitting.html#reactlazy) lets you render a dynamic import as a regular component.


The code looks something like this:
```
const Todos = React.lazy(() => import('./Todos'))

```

The Todos component will only be loaded when the component is requested.