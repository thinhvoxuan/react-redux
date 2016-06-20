/**
 * Created by thinhvoxuan on 4/10/16.
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchDetailPost, deletePost} from '../actions/index'


class DetailPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchDetailPost(this.props.params.id);
    }
    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=> {
            this.context.router.push('/');
        })
    }
    render() {
        const { detailPost } = this.props;

        if (!detailPost) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{detailPost.title}</h3>
                <h6>Categories: {detailPost.categories}</h6>
                <p>{detailPost.content}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        detailPost: state.posts.detail
    }
}

export default connect(mapStateToProps, {fetchDetailPost, deletePost})(DetailPost);


