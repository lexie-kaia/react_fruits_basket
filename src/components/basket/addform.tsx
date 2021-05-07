import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Addform = () => (
  <form>
    <input type="text" />
    <button>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </form>
);

export default Addform;
