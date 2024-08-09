import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <h1>This is layout admin</h1>
      <div className="admin-content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
