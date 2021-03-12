// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         <span>{this.props.band}</span><button onClick={() => this.props.delete(this.props.key)}>DELETE</button>
//       </div>
//     );
//   }
// };

// export default Band;

import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band;