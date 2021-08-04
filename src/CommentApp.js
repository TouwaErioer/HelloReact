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

    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this._saveComment();
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitContent.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        );
    }
}

export default CommentApp;