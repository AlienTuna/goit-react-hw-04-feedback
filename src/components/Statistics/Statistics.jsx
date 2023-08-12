import { Stat } from "./Statistics.styled";

import PropTypes from "prop-types";

export function Statistics({ rates, total, positive }) {

    return (
        <div>
            <div>
                {Object.keys(rates).map(k =>
                    <Stat key={k}>{k}: <span>{rates[k]}</span></Stat>
                )}
                <Stat>Total: <span>{total}</span></Stat>
                <Stat>Positive feedback: <span>{positive}%</span></Stat>
            </div>
        </div>)
}

Statistics.propTypes = {
    rates: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }).isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}