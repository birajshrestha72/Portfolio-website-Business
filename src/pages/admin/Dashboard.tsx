import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Disneyland CMS</h2>
          <p className="user-info">{user?.username}</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin/dashboard" className="nav-item active">
            Dashboard
          </Link>
          <Link to="/admin/games" className="nav-item">
            Manage Games
          </Link>
          <Link to="/admin/locations" className="nav-item">
            Manage Locations
          </Link>
          <Link to="/admin/content" className="nav-item">
            Edit Content
          </Link>
          <Link to="/admin/settings" className="nav-item">
            Settings
          </Link>
          <button onClick={handleLogout} className="nav-item logout-btn">
            Logout
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>Dashboard</h1>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">🎮</div>
            <h3>Manage Games</h3>
            <p>Add, edit, or remove games and services</p>
            <Link to="/admin/games" className="card-link">
              Manage →
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📍</div>
            <h3>Manage Locations</h3>
            <p>Update location information and images</p>
            <Link to="/admin/locations" className="card-link">
              Manage →
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📝</div>
            <h3>Edit Content</h3>
            <p>Edit page content and descriptions</p>
            <Link to="/admin/content" className="card-link">
              Edit →
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Change username, email, and password</p>
            <Link to="/admin/settings" className="card-link">
              Settings →
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🏠</div>
            <h3>View Website</h3>
            <p>Preview the public website</p>
            <Link to="/" className="card-link">
              View →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
