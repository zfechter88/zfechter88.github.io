'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>holdingp pattern</p>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
