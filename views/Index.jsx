const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    // const pokemons = this.props.pokemon;

    return (
      <div>
        <h1>See All The Pokemon! </h1>
        <nav>
          <a href="/pokemons/new">Create a New Pokemon</a>
        </nav>
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li>
                The <a href={`/pokemons/${pokemon._id}`}>{pokemon.name}</a> is{" "}
                {pokemon.name} <br></br>
                {pokemon.img}
                <br />
                <a href={`/pokemons/${pokemon._id}/edit`}> Edit This Pokemon </a>
                <form
                  action={`/pokemons/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
