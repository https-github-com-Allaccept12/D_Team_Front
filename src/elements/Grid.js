import React from "react";
import tw from "tailwind-styled-components";

const Btime = tw.div` 
    bg-blue-400 p-4 w-full
    text-gray-200 font-sanss2 
     ${(props) => (props.direction === "right" ? `` : "")};
     ${(props) => (props.direction === "left" ? `absolute left-2` : "")};
     ${(props) => (props.color === "trans" ? `bg-transparent` : "")};
     ${(props) => (props.shadow === "medium" ? `shadow-md` : "")};
     ${(props) => (props.size === "large" ? `p-40` : "")};
` 

const Grid = (props) => {
  const {
    children,
    direction,
    color,
    shadow,
    size
  } = props;

  return (
      <React.Fragment>
      <Btime direction={direction} color={color} shadow={shadow} size={size}>
        {children}
      </Btime>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  direction: "",
  is_trans: "",
  shadow: "",
  size: ""
};

export default Grid;
