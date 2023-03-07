import { Card, CardContent, CardHeader } from '@mui/material';
import { Post } from '../../../models/Post';

interface Props {
  postData: Post;
}

export const PostCard = ({ postData }: Props) => {
  console.log('postData', postData);

  return (
    <Card>
      <CardHeader title={postData.title} />
      <CardContent>teste</CardContent>
    </Card>
  );
};
