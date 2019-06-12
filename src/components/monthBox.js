import React from 'react';
import { Segment } from 'semantic-ui-react'

class MonthBox extends React.Component {
    render() {
        const { name, active } = this.props;
        if (active) {
            return <Segment inverted color="green">
                {name}
            </Segment>;
        } else {
            return <Segment>{name}</Segment>;
        }
    }
}

export default MonthBox;