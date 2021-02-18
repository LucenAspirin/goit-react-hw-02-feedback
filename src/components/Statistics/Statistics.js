import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className={s.container}>
        <p className={s.title}>Good: {good}</p>
        <p className={s.title}>Neutral: {neutral}</p>
        <p className={s.title}>Bad: {bad}</p>
      </div>

      <p className={s.title}>Total: {total}</p>
      <p className={s.title}>Positive feedback: {positivePercentage}%</p>
    </>
  );
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
