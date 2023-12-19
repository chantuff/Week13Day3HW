const React = require("react");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <br />
        <img src={pokemon.img} />
        <a href="/pokemon">back</a>
        <br />
        <a href={`/pokemon/${pokemon._id}/edit`}>Edit</a>
        <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
      </div>
    );
  }
}

module.exports = Show;