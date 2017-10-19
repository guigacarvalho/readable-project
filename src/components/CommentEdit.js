import React from 'react'
import { connect } from 'react-redux'
import { modifyComment, editComment } from '../actions/comment'

class CommentAdd extends React.Component {
    
    state = {
        timestamp: Date.now(),
        body: '',
        author: '',
        parentId: '',
    }
    
    componentWillMount() {
        const commentId = this.props.match.params.id;
        this.props.modifyComment(commentId).then(() =>
            this.setState(this.props.editingComment)
        );
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.editComment(this.state);
        this.props.history.push('/post/'+this.state.parentId);        
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <h3 className="spacing-top border-bottom spacing-bottom">Editing a Comment</h3>
                <label>Comment</label>
                <textarea onChange={this.handleInputChange} placeholder="This is my awesome comment! Behold my knowledge and wit." required name="body" value={this.state.body}></textarea>
                <label>Name</label>
                <input onChange={this.handleInputChange} type="text" placeholder="Bruce Wayne" required name="author"  value={this.state.author}/>
                <div>
                    <button className="button button-small" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state, props) => ({
    editingComment: state.editingComment
});
  
export default connect(mapStateToProps, { modifyComment, editComment })(CommentAdd);