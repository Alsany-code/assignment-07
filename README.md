1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript for React components. It makes the UI easier to understand and keeps structure and logic in one place, which improves readability and development speed.

2. What is the difference between State and Props?

State is data managed inside a component and can change over time, usually from user interaction. Props are values passed from a parent to a child component and are read-only, meaning the child cannot modify them.

3. What is the useState hook, and how does it work?

The useState hook lets functional components store and update state. It returns a value and an updater function, and whenever the state changes, React automatically re-renders the component with the new data.

4. How can you share state between components in React?

To share state, it is lifted to a common parent and passed down as props to child components. For wider use across many components, React’s Context API or external libraries like Redux can be used.

5. How is event handling done in React?

Event handling in React uses camelCase event names like onClick, and functions are passed directly as handlers. React also uses a synthetic event system, which ensures events work consistently across all browsers.