import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, FolderTree, LogOut, Menu, X } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/bloglogin");
  };

  const navLinks = [
    { name: "Dashboard", path: "/admin-dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Manage Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Manage Categories", path: "/admin/categories", icon: <FolderTree size={20} /> },
    { name: "Manage Blogs", path: "/admin/blogs", icon: <FileText size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider text-orange-500">DIGINTRA</h1>
            <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Admin</span>
          </div>
          <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full rounded-lg transition-colors text-red-400 hover:bg-red-500/10 hover:text-red-400 font-medium"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6 justify-between shrink-0 shadow-sm z-10">
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 p-2 -ml-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex-1 md:flex-none"></div> {/* Spacer for mobile */}

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-700">Admin</p>
              {/* <p className="text-xs text-gray-500">System Administrator</p> */}
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-white">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
