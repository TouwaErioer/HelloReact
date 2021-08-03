import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

const users = [{
    name: 'Jack',
    age: 18,
    sex: 'male'
}, {
    name: 'Lucy',
    age: 18,
    sex: 'female'
}];

class App extends Component {
    handle(event) {
        console.log(event.target.innerText);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 onClick={this.handle}>Hello React</h2>
                    <a
                        onClick={this.handle}
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <LikeButton wording={{LikedText: '点赞👍', unLikedText: '取消👍'}}/>
                    {users.map((user, i) => <User user={user} key={i}/>)}
                </header>
            </div>
        )
    }
}

class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLiked: false
        }
    }

    static defaultProps = {
        wording: {
            LikedText: '取消👍',
            unLikedText: '点赞👍'
        }
    };

    handleClickOnLikeButton() {
        // 会导致组件的重新渲染
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? this.props.wording.unLikedText : this.props.wording.LikedText}
            </button>
        )
    }

}

class User extends Component {
    render() {
        return (
            <div>
                <span>{this.props.user.name} </span>
                <span>{this.props.user.age} </span>
                <span>{this.props.user.sex} </span>
                <br/>
            </div>
        );
    }
}

export default App;
