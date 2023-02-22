import { BsHandbag } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';

import "./styles.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-items-container">
        <h2 className="header-title">
          Norm club
        </h2>

        <ul className="header-item">
          <li>Explorar</li>
          <li>Feminina</li>
          <li>Masculina</li>
          <li>Esporte</li>
        </ul>
        <div className="items-icons">
          <span className='item'>
            <BsHeart size={22} />
          </span>
          <span className='item'>
            <BsPerson size={27} />
          </span>
          <span className='item'>
            <BsHandbag size={22} />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  )
}
