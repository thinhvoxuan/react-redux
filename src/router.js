import React from 'react'
import App from './components/app'
import PostList from './components/post_list'
import PostDetail from './components/post_view'
import PostNew from './components/post_new'
import {Route, IndexRoute, Router} from 'react-router'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="posts/new" component={PostNew} />
        <Route path="posts/:id" component={PostDetail} />
    </Route>
)


