import { H2 } from "./Section.styled";

import PropTypes from "prop-types";

export function Section({title, children}) {
    return (
        <section>
            <H2>{title}</H2>
            {children}
        </section>
    )
}

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}