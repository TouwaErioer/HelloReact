import React, {Component} from 'react'
import wrapWithLoadData from "./wrapWithLoadData";
import PropTypes from "prop-types";

class CommentInput extends Component {

    static propTypes = {
        data: PropTypes.any.isRequired,
        saveData: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.data,
            content: ''
        };
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            let date = +new Date();
            this.props.onSubmit({username, content, date});
            this.setState({content: ''})
        }
    }

    componentDidMount() {
        this.textarea.focus();
    }

    handleUserNameBlur(event) {
        let username = event.target.value;
        if (username) {
            this.props.saveData(username);
        } else {
            alert('请输入名称');
        }
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUserNameChange.bind(this)}
                               onBlur={this.handleUserNameBlur.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}
                                  ref={(textarea) => {
                                      this.textarea = textarea}}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

CommentInput = wrapWithLoadData(CommentInput, "username");
export default CommentInput;