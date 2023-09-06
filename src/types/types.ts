export interface IHeader {
  user: string;
  showProfile: boolean;
}

export interface IBookdata {
  user: string;
  title: string;
  img: string;
  id: string;
  story?: string;
  category?: string;
  writer?: string;
  publisher?: string;
}

export interface IBookListData {
  author: string;
  cover: string;
  id: number;
  title: string;
  registered: {
    owner: {
      id: number;
      name: string;
      profileImage: string;
    };
  };
}
