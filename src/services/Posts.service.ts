import { AxiosResponse } from 'axios';

let showReponsesInConsole = process.env.REACT_APP_SHOW_RESPONSES_IN_CONSOLE;

const postsUrl = '/posts';

export const PostsService = {
  getPosts: async () => {
    let response: AxiosResponse | undefined;
    try {
      // return (response = await axiosInstance.post(loginUrl, data));

      //gere mais 5 posts
      return [
        {
          id: 1,
          title: 'Post 1',
          body: 'Post 1 body',
          userId: 1,
          media: [
            {
              id: 1,
              url: 'https://picsum.photos/1920/1080',
              type: 'image'
            },
            {
              id: 2,
              url: 'https://picsum.photos/1280/720',
              type: 'image'
            }
          ]
        },
        {
          id: 2,
          title: 'Post 2',
          body: 'Post 2 body',
          userId: 1
        },
        {
          id: 3,
          title: 'Post 3',
          body: 'Post 3 body',
          userId: 1
        },
        {
          id: 4,
          title: 'Post 4',
          body: 'Post 4 body',
          userId: 1
        },
        {
          id: 5,
          title: 'Post 5',
          body: 'Post 5 body',
          userId: 1
        }
      ];
    } catch (err) {
      console.log('Error in PostsService.getPosts', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('PostsService.getPosts', response);
      }
    }
  }
};
