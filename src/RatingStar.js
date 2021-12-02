import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const RatingStar = ({starRate, setStarRate, movieRating, isMovieRating}) => {

const handleChange = value => {
    setStarRate(value);
  };

    return (

      isMovieRating
      ?
      <span>
        <Rate disabled  value={movieRating} />
      </span>
      :
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={starRate} />
    </span>
    );
  }
export default RatingStar;