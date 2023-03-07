import { Box, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Post } from '../../../models/Post';
import { PostsService } from '../../../services/Posts.service';
import { PostCard } from '../PostCard/PostCard';

const Timeline = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePosts = async () => {
    setIsLoading(true);
    // Fetch more posts from your API or data source
    const response = await PostsService.getPosts();

    console.log('response', response);
    setPosts([...posts, ...response]);
    setIsLoading(false);
  };

  // Check if the user has scrolled to the end of the list
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    loadMorePosts();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posts]);

  useEffect(() => {
    loadMorePosts();
  }, []);

  return (
    <>
      <Grid container maxWidth="lg" spacing={4}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <PostCard postData={post} />
          </Grid>
        ))}
      </Grid>
      {isLoading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Timeline;
