import axios from "axios";

//middlewares
export const fetchData = (url, config, action) => async dispatch => {
  try {
    const { data } = await axios.get(url, config);
    let result = data;

    dispatch(action(result));
  } catch (err) {
    return console.log(err);
  }
};
// action types
// sign part
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
// user part
export const GET_USER_INFO = "GET_USER_INFO";
export const PATCH_USER_PROFILE = "PATCH_USER_PROFILE";
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
// search part
export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";

// actions creator functions
// action creator: sign
export const signIn = ({ userData, accessToken }) => {
  return {
    type: SIGN_IN,
    payload: { ...userData, accessToken },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {
      id: null,
      email: null,
      nickname: null,
      profileImg: null,
      accessToken: null,
    },
  };
};

// action creator: user
export const getUserInfo = ({ userInfo }) => {
  return {
    type: GET_USER_INFO,
    payload: userInfo,
  };
};
export const patchUserProfile = ({ profileImg }) => {
  return {
    type: PATCH_USER_PROFILE,
    payload: profileImg,
  };
};

// action creator: post
export const getPostInfo = ({ post }) => {
  return {
    type: GET_POST_INFO,
    payload: post,
  };
};

export const getAllPostInfo = ({ postDatas }) => {
  return {
    type: GETALL_POST_INFO,
    payload: postDatas,
  };
};

// action creator: comment
export const getPostComments = ({ comments }) => {
  return {
    type: GET_POST_COMMENTS,
    payload: comments,
  };
};

// action creator: tag
export const getPostTags = ({ postTags }) => {
  return {
    type: GET_POST_TAGS,
    payload: postTags,
  };
};

// action creator: like
export const getPostLikeCount = ({ count }) => {
  return {
    type: GET_POSTLIKE_COUNT,
    payload: count,
  };
};

export const getMyLikes = ({ myLikes }) => {
  return {
    type: GET_MY_LIKES,
    payload: myLikes,
  };
};

// action creator: like
// export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";
export const getSearchResult = ({ postDatas }) => {
  return {
    type: GET_SEARCH_RESULT,
    payload: postDatas,
  };
};
