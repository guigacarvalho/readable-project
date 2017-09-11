import React from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions/'
import {NavLink} from 'react-router-dom'

class CategoriesList extends React.Component {
    componentDidMount() {
        this.props.dispatch(Actions.fetchCategories());
    }
    render(){
        const categories = this.props.categories
        return (
                <div>
                    <NavLink to="/" className="button button-small button-clear">
                            Home
                    </NavLink>
                    {
                    Array.isArray(categories) 
                    ? categories.map(({name, path}) => (
                        <NavLink to={`/category/${path}`} key={path} className="button button-small button-clear">
                            {name}
                        </NavLink>
                        )) 
                    : 'no categories to select from'
                }
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    categories: state.categories,
});
  
export default connect(mapStateToProps)(CategoriesList);