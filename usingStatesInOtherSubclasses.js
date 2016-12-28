//codepen.io
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "abc",
      name: "Karl",
      age: 22
    };
  }
//Use arrow function to bind and access 'this.setState'
  logCmd = () => {
    console.log(this.state.value);
    this.setState({
      value: 'Hello'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.logCmd}>
          {this.state.value}
        </button> <br />
        Name: {this.state.name}  <br />

        Age of {this.state.name} is {this.state.age} <br />
      </div>
    );
  }
  
}

ReactDOM.render(
  <Test />,
  document.getElementById('container')
);