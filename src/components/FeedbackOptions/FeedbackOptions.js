import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onBtnClick }) => (
  <div>
    {options.map(option => (
      <Button key={option} onClick={() => onBtnClick(option)}>
        {option}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
