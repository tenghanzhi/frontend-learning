import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './App.css';
import store from "./index";
import { actions, getList } from "./modules/index";
import selectors from "./modules/selectors";

import List from "./components/List"
import Settings from "./components/Settings"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onPage: ""
    }
  }

  componentDidMount() {
    store.dispatch(getList());
  }

  handleClick = (e) => {
    this.setState({
      onPage: e.target.innerHTML
    })
  }

  render() {
    const { myList, sortBy } = this.props;
    const { onPage } = this.state;

    return (
      <Router>
        <div className="container">
          <table>
            <tbody>
              <tr>
                <td className="menu">
                  <Link 
                    to="/list" 
                    onClick={this.handleClick}
                    style={onPage==="List" ? {color: "red"} : {color: "black"}}
                  >
                    List
                  </Link>
                </td>
                <td className="menu">
                  <Link 
                    to="/settings" 
                    onClick={this.handleClick}
                    style={onPage==="Settings" ? {color: "red"} : {color: "black"}}
                  >
                    Settings
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <Switch>
            <Route path="/list">
              <List data={myList} sortBy={sortBy} page={1}/>
            </Route>
            <Route path="/settings">
              <Settings page={2}/>
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myList: selectors.getMyList(state),
    sortBy: selectors.getSettings(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
