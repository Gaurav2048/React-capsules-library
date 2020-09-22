# react-capsules-lib

> A plug &amp; play api for bullet lists in React with Dnd feature.

[![NPM](https://img.shields.io/npm/v/react-capsules-lib.svg)](https://www.npmjs.com/package/react-capsules-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-capsules
```

## Components and props

Main Components

1. ReactBulletDnd
2. ReactBulletDnd.Item
3. ReactBulletDnd.TextInput

| Components               | Api      | Description                                         | Required |     |
| ------------------------ | -------- | --------------------------------------------------- | -------- | --- |
| ReactBulletDnd           | data     | Pass the data to be displayed in capsules           | false    |     |
|                          | set      | hook that changes the data                          | false    |     |
|                          | style    | Style for the component                             | false    |     |
|                          |          |                                                     |          |     |
| ReactBulletDnd.Item      | item     | Text to display on every capsule                    | true     |     |
|                          | position | Index of the item in the array to add dnd feature.  | false    |     |
|                          | style    | Style for the capsule                               | false    |     |
|                          | icon     | Icon for the cancel button.                         | false    |     |
|                          |          |                                                     |          |     |
| ReactBulletDnd.TextInput | style    | Style for the input                                 | false    |     |
|                          | addItem  | callback when enter is pressed for adding new data. | true     |     |
|                          |          |                                                     |          |     |
|                          |          |                                                     |          |     |

## Usage

```jsx
import React, { useState } from 'react'

import ReactBulletDnd from 'react-capsules'
import 'react-capsules-lib/dist/index.css'
import cancel from './cancel.png'

const App = () => {
  const [items, setItems] = useState([
    'Android development',
    'React Js',
    'MongoDb',
    'MySql Programming',
    'Node Js',
    'JavaScript',
    'Firebase'
  ])

  const onItemAdded = (item) => {
    const copyItems = JSON.parse(JSON.stringify(items))
    copyItems.push(item)
    setItems(copyItems)
  }

  return (
    <div className='App'>
      <ReactBulletDnd data={items} set={setItems} style={/* Container Style */}>
        {items.map((item, index) => (
          <ReactBulletDnd.Item
            item={item}
            key={index}
            position={index}
            style={/* Item style */}
            icon={cancel}
          />
        ))}
        <ReactBulletDnd.TextInput
          style={/* Input style */}
          addItem={onItemAdded}
        />
      </ReactBulletDnd>
    </div>
  )
}

export default App
```

## License

MIT © [Gaurav2048](https://github.com/Gaurav2048)
