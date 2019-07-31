import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList'
// import { bindActionCreators } from 'redux'

class App extends Component {


  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h4>Hacker News Asks</h4>
              <hr></hr>
              {this.props.loading ? "...loading" : <CatList catPics={this.props.stories} />}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
 // debugger
  return {
    catPics: state.cats.pictures,
    loading: state.cats.loading,
    stories: state.cats.stories
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(fetchCats, dispatch)
//   }
// }
export default connect(mapStateToProps, {fetchCats})(App)
