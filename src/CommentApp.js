import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from "./wrapWithLoadData";
import PropTypes from 'prop-types'

class CommentApp extends Component {

    static propTypes = {
        data: PropTypes.any.isRequired,
        saveData: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {comments: this.props.data}
    }

    handleSubmitContent(comment) {
        if (!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        this.state.comments.push(comment);
        const comments = this.state.comments;
        this.setState({comment: comments});
        this.props.saveData(comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this.props.saveData(comments);
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

CommentApp = wrapWithLoadData(CommentApp, "comments");
export default CommentApp;