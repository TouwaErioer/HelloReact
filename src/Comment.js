import React, {Component} from 'react'

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='content'>
                    <span className='comment-user'>{this.props.comment.username} </span>：
                    <div>{this.props.comment.content}</div>
                </div>
                <div className='date-text'>{this.props.comment.date}</div>
            </div>
        )
    }
}

export default Comment