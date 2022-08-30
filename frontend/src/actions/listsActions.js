import axios from "axios";
import {
  LISTS_LIST_FAIL,
  LISTS_LIST_REQUEST,
  LISTS_LIST_SUCCESS,
  LISTS_CREATE_FAIL,
  LISTS_CREATE_REQUEST,
  LISTS_CREATE_SUCCESS,
  LISTS_UPDATE_REQUEST,
  LISTS_UPDATE_SUCCESS,
  LISTS_UPDATE_FAIL,
  LISTS_DELETE_REQUEST,
  LISTS_DELETE_SUCCESS,
  LISTS_DELETE_FAIL,
} from "../constants/listsConstants";

export const listLists = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LISTS_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/lists`, config);

    dispatch({
      type: LISTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LISTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createListAction =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: LISTS_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/lists/create`,
        { title, content, category },
        config
      );

      dispatch({
        type: LISTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.responnse.data.message
          : error.message;
      dispatch({
        type: LISTS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteListAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LISTS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/lists/${id}`, config);

    dispatch({
      type: LISTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LISTS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateListAction =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: LISTS_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/lists/${id}`,
        { title, content, category },
        config
      );

      dispatch({
        type: LISTS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LISTS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
