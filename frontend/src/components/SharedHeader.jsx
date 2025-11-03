import React from 'react';
import { Link } from 'react-router-dom';

const SharedHeader = ({ onLogout }) => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/appointment" style={styles.link}>Appointment</Link></li>
        <li><Link to="/profile" style={styles.link}>Profile</Link></li>
        <li><Link to="/prescription" style={styles.link}>Prescription</Link></li>
        <li><Link to="/chat" style={styles.link}>Chat</Link></li>
        <li style={{ marginLeft: 'auto' }}>
          <button
            onClick={onLogout}
            style={styles.logoutButton}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#007BFF',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    border: 'none',
    color: '#fff',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default SharedHeader;
