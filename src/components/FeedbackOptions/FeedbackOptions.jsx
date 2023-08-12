import { ControlsContainer, Btn } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

export function FeedbackOptions({ onBtnClick, arrayOfOptions }) {
  return (
    <div>
      <ControlsContainer>
        {arrayOfOptions.map(option => (
          <Btn
            key={option}
            type="button"
            onClick={() => onBtnClick(option)}
          >
            {option}
          </Btn>
        ))}
      </ControlsContainer>
    </div>
  )
}

FeedbackOptions.propTypes = {
  arrayOfOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired
}
