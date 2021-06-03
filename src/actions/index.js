import axios from "axios";

// action types
// sign part
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
// user part
export const GET_USER_INFO = "GET_USER_INFO";
// post part
export const GET_POST_INFO = "GET_POST_INFO";
export const GETALL_POST_INFO = "GETALL_POST_INFO";
// comment part
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
// tag part
export const GET_POST_TAGS = "GET_POST_TAGS";
// like part
export const GET_POSTLIKE_COUNT = "GET_POSTLIKE_COUNT";
export const GET_MY_LIKES = "GET_MY_LIKES";

// actions creator functions

// action creator: action type
