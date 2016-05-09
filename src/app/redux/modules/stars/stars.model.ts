/** Type Definitions */

export interface IStars {
  isFetching?: boolean,
  count?: number,
  error?: boolean,
  message?: any
}

export interface IStarsAction {
  type: string;
  count?: number;
  message?: any;
}
