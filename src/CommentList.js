import React, {Component} from 'react'
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentList extends Component {
    static defaultProps = {comments: []};

    static propsType = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func.isRequired
    };

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} index={i}
                                                                  onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
            </div>
        )
    }
}

export default CommentList;