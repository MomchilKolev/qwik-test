import { type Signal } from "@builder.io/qwik";

export interface StateType {
  posts: Signal<any>;
  lastPage: Signal<number>;
}

export interface PostType {
  id: string;
  title: string;
  body: string;
}

export interface PostRequestType {
  title: string;
  body: string;
}

export interface PostsResponseType {
  posts: {
    data: PostType[];
    meta: any;
  };
}
