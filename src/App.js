import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import ServiceBlock from './ServiceBlock';
import DatePickerComponent from './DatePickerComponent'; // Import the DatePickerComponent
import './App.css';
import ServiceBlockList from './ServiceBlockList';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar stays on the left */}
        <ServiceBlockList />
        <div className="content">
          <Routes>
            <Route 
              path="/" 
              element={ 
                <div className="main-content">
                  <div className="service-blocks-container">
                    <ServiceBlock
                      serviceName="Аренда ласт"
                      clientNames={["John Doe", "Jane Smith"]}
                      time="10:30"
                      status="Выполнена"
                    />
                    <ServiceBlock
                      serviceName="Аренда акваланга"
                      clientNames={["Alice Brown"]}
                      time="12:00"
                      status="Рассматривается"
                    />
                    <ServiceBlock
                      serviceName="Дайвинг"
                      clientNames={["Alice Brown"]}
                      time="13:15"
                      status="Рассматривается"
                    />
                  </div>
                  <div className="date-picker-container">
                    <DatePickerComponent /> {/* Include the DatePicker here */}
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
