export const initialState = {
  user: {
    id: null,
    email: null,
    nickname: null,
    profileImg: null,
    accessToken: null,
  },
  postUserInfo: { nickname: null, profileImg: null },
  postInfo: {
    id: null,
    title: null,
    DrawingImg: null,
    description: null,
    isCompleted: null,
    Users_id: null,
  },
  allPostsInfo: [],
  postComments: [],
  postTags: [],
  postLikesCount: null,
  myLikes: [],
  search: [],
};
