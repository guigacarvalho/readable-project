import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import {NavLink} from 'react-router-dom'
import AddButton from './AddButton'

class AppMenu extends React.Component {
    componentDidMount() {
        this.props.dispatch(Actions.fetchCategories());
    }
    render(){
        const categories = this.props.categories
        return (
            <div className="row border-top spacing-top border-bottom spacing-bottom">
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
        )
    }
}
const mapStateToProps = (state, props) => ({
    categories: state.categories,
});
  
export default connect(mapStateToProps)(AppMenu);