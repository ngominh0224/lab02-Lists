import React from 'react';
import PropTypes from 'prop-types';
import Character from './Avatars';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  return (
    <ul aria-label="characters" className="charactersList">
      {characters.map((character) => (
        <Link to={`characters/${character.id}`} key={character.id}>
          <li>
            <Character
              name={character.name}
              photoUrl={character.photoUrl}
              affiliation={character.affiliation}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
