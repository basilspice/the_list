import {
  LISTS_LIST_FAIL,
  LISTS_LIST_REQUEST,
  LISTS_LIST_SUCCESS,
  LISTS_CREATE_REQUEST,
  LISTS_CREATE_SUCCESS,
  LISTS_CREATE_FAIL,
  LISTS_UPDATE_REQUEST,
  LISTS_UPDATE_SUCCESS,
  LISTS_UPDATE_FAIL,
  LISTS_DELETE_REQUEST,
  LISTS_DELETE_SUCCESS,
  LISTS_DELETE_FAIL,
} from "../constants/listsConstants";

export const listListReducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case LISTS_LIST_REQUEST:
      return { loading: true };
    case LISTS_LIST_SUCCESS:
      return { loading: false, lists: action.payload };
    case LISTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTS_CREATE_REQUEST:
      return { loading: true };
    case LISTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case LISTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const listDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTS_DELETE_REQUEST:
      return { loading: true };
    case LISTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case LISTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const listUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LISTS_UPDATE_REQUEST:
      return { loading: true };
    case LISTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case LISTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
