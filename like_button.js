'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>holding pattern</p>
    );
  }
}

let domContainer = document.getElementById('root');
ReactDOM.render(<LikeButton />, domContainer);
