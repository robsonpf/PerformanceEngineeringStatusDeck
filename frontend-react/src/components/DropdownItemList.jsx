import React from 'react';
import { Link, } from 'react-router-dom';
import { Dropdown, } from 'semantic-ui-react';

const DropdownItemList = (props) => {
  console.log(props)
  return [
    <Dropdown.Item key={0} text="Cover" as={Link} to="/" />,
    ...props.slides.map((slide, index) => {
      return <Dropdown.Item
        key={slide.id}
        text={`Slide ${index + 1}`}
        as={Link} 
        to={`/slide/${index + 1}`} />
    })
  ];
};

export default DropdownItemList;