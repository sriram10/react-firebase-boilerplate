import React, { Component } from 'react'
import FirebaseAPI from '../../axios.firebase'
import Axios from '../../../node_modules/axios';

const BlogList = (props) => {
  return (
    <div>
      {
        props.blogs.map(b => {
          return (
            <div key={b.id} style={{border:'1px solid #ccc', background:'#fcfcfc'}}>

              <h2>{b.title} - ({b.id})</h2>
              <p>{b.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

class Dashboard extends Component {
  state = {
    title: '',
    body: '',
    blogs: []
  }
  createBlog = (e)=>{
    e.preventDefault()
    let {title, body} = this.state;
    FirebaseAPI.post('/blogs.json', {title, body})
      .then(res => {
        console.log(res.data);
        let {title, body} = this.state;
        this.setState({
          title: '',
          body: '',
          blogs: this.state.blogs.concat({id:res.data.name, title, body})
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    FirebaseAPI.get('/blogs.json')
      .then(res => {
        console.log(res.data)
        const b = Object.keys(res.data).map((key) => {
          return {
            id: key,
            title: res.data[key].title,
            body: res.data[key].body
          }
        })
        this.setState({
          blogs: b
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.createBlog}>
            <div>
              <label htmlFor='title'>Title</label>
              <input type='text' name='title' value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} />
            </div>
            <div>
              <label htmlFor='body'>Content</label>
              <input type='text' name='body' value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})} />
            </div>
            <button type='submit'>Create Blog</button>
          </form>
          <BlogList blogs={this.state.blogs} />
      </div>
   )
  }
}

export default Dashboard