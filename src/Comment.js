import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {timeString: ''}
    }

    static propsType = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    };

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.date) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    componentDidMount() {
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index);
        }
    }

    render() {
        return (
            <div className='comment'>
                <div className='content'>
                    <span className='comment-user'>{this.props.comment.username} </span>：
                    <div>{this.props.comment.content}</div>
                </div>
                <div className='content'>
                    <div className='del-button' onClick={this.handleDeleteComment.bind(this)}>删除</div>
                    <div className='date-text'>{this.state.timeString}</div>
                </div>
            </div>
        )
    }
}

export default Comment