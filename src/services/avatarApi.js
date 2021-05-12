export const findCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const characters = await res.json();

  return characters.map((characters) => ({
    id: characters._id,
    name: characters.name,
    photoUrl: characters.photoUrl,
    affiliation: characters.affiliation,
    allies: characters.allies,
    enemies: characters.enemies,
  }))
}

export const findCharactersById = async (id) => {
  const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  const character = await res.json();
  return character;
}