import React from "react";
import "./App.css";
import { data } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      active: null,
      data: data,
    };
  }
  render() {
    const onEdit = (value) => {
      this.setState({ active: value });
    };
    const onChange = (e) => {
      this.setState({
        active: { ...this.state.active, [e.target.name]: e.target.value },
      });
    };
    const onSave = () => {
      const res = this.state.data.map((value) =>
        value.id === this.state?.active?.id ? this.state.active : value
        );
        this.setState({data: res,active:null})
    };
    return (
      <table border="2 solid gray">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(({ id, name, age }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                {this.state?.active?.id === id ? (
                  <input
                    name="name"
                    onChange={onChange}
                    value={this.state?.active?.name}
                    placeholder="name"
                  />
                ) : (
                  name
                )}
              </td>
              <td>
                {this.state?.active?.id === id ? (
                  <input
                    name="age"
                    onChange={onChange}
                    value={this.state?.active?.age}
                    placeholder="age"
                  />
                ) : (
                  age
                )}
              </td>
              <button
                onClick={() => {
                  this.state?.active?.id === id
                    ? onSave()
                    : onEdit({ id, name, age });
                }}
              >
                {this.state?.active?.id === id ? "Save" : "Edit"}
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
