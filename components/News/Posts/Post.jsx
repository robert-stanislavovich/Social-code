import React from 'react'
import {NavLink} from "react-router-dom";


const Post = (props) => {
    return <div>
        <NavLink to={'/news/' + props.id}>{props.name}</NavLink>
    </div>


}

export default Post;