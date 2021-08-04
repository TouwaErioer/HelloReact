import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {timeString: ''}
    }

    // 组件参数验证
    static propsType = {
        comment: PropTypes.object.isRequired
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
        // 定时器
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {
        return (
            <div className='comment'>
                <div className='content'>
                    <span className='comment-user'>{this.props.comment.username} </span>：
                    <div>{this.props.comment.content}</div>
                </div>
                <div className='date-text'>{this.state.timeString}</div>
            </div>
        )
    }
}

export default Comment