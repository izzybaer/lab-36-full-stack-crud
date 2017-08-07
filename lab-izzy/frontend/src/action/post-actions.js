import superagent from 'superagent';

export const postSet = (posts) => ({
  type: 'POST_SET',
  payload: posts,
});

export const postCreate = (post) => ({
  type: 'POST_CREATE',
  payload: post,
});

export const postUpdate = (post) => ({
  type: 'POST_UPDATE',
  payload: post,
});

export const postDelete = (post) => ({
  type: 'POST_DELETE',
  payload: post,
});

export const postsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/posts`)
    .then( res => {
      dispatch(postSet(res.body));
      return res;
    });
};

export const postCreateRequest = (post) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/posts`)
    .send(post)
    .then(res => {
      dispatch(postCreate(res.body));
      return res;
    });
};

export const postDeleteRequest = (post) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/posts/${post._id}`)
    .then(res => {
      dispatch(postDelete(post));
      return res;
    });
};
