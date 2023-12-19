const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#f7d377",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <a href="/pokemon/new" style={myStyle}>
          Create new Pokemon
        </a>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${pokemon._id}`} style={myStyle}>
                  Name:
                  <br />
                  {pokemon.name}
                  <br />
                  Img: <br />
                  <img src={pokemon.img} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;