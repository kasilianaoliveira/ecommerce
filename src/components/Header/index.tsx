import { BsCart3 } from 'react-icons/bs'

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
          <li>Login</li>
          <li>Criar conta</li>
          <li className='item'>
            <BsCart3 size={25} />
            <span>5</span>
          </li>
        </ul>

      </div>
    </header>
  )
}
