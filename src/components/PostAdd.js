import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import uuid from '../utils/uuid'

class PostAdd extends React.Component {
    state = {
        id: uuid(),
        timestamp: Date.now(),
        category: 'redux'
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
        const categories = this.props.categories
        return (
            <form onSubmit={this.submit}>
                <label>Title</label>
                <input onChange={this.handleInputChange} type="text" placeholder="It's 1 am and creativity is running out" required name="title"/>
                <label>Blog Post</label>
                <textarea onChange={this.handleInputChange} placeholder="This is my awesome blog post! Behold my knowledge and wit." required name="body"></textarea>
                <label>Name</label>
                <input onChange={this.handleInputChange} type="text" placeholder="Bruce Wayne" required name="author"/>
                <label>Category</label>
                <select onChange={this.handleInputChange} value={this.state.category} name="category">
                    {
                        Array.isArray(categories) 
                        ? categories.map(({name, path}) => (
                        <option value={path} key={path}>{name}</option>
                        ))
                        : <option disabled>no categories to select from</option>
                    }
                </select>
                <div>
                    <button className="button button-small" type="submit">Add Post</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.categories,
  });
  
export default connect(mapStateToProps)(PostAdd);