# Simple Animate Presence

A simple animation library to make your components a little bit more smooth.

## Installation

```bash
npm install simple-animate-presence
```

or

```bash
yarn add simple-animate-presence
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'simple-animate-presence';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      <AnimatePresence isOpened={isVisible}>
        <div style={{ background: 'red', width: '100px', height: '100px' }}>Animated Component</div>
      </AnimatePresence>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Contributing

Contributions are welcome! Please open an issue or send a pull request to suggest improvements or fixes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

- **JoaoVitorOli**
