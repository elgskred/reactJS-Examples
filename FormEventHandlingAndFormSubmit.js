class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      navn: "",
      beskrivelse: "",
      oppskrift: ""
    };
  }
  onChange = (e) => {
    var t = {};
    var id = e.target.id
    t[id] = e.target.value
    this.setState(t);
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <br />
          <input type="text" placeholder="Oppskrift" id="navn" onChange={this.onChange} value={this.state.navn}/>
          <br />

          <br />
          <input type="text" placeholder="Beskrivelse" id="beskrivelse" onChange={this.onChange} value={this.state.beskrivelse}/>
          <br />
          <br />
          Slik gjør du:
          <br />
          <textarea rows="5" cols="50" id="oppskrift" onChange={this.onChange} value={this.state.oppskrift}/>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
  
}

ReactDOM.render(
  <Test />,
  document.getElementById('container')
);