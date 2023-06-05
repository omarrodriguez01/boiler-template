import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Typing thanks to TS that allows for easier parsing and usage.
type DataItemType = 'Guest' | 'Booking' | 'Service' | 'Payment';

type Item = {
  id: number;
  name: string;
};

type FormData = {
  [key: string]: string | number;
};

const UpdateForm: React.FC = () => {
  const [selectedItemType, setSelectedItemType] = useState<DataItemType | ''>('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [itemList, setItemList] = useState<Item[]>([]);
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/api/${selectedItemType.toLowerCase()}s`);
        setItemList(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    if (selectedItemType) {
      fetchItems();
    }
  }, [selectedItemType]);

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItemType(event.target.value as DataItemType);
    setSelectedItem(null);
    setFormData({});
  };

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const itemId = parseInt(event.target.value);
    const selectedItem = itemList.find((item) => item.id === itemId);
    setSelectedItem(selectedItem || null);
    setFormData(selectedItem ? { ...selectedItem } : {});
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Update through the PUT endpoint my data
    try {
      await axios.put(`http://localhost:3002/api/${selectedItemType.toLowerCase()}s/${selectedItem?.id}`, formData);
      console.log('Item updated:', formData);
      alert("Succesfully updated the item!")
      // Reset the form data and selected item type
      setFormData({});
      setSelectedItem(null);
      setSelectedItemType('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = () => {
    if (selectedItemType && formData.id) {
      // Send a DELETE request to the corresponding endpoint
      axios
        .delete(`http://localhost:3002/api/${selectedItemType.toLowerCase()}sdelete/${formData.id}`)
        .then((response) => {
          // Handle successful deletion
          console.log(`Successfully deleted ${selectedItemType}:`, response.data);
          alert("Succesfully deleted the selected item!")
          // Reset the form data and selected item type
          setFormData({});
          setSelectedItem(null);
          setSelectedItemType('');
        })
        .catch((error) => {
          // Handle deletion error
          console.error(`Error deleting ${selectedItemType}:`, error);
        });
    }
  };

  return (
    <div>
      <h1>PUT, GET or DELETE Form</h1>
      <form>
        <div>
          <label htmlFor="item-type-select">Select Item Type:</label>
          <select id="item-type-select" value={selectedItemType} onChange={handleDropdownChange}>
            <option value="">Select...</option>
            <option value="Guest">Guest</option>
            <option value="Booking">Booking</option>
            <option value="Service">Service</option>
            <option value="Payment">Payment</option>
          </select>
        </div>
        {selectedItemType && (
          <div>
            <label htmlFor="item-select">Select Item:</label>
            <select id="item-select" value={selectedItem?.id || ''} onChange={handleItemChange}>
              <option value="">Select...</option>
              {itemList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedItem && (
          <div>
            <h2>Update {selectedItemType}</h2>
            <form>
              {Object.keys(selectedItem).map((key) => (
                <div key={key}>
                  <label htmlFor={key}>{key}:</label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button type="button" onClick={handleSubmit}>Update</button>
              <button type="button" onClick={handleDeleteItem} className="btn-delete">Delete</button>
            </form>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateForm;