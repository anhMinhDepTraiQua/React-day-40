import React, { useEffect } from "react";
import { hooks as postHooks } from "../../features/post";

export default function PostsList() {
  const { data, loading, error, getPosts } = postHooks.usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>

      {data.length === 0 ? (
        <p>Không có bài viết nào.</p>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
