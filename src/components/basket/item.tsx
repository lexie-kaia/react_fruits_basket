import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Fruit } from 'types/types';

const Item = ({ fruit }: { fruit: Fruit }) => (
  <li>
    <span>apple</span>
    <span>:</span>
    <span>count</span>
    <button>
      <FontAwesomeIcon icon={faPlus} />
    </button>
    <button>
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <button>
      <FontAwesomeIcon icon={faPen} />
    </button>
    <button>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </li>
);

export default Item;
