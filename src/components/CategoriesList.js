import React from 'react'
const PostsList = ({categories}) => (
    <div>
        <h3>= categories =</h3>
        <div className="row">
            {
                Array.isArray(categories) 
                ? categories.map((category, index) => (
                    <div className="column" key={category.path}>
                        <a className="button" href={category.path}>
                           {category.name}
                        </a>
                    </div> )) 
                : 'state is empty'
            }
        </div>
    </div>
)

export default PostsList