import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={s.statisticList}>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
