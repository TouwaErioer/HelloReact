import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    handleSubmitContent(comment) {
        if (!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        comment.date = new Date().toLocaleString();
        this.state.comments.push(comment);
        // 组件重新渲染
        this.setState({
            comment: this.state.comments
        });
        this._saveComment();
    }

    _loadComment() {
        let comments = localStorage.getItem('comments');
        if (comments) {
            this.setState({comments: JSON.parse(comments)});
        }
    }

    _saveComment() {
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }

    componentDidMount() {
        this._loadComment();
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitContent.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp;