import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Footer from './Footer'
import Users from './Users'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class App extends Component {
  render() {   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Helle React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Title />
        <Header />
        <hr />
        <LikeButton onClick={() => console.log('Click on Like button')} />
        <Computer />
        
        <HelloWorld text="Hello world" />
        
        <Users users={users} />
        
        <LessonsList lessons={lessons} />
        <Footer/>
      </div>
    );
  }
}

class Title extends Component {
  handleClickOnTitle(e) {
    alert(e.target.innerHTML)
    alert(this.handleClickOnTitle) // undefined
  }

  // react 并不是通过对象调用的方法来调用这个函数，而使通过直接调用来使用的，所以事件监听函数并不能通过this获取到实例

  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 大叔</h1>
    )
  }
}

class LikeButton extends Component {
  static defaultProps = {
    wordings: {
      likedText: 'cancel',
      unLikedText: 'good job'
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      name: 'tnoy',
      isLiked: false
    }
  }
  
  handleClickOnLikeButton() {
    console.log(this.state.isLiked)
    this.setState({
      isLiked: !this.state.isLiked
    })

    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  // setState 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。

  render() {
    const words = this.props.wordings
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? words.likedText : words.unLikedText} 👍
      </button>
    )
  }
}

class Computer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'off'
    }
  }

  handleComputerState() {
    this.setState({
      status: this.state.status === 'off' ? 'on' : 'off'
    })
  }
  render() {
    const content = this.state.status === 'off' ? '显示器关了' : '显示器亮了'
    return (
      <div>
        <Screen showContent={content} />
        <button onClick={this.handleComputerState.bind(this)}>开关</button>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: '无内容'
  }

  constructor(props) {
    super()
  }

  render() {
    return (
      <div className='screen'>{this.props.showContent}</div>
    )
  }
}

const HelloWorld = (props) => {
  const sayHi = (e) => alert('hello world')
  return (
    <div onClick={sayHi}>{props.text}</div>
  )
}

class Lesson extends Component {
  /* TODO */
  render() {
    const { lesson } = this.props
    const { order } = this.props
    return (
      <div onClick={ _ => console.log(`${order} - ${lesson.title}`)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
    )
  }

  handleClickList() {
    
  }

}

class LessonsList extends Component {
  /* TODO */
  render() {
    const { lessons } = this.props
    return (
      <div>
        {
          lessons.map((lesson, i) => 
            <Lesson lesson={lesson} key={i} order={i} />
          )
        }
      </div>  
    )  
  }
}
export default App;
