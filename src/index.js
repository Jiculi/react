https://alligator.io/react/axios-react/
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    console.log("entramos DidMont")
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get('../api/gPresuntos.php?accion=13-A-09000-14-0741-06-004')
      .then(res => {

        console.dir("hay respuesta..." + JSON.stringify(res.data))
        // Transform the raw data by extracting the nested posts
        const posts = res.data
        console.log("posts: "+posts)

        console.log(res.data);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);
        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        console.log("hay error "+err)
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
        <h1>{`/r/${this.props.subreddit}`}</h1>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

// Change the subreddit to anything you like
ReactDOM.render(
  <FetchDemo subreddit="Hola papa"/>,
  document.getElementById('root')
);
