import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
    posts: [
        { id: 1, message: "It's my first post!", likesCount: 20 },
        { id: 2, message: "Hi, how are you?", likesCount: 15 },
        { id: 3, message: "It's my first post!", likesCount: 20 },
        { id: 4, message: "Hi, how are you?", likesCount: 15 },
        { id: 5, message: "It's my first post!", likesCount: 20 },
        { id: 6, message: "Hi, how are you?", likesCount: 15 },
        { id: 7, message: "It's my first post!", likesCount: 20 },
        { id: 8, message: "Hi, how are you?", likesCount: 15 },
        { id: 9, message: "It's my first post!", likesCount: 20 },
        { id: 10, message: "Hi, how are you?", likesCount: 15 },
        { id: 11, message: "It's my first post!", likesCount: 20 },
        { id: 12, message: "Hi, how are you?", likesCount: 15 },
    ],
};

test('new post should be added', () => {
    let action = addPost("test post");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(13);
    expect(newState.posts[12].message).toBe("test post");
});

test('after deleting post length of posts should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(11);
});

test('after deleting wrong post length of posts shouldn`t be decremented', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(12);
});
