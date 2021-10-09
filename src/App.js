import { Component } from "react";
import "./App.scss";
import MDEditor from "./components/MDEditor";
import MDPreview from "./components/MDPreview";
import INITIAL_STATE from "./placeholder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: INITIAL_STATE,
    };
  }

  fnHandleOnChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  };

  render() {
    return (
      <main>
        <section id="app">
          <div className="box">
            <MDEditor
              onInput={this.fnHandleOnChange.bind(this)}
              value={this.state.value}
            />
          </div>
          <div className="box">
            <MDPreview value={this.state.value} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
