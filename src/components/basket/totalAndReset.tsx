import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';

const TotalAndReset = () => (
  <div>
    <span>total:</span>
    <span>count</span>
    <button>
      <FontAwesomeIcon icon={faTrashRestore} />
    </button>
  </div>
);

export default TotalAndReset;
