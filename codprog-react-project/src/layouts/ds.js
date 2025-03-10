RootLayout.module.css

/* Global Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Background color and font */
body {
  font-family: "Roboto", sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

/* Header Styles */
header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

/* Navigation container */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Logo styles */
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  align-items: center;
}

.cod {
  color: #3498db;
}

.prog {
  color: #2ecc71;
  margin-left: 4px;
}

.logo a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

/* Navigation items */
.navItems {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.navItems li {
  margin: 0 15px;
}

.navItems a {
  text-decoration: none;
  color: #555;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navItems a:hover {
  color: #3498db;
}

/* Logout Button */
.logoutButton {
  background-color: #e74c3c;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logoutButton:hover {
  background-color: #c0392b;
}

.logoutSvg {
  width: 20px;
  height: 20px;
  fill: white;
}

/* Main content section */
main {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .navItems {
    flex-direction: column;
    margin-top: 20px;
  }

  .navItems li {
    margin: 10px 0;
  }

  .logoutButton {
    margin-top: 20px;
  }

  .logo {
    font-size: 45px;
  }
}
