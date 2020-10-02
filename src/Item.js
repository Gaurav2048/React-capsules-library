import React from 'react'

const Item = ({
  item,
  style,
  onClick,
  onDragEnter,
  icon,
  onDragStart,
  onDragEnd,
  position
}) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        margin: '5px',
        alignItems: 'center'
      }}
      onDragStart={(e) => onDragStart(e, position)}
      onDragEnter={(e) => onDragEnter(e, position)}
      onDragEnd={(e) => onDragEnd(e, position)}
      onDragOver={(e) => e.preventDefault()}
      draggable
    >
      <div style={{ display: 'inline' }}> {item} </div>
      <img
        src={icon}
        alt='icon'
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: '#DDDDDD',
          padding: '5dp',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
        onClick={() => onClick(item)}
      />
    </div>
  )
}

export default Item
