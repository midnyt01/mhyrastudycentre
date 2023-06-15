import { useState } from "react";

const ExpandableCell = ({ value, onExpand }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
      onExpand();
    };
  
    return (
      <div onClick={handleExpandClick}>
        {expanded ? (
          <div>{value}</div>
        ) : (
          <div>{value.substring(0, 50)}...</div>
        )}
      </div>
    );
  };

  export default ExpandableCell;