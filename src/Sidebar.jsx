// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Меню</h2>
      <ul>
        <li><Link to="/">Заявки</Link></li>
        <li><Link to="/clients">Клиенты</Link></li>
        <li><Link to="/report">Отчет о безопасности</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
