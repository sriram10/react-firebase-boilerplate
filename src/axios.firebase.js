import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://sample-blog-application.firebaseio.com'
})