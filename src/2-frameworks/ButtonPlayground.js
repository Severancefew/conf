import React from 'react';
import { Button } from '@alicantoio/ui-kit';

export class ButtonPlayGround extends React.Component {
  state = {
    count: 0,
  };

  increment = () =>
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));

  render() {
    return (
      <div>
        <Button
          onClick={this.increment}
          text={`Clicked times: ${this.state.count}`}
        />
      </div>
    );
  }
}
