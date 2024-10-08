import React, { useState } from 'react';
import Select from 'react-select';  // Import react-select
import './EditServiceOrder.css';     // Ensure to use the correct CSS file

const EditServiceOrder = ({ isOpen, onClose, service, onSave }) => {
  const [serviceName, setServiceName] = useState(service.serviceName);
  const [time, setTime] = useState(service.time);
  const [status, setStatus] = useState(service.status);
  const [clientNames, setClientNames] = useState(service.clientNames || []);
  const [performers, setPerformers] = useState(service.performers || []);  // New state for Performers
  const [price, setPrice] = useState(service.price || '');
  const [reward, setReward] = useState(service.reward || '');
  
  // List of all available clients
  const availableClients = [
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
    { label: "Alice Brown", value: "Alice Brown" },
    { label: "Bob White", value: "Bob White" },
    { label: "Charlie Black", value: "Charlie Black" }
  ];

  // List of all available performers
  const availablePerformers = [
    { label: "Peter Parker", value: "Peter Parker" },
    { label: "Tony Stark", value: "Tony Stark" },
    { label: "Natasha Romanoff", value: "Natasha Romanoff" },
    { label: "Bruce Wayne", value: "Bruce Wayne" },
    { label: "Diana Prince", value: "Diana Prince" }
  ];

  if (!isOpen) return null;

  const handleSave = () => {
    const updatedService = { 
      serviceName, 
      clientNames, 
      performers,    // Include Performers in saved data
      time, 
      status, 
      price, 
      reward 
    };
    onSave(updatedService);
    onClose();
  };

  const handleAddClient = (selectedOption) => {
    const selectedClient = selectedOption.value;
    if (selectedClient && !clientNames.includes(selectedClient)) {
      setClientNames([...clientNames, selectedClient]);
    }
  };

  const handleRemoveClient = (clientToRemove) => {
    setClientNames(clientNames.filter(client => client !== clientToRemove));
  };

  const handleAddPerformer = (selectedOption) => {
    const selectedPerformer = selectedOption.value;
    if (selectedPerformer && !performers.includes(selectedPerformer)) {
      setPerformers([...performers, selectedPerformer]);
    }
  };

  const handleRemovePerformer = (performerToRemove) => {
    setPerformers(performers.filter(performer => performer !== performerToRemove));
  };

  // Filter out selected clients and performers from available options
  const filteredClients = availableClients.filter(client => !clientNames.includes(client.value));
  const filteredPerformers = availablePerformers.filter(performer => !performers.includes(performer.value));

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Service Block</h2>
        <label>Service Name:</label>
        <input 
          type="text" 
          value={serviceName} 
          onChange={(e) => setServiceName(e.target.value)} 
        />
        
        <label>Client Names:</label>
        <div className="client-names">
          {clientNames.map((client, index) => (
            <div key={index} className="client-item">
              <span>{client}</span>
              <button onClick={() => handleRemoveClient(client)}>Remove</button>
            </div>
          ))}
        </div>

        {/* Searchable Select box for clients */}
        <Select
          options={filteredClients}  // Filtered clients that are not already selected
          onChange={handleAddClient}  // Handle selected client
          placeholder="Select client"
        />

        <label>Performers (Исполнители):</label>   {/* New field for Performers */}
        <div className="performers">
          {performers.map((performer, index) => (
            <div key={index} className="performer-item">
              <span>{performer}</span>
              <button onClick={() => handleRemovePerformer(performer)}>Remove</button>
            </div>
          ))}
        </div>

        {/* Searchable Select box for performers */}
        <Select
          options={filteredPerformers}  // Filtered performers that are not already selected
          onChange={handleAddPerformer}  // Handle selected performer
          placeholder="Select performer"
        />

        <label>Time:</label>
        <input 
          type="text" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        
        <label>Price (Цена):</label>   {/* New field for Price */}
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Enter price"
        />
        
        <label>Reward (Вознаграждение):</label>   {/* New field for Reward */}
        <input 
          type="number" 
          value={reward} 
          onChange={(e) => setReward(e.target.value)} 
          placeholder="Enter reward"
        />

        <label>Status:</label>
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
        >
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditServiceOrder;
