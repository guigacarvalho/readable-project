import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/post'
import {NavLink} from 'react-router-dom'
import AddButton from './AddButton'

class AppMenu extends React.Component {
    state = {
        collapsed: true,
    }
    toggleMenu = () => {
        this.setState({collapsed: !this.state.collapsed})
    }
    menuState = () =>{
        return this.state.collapsed ? 'closed' : 'open'
    }
    componentDidMount() {
        this.props.fetchCategories();
    }
    render(){
        const { categories } = this.props
        return (
            <div className="border-top border-bottom spacing-top  spacing-bottom">
                <div onClick={this.toggleMenu} className={`${this.menuState()} menu-icon`}></div>    
                <div className={`${this.menuState()} menu row  spacing-top  spacing-bottom`}>
                    <NavLink to="/" onClick={this.toggleMenu} className="button button-small button-clear column">
                            Home
                    </NavLink>
                    {
                    Array.isArray(categories) 
                    ? categories.map(({name, path}) => (
                        <NavLink to={`/category/${path}`} onClick={this.toggleMenu} key={path} className="button button-small button-clear column">
                            {name}
                        </NavLink>
                        )) 
                    : <div>no categories to select from</div>
                    }
                    <AddButton type="post" url="/create"/>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    categories: state.postsReducer.categories,
});
  
export default connect(mapStateToProps, { fetchCategories })(AppMenu);