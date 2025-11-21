import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <div style={{ display: "flex", gap: 20, padding: 20, borderBottom: "1px solid #ddd", marginBottom: 20, textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
      <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black", textDecoration: isActive ? "underline" : "none" })} to={"/posts"}>Posts List</NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black", textDecoration: isActive ? "underline" : "none" })} to={"/users"}>Users List</NavLink>
    </div>
  );
}