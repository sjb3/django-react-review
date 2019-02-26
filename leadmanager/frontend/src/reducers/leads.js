"use strict";
// get from backend
import { GET_LEADS, DELETE_LEAD, POST_LEAD } from "../actions/types.js";

const initialState = {
  leads: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload) // filter through
      };
    case POST_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };
    default:
      return state;
  }
};
