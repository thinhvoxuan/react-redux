/**
 * Created by thinhvoxuan on 4/10/16.
 */
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import { requestCreatePost } from '../actions/index'


class PostNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    submitForm () {
        this.props.requestCreatePost(this.props.fields).then(()=> {
            this.context.router.push('/');
        })
    }
    render(){
        var { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                <h3>Create new Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};
    if (!values.title){
        errors.title = 'Enter your name';
    }
    if (!values.categories){
        errors.categories = 'Enter blog categories';
    }
    if (!values.content){
        errors.content = 'Enter blog content';
    }
    return errors;
}

export default reduxForm({
    form : 'PostNewForm',
    fields : ['title', 'categories', 'content'],
    validate
}, null, { requestCreatePost })(PostNew)