
//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入
class Greeter extends Component{
  render() {
    return (
        <div className={styles.root}> //使用cssModule添加类名的方法
            {config.greetText}
        </div>
    );
  }
}

export default Greeter