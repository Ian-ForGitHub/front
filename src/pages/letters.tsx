import React from 'react';
import { Button } from 'antd';
import styles from './letters.css';
import { assertJSXAttribute } from '@umijs/deps/compiled/babel/types';
import { alternatives } from '@umijs/deps/compiled/@hapi/joi';

const sendLetter = () => function() {
    console.log("click button");
}

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page letters</h1>
      <Button type="primary"onClick={sendLetter}>Button</Button>
    </div>
  );
}
