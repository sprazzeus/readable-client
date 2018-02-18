import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import {
  getCategoriesRequest,
  getPostRequest,
  editPostRequest,
  deletePostRequest
} from '../../actions/index.js'

class EditPost extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategoriesRequest()
    this.props.getPostRequest(id)
  }

  onSubmit = params => {
    this.props.editPostRequest(params)
  }

  onDelete = id => {
    this.props.deletePostRequest(id).then(this.props.history.push('/'))
  }

  render() {
    const { categories } = this.props
    const id = this.props.match.params.id
    return (
      <EditPostForm
        categories={categories}
        handleSubmit={this.props.handleSubmit}
        onSubmit={this.onSubmit}
        onDelete={this.onDelete}
        isAdding={false}
        id={id}
      />
    )
  }
}

const formOptions = {
  form: 'editPost',
  enableReinitialize: true
}

EditPost = reduxForm(formOptions)(EditPost)

export default connect(
  state => ({
    initialValues: state.post,
    categories: Object.keys(state.categories)
  }),
  {
    getCategoriesRequest,
    getPostRequest,
    editPostRequest,
    deletePostRequest
  }
)(EditPost)
