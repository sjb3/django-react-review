"use strict";

import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_LEADS, DELETE_LEAD, POST_LEAD } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    // .catch(err => {
    //   console.error(err);
    // });
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEADS
export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
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
export const postLead = lead => (dispatch, getState) => {
  axios
    .post(`/api/leads/`, lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ postLead: "Lead Posted" }));
      dispatch({
        type: POST_LEAD,
        payload: res.data
      });
    })
    // .catch(err => {
    //   const errors = {
    //     msg: err.response.data,
    //     status: err.response.status
    //   };
    //   dispatch({
    //     type: GET_ERRORS,
    //     payload: errors
    //   });
    // });
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
