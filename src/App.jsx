import React from 'react';
import { Tag, Modal, Button } from 'antd';
import { useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const App = () => {
  const [copied, setCopy] = useState(false);
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (value) => {
    setIsModalOpen(true);
    setContent(value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCopy(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCopy(false);
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
          <Tag
            color={randomColor()}
            key={index}
            onClick={() => {
              showModal(item.name);
            }}
          >
            {item.name}
          </Tag>
        );
      })}

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <span style={{marginRight:5}}> {content}</span>
        <CopyToClipboard text={content} onCopy={() => setCopy(true)}>
          <Button size="small">{copied ? 'Copied!' : 'Copy'}</Button>
        </CopyToClipboard>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
