let validatePost = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: post must have _id');
  if(!payload.title)
    throw new Error('VALIDATION ERROR: post must have title');
};

export default (state = [], action) => {
  let {type, payload} = action;
  switch(type){
  case 'POST_SET':
    return payload;
  case 'POST_CREATE':
    validatePost(payload);
    return [payload, ...state];
  case 'POST_UPDATE':
    validatePost(payload);
    return state.map(item =>
      item._id === payload._id ? payload : item);
  case 'POST_DELETE':
    validatePost(payload);
    return state.filter(item =>
      item._id !== payload._id);
  default:
    return state;
  }
};
