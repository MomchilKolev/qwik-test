import request, { gql } from "graphql-request";
import { LIMIT, URL } from "./constants";
import type { PostRequestType, PostType } from "./types";

const GetAllPostsQuery = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

export const getPosts = async (page: number = 1) => {
  return await request(URL, GetAllPostsQuery, {
    options: {
      paginate: {
        page,
        limit: LIMIT,
      },
    },
  });
};

const CreatePostQuery = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const createPost = async (post: PostRequestType): Promise<PostType> => {
  const res: any = await request(URL, CreatePostQuery, {
    input: {
      ...post,
    },
  });
  return res.createPost;
};

const UpdatePostQuery = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export const updatePost = async (post: PostType) => {
  const { id, ...rest } = post;
  const res: any = await request(URL, UpdatePostQuery, {
    id: +id,
    input: rest,
  });
  return res.updatePost;
};

const DeletePostQuery = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

export const deletePost = async (id: string) => {
  const res: any = await request(URL, DeletePostQuery, {
    id: +id,
  });
  return res.deletePost;
};
