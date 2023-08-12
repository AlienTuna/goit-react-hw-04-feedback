import { FillerTxt } from "./Notification.styled";
import PropTypes from "prop-types";
export function Notification({message}) {
    return (
        <FillerTxt>{message}</FillerTxt>
    )
    }

    Notification.propTypes = {
        message: PropTypes.string.isRequired
    }