As explained in [Building Applications with React and Redux in ES6](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents) by Cory House in section React Component Approaches



### ES6 functional components

__Use stateless functional components when possible__

| **Class Component** | **Stateless** 
|----------|-------|
|  State  | Everywhere else  |
|  Refs   |   |
|  Lifecycle methods  |  |
|  Child functions (for performance)   |  |




### The different types of components

__Make sure most of your components are presentational components__

| **Container** | **Presentation** 
|----------|-------|
|  Little to no markup  | Nearly all markup  |
|  Pass data and actions down   | Receive data and actions via props  |
|  Knows about Redux   | Doesn't know about Redux  |
|  Often stateful   | Typically functional components  |

Make sure most of your components are presentational components
