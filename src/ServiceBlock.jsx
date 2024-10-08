import React, { useState } from 'react';
import EditServiceOrder from './EditServiceOrder';
import './ServiceBlock.css';

const ServiceBlock = ({ serviceName, clientNames, time, status }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceDetails, setServiceDetails] = useState({
    serviceName,
    clientNames,
    time,
    status,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedService) => {
    setServiceDetails(updatedService);
  };

  return (
    <div className="service-block">
      <div className="service-info">
        <h3>{serviceDetails.serviceName}</h3>
        <p>Clients: {serviceDetails.clientNames.join(', ')}</p>
        <p>Time: {serviceDetails.time}</p>
        <p>Status: {serviceDetails.status}</p>
      </div>
      <button className="open-button" onClick={handleOpenModal}>
        Открыть
      </button>
      <EditServiceOrder
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={serviceDetails}
        onSave={handleSave}
      />
    </div>
  );
};

export default ServiceBlock;
