import React, { useEffect } from "react";
import { hooks as userHooks } from "../../features/user";

export default function UsersList() {
  const { data, loading, error, getUsers } = userHooks.useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <div className="spinner" />
        <p>Đang tải dữ liệu...</p>
      </div>
    );

  if (error) return <p style={{ color: "red" }}>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách Users</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {data.map((user) => (
          <div
            key={user.id}
            style={{
              padding: 16,
              borderRadius: 10,
              border: "1px solid #ddd",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
