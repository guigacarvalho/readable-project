import React from 'react'
import { connect } from 'react-redux'
import { editPost, modifyPost } from '../actions/post'

class PostEdit extends React.Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        deleted: false,
    }

    componentWillMount() {
        const postId = this.props.match.params.id;
        this.props.modifyPost(postId).then(() =>
            this.setState(this.props.editingPost)
        )
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.editPost(this.state)
        this.props.history.push('/')
    }

    render() {
        const { categories } = this.props
        return (
            <form onSubmit={this.submit}>
                Edit Post Form
                <label>Title</label>
                <input onChange={this.handleInputChange} value={this.state.title} type="text" placeholder="It's 1 am and creativity is running out" required name="title"/>
                <label>Blog Post</label>
                <textarea onChange={this.handleInputChange} value={this.state.body} placeholder="This is my awesome blog post! Behold my knowledge and wit." required name="body"></textarea>
                <label>Name</label>
                <input onChange={this.handleInputChange} value={this.state.author} type="text" placeholder="Bruce Wayne" required name="author"/>
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
                    <button className="button button-small" type="submit">Edit Post</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.postsReducer.categories,
    editingPost: state.postsReducer.editingPost
})
  
export default connect(mapStateToProps, { editPost, modifyPost })(PostEdit)