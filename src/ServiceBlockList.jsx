import React, { useState } from 'react';
import EditServiceOrder from './EditServiceOrder'; // Import the EditServiceOrder modal
import ServiceBlock from './ServiceBlock'; // Import the ServiceBlock component

const ServiceBlockList = () => {
  const [serviceBlocks, setServiceBlocks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const handleAddServiceBlock = () => {
    setCurrentService({
      serviceName: '',
      clientNames: [],
      performers: [],
      time: '',
      status: 'Active',
      price: '',
      reward: ''
    });
    setModalOpen(true);
  };

  const handleSaveServiceBlock = (newService) => {
    setServiceBlocks([...serviceBlocks, newService]);
  };

  return (
    <div>
      <button className="add-button" onClick={handleAddServiceBlock}>Добавить</button>

      <EditServiceOrder
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        service={currentService}
        onSave={handleSaveServiceBlock}
      />

      <div className="service-blocks">
        {serviceBlocks.map((service, index) => (
          <ServiceBlock key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBlockList;
