const React = require('react');

function Index({ pokemonList }) {
   return (
      <div>
         <h1>See All the Pokemon</h1>
         <ul>
            {pokemonList.map((pokemon) => (
               <li key={pokemon.id}>{pokemon.name}</li>
            ))}
         </ul>
      </div>
   );
}

module.exports = Index;
