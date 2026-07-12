import React, { useState, useEffect } from 'react';

// Free JSON API for users - JSONPlaceholder
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const FetchApp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // New user form state
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    username: ''
  });
  
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Search filter with API (simulated server-side search)
  const handleSearch = async (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    
    if (searchValue.trim() === '') {
      setFilteredUsers(users);
      return;
    }

    // Simulating API search with query parameter
    setLoading(true);
    try {
      // In real scenario: fetch(`${API_URL}?q=${searchValue}`)
      // Since JSONPlaceholder doesn't support search, we'll filter locally
      // but simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.username.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filtered);
    } catch (err) {
      setError('Search failed');
    } finally {
      setLoading(false);
    }
  };

  // Delete user with API
  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete user');
      
      // Remove user from local state
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
      setFilteredUsers(
        filteredUsers.filter(user => user.id !== userId)
      );
      
      alert('User deleted successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add user with API
  const handleAddUser = async (e) => {
    e.preventDefault();
    
    if (!newUser.name || !newUser.email) {
      alert('Name and Email are required!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newUser,
          id: Date.now() // JSONPlaceholder will ignore this, but we use it for local state
        })
      });

      if (!response.ok) throw new Error('Failed to add user');
      
      const addedUser = await response.json();
      // JSONPlaceholder returns the posted data with ID 11
      const userWithId = { ...addedUser, id: Date.now() };
      
      // Add user to local state
      const updatedUsers = [...users, userWithId];
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      
      // Reset form
      setNewUser({ name: '', email: '', phone: '', username: '' });
      setShowAddForm(false);
      alert('User added successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👥 User Management</h1>
      
      {/* Error Display */}
      {error && (
        <div style={styles.error}>
          ⚠️ Error: {error}
          <button onClick={() => setError(null)} style={styles.closeBtn}>✕</button>
        </div>
      )}

      {/* Toolbar */}
      <div style={styles.toolbar}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search users by name, email, or username..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />
          {loading && <span style={styles.loadingSpinner}>⏳</span>}
        </div>
        
        <button 
          onClick={() => setShowAddForm(!showAddForm)} 
          style={styles.addButton}
        >
          {showAddForm ? '✕ Cancel' : '➕ Add User'}
        </button>
      </div>

      {/* Add User Form */}
      {showAddForm && (
        <form onSubmit={handleAddUser} style={styles.form}>
          <h3>Add New User</h3>
          <div style={styles.formGrid}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={newUser.name}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={newUser.email}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={newUser.username}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={newUser.phone}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? 'Adding...' : 'Add User'}
          </button>
        </form>
      )}

      {/* User Count */}
      <div style={styles.count}>
        Showing {filteredUsers.length} of {users.length} users
        {searchTerm && ` (filtered by "${searchTerm}")`}
      </div>

      {/* Users List */}
      {loading && users.length === 0 ? (
        <div style={styles.loading}>Loading users...</div>
      ) : (
        <div style={styles.userGrid}>
          {filteredUsers.length === 0 ? (
            <div style={styles.noUsers}>No users found</div>
          ) : (
            filteredUsers.map(user => (
              <div key={user.id} style={styles.userCard}>
                <div style={styles.userHeader}>
                  <h3 style={styles.userName}>{user.name}</h3>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    style={styles.deleteBtn}
                    disabled={loading}
                  >
                    🗑️
                  </button>
                </div>
                <p style={styles.userDetail}>📧 {user.email}</p>
                <p style={styles.userDetail}>👤 @{user.username}</p>
                {user.phone && (
                  <p style={styles.userDetail}>📱 {user.phone}</p>
                )}
                {user.website && (
                  <p style={styles.userDetail}>🌐 {user.website}</p>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '30px',
    fontSize: '2.5rem',
    borderBottom: '3px solid #3498db',
    paddingBottom: '10px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '15px'
  },
  searchContainer: {
    flex: 1,
    minWidth: '250px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '25px',
    border: '2px solid #dfe6e9',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: 'white'
  },
  loadingSpinner: {
    marginLeft: '10px',
    fontSize: '20px'
  },
  addButton: {
    padding: '12px 24px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap'
  },
  form: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '25px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e1e8ed'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '15px'
  },
  input: {
    padding: '12px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #dfe6e9',
    outline: 'none',
    transition: 'border 0.3s ease'
  },
  submitBtn: {
    padding: '12px 30px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  },
  count: {
    color: '#7f8c8d',
    marginBottom: '20px',
    fontSize: '14px'
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  },
  userCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    border: '1px solid #e1e8ed'
  },
  userHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px'
  },
  userName: {
    margin: 0,
    color: '#2c3e50',
    fontSize: '1.2rem'
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userDetail: {
    margin: '8px 0',
    color: '#555',
    fontSize: '14px'
  },
  error: {
    backgroundColor: '#fde8e8',
    color: '#c0392b',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #f5c6cb'
  },
  closeBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#c0392b'
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '18px',
    color: '#7f8c8d'
  },
  noUsers: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '18px',
    color: '#7f8c8d',
    gridColumn: '1 / -1'
  }
};

export default FetchApp;