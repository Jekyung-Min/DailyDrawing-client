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
    post: {
      id: null,
      title: null,
      DrawingImg: null,
      description: null,
      isCompleted: null,
      Users_id: null,
    },
    allPosts: [],
  },
  postComments: [],
  postTags: [],
  likes: { count: null, myLikes: [] },
};
