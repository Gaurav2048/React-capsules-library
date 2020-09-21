import React, { useState } from 'react'

import ReactBulletDnd from 'react-capsules-lib'
import 'react-capsules-lib/dist/index.css'
import cancel from "./cancel.png";

const App = () => {
  const [items, setItems] = useState([
    'Android development',
    'React Js',
    'MongoDb',
    'MySql Programming',
    'Node Js',
    'JavaScript',
    'Firebase',
  ]);

  const onItemAdded = (item) => {
    console.log(item);
    const copyItems = JSON.parse(JSON.stringify(items));
    copyItems.push(item);
    setItems(copyItems);
  };

  return (
    <div className="App">
      <ReactBulletDnd
        data={items}
        set={setItems}
        style={{
          margin: 'auto',
          width: '600px',
          border: '1px solid #cccccc',
          borderRadius: '6px',
          boxShadow: '2px 2px #dddddd',
        }}
      >
        {items.map((item, index) => (
          <ReactBulletDnd.Item
            item={item}
            key={index}
            position={index}
            style={{
              backgroundColor: '#cdcdcd',
              borderRadius: '4px',
              paddingTop: '4px',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingBottom: '4px',
            }}
            icon={cancel}
          />
        ))}
        <ReactBulletDnd.TextInput
          style={{ width: '90%', marginLeft: '15px' }}
          addItem={onItemAdded}
        />
      </ReactBulletDnd>
    </div>
  );
}

export default App


