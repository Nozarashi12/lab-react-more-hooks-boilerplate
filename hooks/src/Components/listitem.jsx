import React, { useState } from "react";

const ListItem = (props) => {
  const [IsHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };

  return (
    <div>
      <h3>{IsHidden ? "Type Something" : props.text}</h3>
      <button onClick={toggleVisibility}>Toggle</button>
    </div>
  );
};

export default ListItem;