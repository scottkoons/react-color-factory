import { Link } from 'react-router-dom';

const Colors = ({ colors }) => {
  return (
    <div className='Colors'>
      <div className='Colors-header'>
        <h2>Welcome to the color factory</h2>
        <Link className='Colors-header-add' to='/colors/new'>
          Add a color
        </Link>
      </div>
      <div className='Colors-body'>
        <p>Please select a color</p>
        <ul className='Colors-list'>
          {colors.map((color, idx) => (
            <li className='Colors-list-item' key={idx}>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colors;