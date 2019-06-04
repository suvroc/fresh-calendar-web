import React from 'react';

class FoodItem extends React.Component {
    render() {
      const { name } = this.props
      const imgUrl = `https://api.adorable.io/avatars/55/${name}.png`;
      return (
        <li className="item">
          <img src={imgUrl} alt="ddd" className="ui mini rounded image" />
          <div className="content">
            <h4 className="header">{name}</h4>
          </div>
        </li>
      );
    }
  }

  export default FoodItem;