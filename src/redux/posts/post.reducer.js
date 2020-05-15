import { PostActionTypes } from "./post.actiontypes";

const INITIAL_STATE = {
  posts: [
    { authorAvatarImage: "https://randomuser.me/api/portraits/med/men/79.jpg" ,
    authorName: 'Duylt',
    postDate: new Date().toDateString(),
    postContentImage: "https://i.picsum.photos/id/544/1024/768.jpg",
    likesCount: 20,
    commentsCount: 30,
    viewsCount: 100,
    comments: [{
        commentorAvatar: "https://randomuser.me/api/portraits/med/women/70.jpg",
        commentorText: "This is a great Comment"
    }],
    id: 1  
},
  ],
};

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case PostActionTypes.ADD_POST:
    //     return {
    //         ...state,
    //         posts: addItem(state.posts, action.payload)
    //       };

    default:
      return state;
  }
};
