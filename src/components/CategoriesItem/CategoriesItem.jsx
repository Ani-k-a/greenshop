import css from './CategoriesItem.module.css';
import { NavLink } from 'react-router-dom';

export default function CategoriesItem({ image, title, id }) {
  return (
    <li className={css.block}>
      <NavLink to={`/category/${id}`}>
        <img
          src={`http://localhost:3333${image}`}
          alt={title}
          className={css.img}
        ></img>
        <h3 className={css.title}>{title}</h3>
      </NavLink>
    </li>
  );
}
