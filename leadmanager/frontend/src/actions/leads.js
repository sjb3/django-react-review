"use strict";

import axios from "axios";
import { GET_LEADS, DELETE_LEAD, POST_LEAD } from "./types";

// GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => {
      console.error(err);
    });
};

// DELETE LEADS
export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => {
      console.error(err);
    });
};

// POST LEADS
export const postLead = lead => dispatch => {
  axios
    .post(`/api/leads/`, lead)
    .then(res => {
      dispatch({
        type: POST_LEAD,
        payload: res.data
      });
    })
    .catch(err => {
      console.error(err);
    });
};
