import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import uuid from '../utils/uuid'

class CommentAdd extends React.Component {
    
    state = {
        id: uuid(),
        timestamp: Date.now(),
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
        this.props.dispatch(Actions.addPost(this.state));
        this.props.history.push('/');        
    }
    
    render() {
        return (
            <form onSubmit={this.submit}>
                <h3 className="spacing-top border-bottom spacing-bottom">= Adding a Comment =</h3>
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

export default connect()(CommentAdd);