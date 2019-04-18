import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get('../api/gPresuntos.php?accion=13-A-09000-14-0741-06-004')
      .then(res => {

        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.cont}>{post.nombre}</li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDatos/>,
  document.getElementById('root')
);
