import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Comment extends Component {

    // 组件参数验证
    static propsType = {
        comment: PropTypes.object.isRequired
    };

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