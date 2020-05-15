import { PostActionTypes } from "./post.actiontypes";


export const addPostToWall = post => ({
    type: PostActionTypes.ADD_POST,
    payload: post
}

);