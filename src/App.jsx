import React from 'react';
import { Tag,Modal } from 'antd';
import { useState } from 'react';
const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };





  const randomColor = () => {
    const colors = [
      'magenta',
      'red',
      'volcano',
      'orange',
      'gold',
      'yellow',
      'lime',
      'green',
      'cyan',
      'blue',
      'geekblue',
      'purple',
      'black',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const list = [
    {
      name: '张三',
    },
    {
      name: '李四',
    },
  ];
  return (
    <div>
      {list.map((item, index) => {
        return (
          <Tag color={randomColor()} key={index} onClick={showModal}>
            {item.name}
          </Tag>
        );
      })}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
