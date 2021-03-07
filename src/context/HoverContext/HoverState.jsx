import React, { useReducer } from "react";
import HoverContext from "./hoverContext";
import HoverReducer from "./hoverReducer";
import { HOVER_MESSAGE } from "../types";

const HoverState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(HoverReducer, initialState);

  const setMessageHovered = (msg, type) => {
    dispatch({
      type: HOVER_MESSAGE,
      payload: { msg, type },
    });
  };

  return (
    <HoverContext.Provider
      value={{
        messageHovered: state,
        setMessageHovered,
      }}
    >
      {props.children}
    </HoverContext.Provider>
  );
};

export default HoverState;
