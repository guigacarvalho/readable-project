import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import {NavLink} from 'react-router-dom'
import AddButton from './AddButton'

class AppMenu extends React.Component {
    state = {
        collapsed: false,
    }
    toggleMenu = () => {
        this.setState({collapsed: !this.state.collapsed})
    }
    menuState = () =>{
        return this.state.collapsed ? 'closed' : 'open'
    }
    componentDidMount() {
        this.props.dispatch(Actions.fetchCategories());
    }
    render(){
        const categories = this.props.categories
        return (
            <div className="border-top border-bottom spacing-top  spacing-bottom">
                <div onClick={this.toggleMenu} className={this.menuState() + ' menu-icon'}></div>    
                <div className={this.menuState() + ' menu row  spacing-top  spacing-bottom'}>
                    <NavLink to="/" className="button button-small button-clear column">
                            Home
                    </NavLink>
                    {
                    Array.isArray(categories) 
                    ? categories.map(({name, path}) => (
                        <NavLink to={`/category/${path}`} key={path} className="button button-small button-clear column">
                            {name}
                        </NavLink>
                        )) 
                    : 'no categories to select from'
                    }
                    <AddButton type="post" url="/create"/>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    categories: state.categories,
});
  
export default connect(mapStateToProps)(AppMenu);