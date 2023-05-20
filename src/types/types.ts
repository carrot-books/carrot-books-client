export interface IHeader {
  user: string;
  showProfile: boolean;
  isNoticeOpen: boolean;
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
