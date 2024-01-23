import React from 'react';
import { Tag, Modal, Button, Input, Space, message } from 'antd';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';



const Home = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
  });

  const [copied, setCopy] = useState(false);
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await instance.get('/like');
      const { data } = response.data;
      setList(data);
    } catch (error) {
      console.log(error);
    }
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

  const submit = async () => {
    try {
      const { data } = await instance({
        url: '/like/create',
        data: {
          name: inputValue,
        },
        method: 'post',
      });
      if (data.code === 200) {
        message.success(data.msg);
        setInputValue('');
        getData();
      }
    } catch (error) {
      message.error(error.response.data.msg );
      // console.log(error.response.data.msg        );
    }
  };
  const [list, setList] = useState([]);

  return (
    <div>
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
      </div>
      {list.length > 0 && (
        <Space.Compact
          style={{
            width: '30%',
            marginTop: 300,
            transform: 'translateX(-50%)',
            position: 'absolute',
            left: '50%',
          }}
        >
          <Input value={inputValue} onChange={handleChange} />
          <Button
            type="primary"
            onClick={() => {
              submit();
            }}
          >
            Submit
          </Button>
        </Space.Compact>
      )}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <span style={{ marginRight: 5 }}> {content}</span>
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

export default Home;
