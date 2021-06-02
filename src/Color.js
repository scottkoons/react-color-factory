import { useParams, Redirect, Link } from 'react-router-dom';

const Color = ({ colors }) => {
  const { color } = useParams();

  const foundColor = colors.find((c) => c.name === color);
  if (!foundColor) {
    return <Redirect to='/colors' />;
  }

  const style = {
    backgroundColor: foundColor.value,
    color: '#fff',
    height: '100vh',
  };

  return (
    <div className='Color' style={style}>
      <h1>{`THIS IS ${foundColor.name.toUpperCase()}`}</h1>
      <h1>ISN'T IT BEAUTIFUL?</h1>
      <Link to='/colors'>
        <h1>GO BACK</h1>
      </Link>
    </div>
  );
};

export default Color;