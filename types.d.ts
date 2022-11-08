export interface Video {
  caption: string;
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      // Todo:if doesn't work use "_ref:string"
      _ref: string;
    };
  }[];
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  postedBy: {
    image: string;
    userName: string;
    _id: string;
  };
  userId: string;

  video: {
    asset: {
      url: string;
      _id: string;
    };
  };
  _id: string;
}
export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}
