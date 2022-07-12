import httpClient from "@/HttpClient";

//Action Types
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";

//Action Creator
export const fetchUsers = (page, size) => (dispatch) => {
  return dispatch({
    type: FETCH_USERS,
    payload: httpClient.get("/api/users", { page, size }),
  });
};
