import React, { useEffect, useState } from 'react';
import { Container } from '@components/layout/Container';
import { PostHead } from '@components/PostHead';
import { PostBody } from '@components/PostBody';
import { useParams } from 'react-router-dom';
import { formatDate } from '@lib/format';
import { Post as PostType } from '../../interfaces/post';
import api from '@service/api';

const Post: React.FC = () => {
  const [postData, updatePostData] = useState<PostType>({} as PostType);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      (async () => {
        const response = await api.get(`/posts/get/${slug}`);
        const data: PostType = await response.data;
        const { created_at } = data;
        data.created_at = formatDate(created_at);
        updatePostData(data);
      })();
    }
  }, [slug]);

  return (
    <Container>
      <PostHead {...postData} />
      <PostBody markdown={postData?.content} />
    </Container>
  );
};
export default Post;
