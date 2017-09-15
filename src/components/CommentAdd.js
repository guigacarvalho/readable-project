import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import uuid from '../utils/uuid'

class CommentAdd extends React.Component {
    
    state = {
        id: uuid(),
        timestamp: Date.now(),
        body: '',
        author: '',
        parentId: '',
    }


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    
    componentWillMount() {
        const postId = this.props.match.params.id;
        this.props.dispatch(Actions.modifyPost(postId)).then(() =>
            this.setState({parentId: this.props.editingPost.id})
        );
    }

    submit = (e) => {
        e.preventDefault();
        this.props.dispatch(Actions.addComment(this.state));
        this.props.history.push('/post/'+this.state.parentId);        
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <h3 className="spacing-top border-bottom spacing-bottom">Adding a Comment</h3>
                <small>"{this.props.editingPost.title}"</small>
                <hr/>
                <label>Comment</label>
                <textarea onChange={this.handleInputChange} placeholder="This is my awesome comment! Behold my knowledge and wit." required name="body"></textarea>
                <label>Name</label>
                <input onChange={this.handleInputChange} type="text" placeholder="Bruce Wayne" required name="author"/>
                <div>
                    <button className="button button-small" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (state, props) => ({
    categories: state.categories,
    editingPost: state.editingPost
});
  
export default connect(mapStateToProps)(CommentAdd);