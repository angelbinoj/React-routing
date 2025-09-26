import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", age: "" });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch customer list
  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/customer", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setCustomers(res.data.data);
      console.log(res.data);

    } catch (err) {
      console.error("Fetch failed:", err.message);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        contactInfo:{
          email: formData.email,
          phone: formData.phone,
          age: Number(formData.age)
        }
      };
      if (editingId) {
        // Update existing customer
        const res = await axios.patch(
          `http://localhost:3000/api/customer/${editingId}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCustomers(customers.map(c => c._id === editingId ? res.data.data : c));
        setEditingId(null);
      } else {
        // Add new customer
        const res = await axios.post(
          "http://localhost:3000/api/customer",
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCustomers([...customers, res.data.data]);
      }
      setFormData({ name: "", email: "", phone: "", age: "" });
      fetchCustomers();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Delete customer
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/customer/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCustomers(customers.filter(c => c._id !== id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Set form for editing
  const editCustomer = (customer) => {
    setFormData({ name: customer.name, email: customer.contactInfo.email, phone: customer.contactInfo.phone, age: customer.contactInfo.age });
    setEditingId(customer._id);
  };

  return (
    
      
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[calc(100vh-5rem)]">
          <div className="px-32 py-10  bg-slate-50 border border-slate-900 text-center flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full bg-gray-700 rounded-lg p-8 text-white">
            <div className="flex flex-col gap-3 mb-2">
              <input className="p-2 rounded-sm text-gray-900" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input className="p-2 rounded-sm text-gray-900" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input className="p-2 rounded-sm text-gray-900" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <input className="p-2 rounded-sm text-gray-900" type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
            </div>
            <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 my-8 rounded-md" type="submit">{editingId ? "Update Customer" : "Add Customer"}</button>
          </form>

          </div>

          <div className="px-20 border bg-slate-500  border-slate-900 text-center flex flex-col justify-center items-center">
          

            <h2 className='uppercase text-center text-white text-2xl font-bold p-5'>Customer List</h2>
            <ul class="w-full text-sm font-medium  rounded-lg bg-slate-100 border-gray-600 text-slate-500">
              {customers?.map(c => (
                <li className="w-full flex justify-between p-2 border-gray-400 border-b-2 rounded-t-lg " key={c?._id}><div><span>
                  {c?.name} - {c?.contactInfo?.email} - {c?.contactInfo?.phone} - {c?.contactInfo?.age}</span></div>

                  <div ><button onClick={() => editCustomer(c)} className=' bg-yellow-500  text-white p-1 px-2 mr-2 rounded-sm'>Update</button>
                    <button onClick={() => deleteCustomer(c._id)} className=' bg-red-600 text-white p-1 px-2 rounded-sm'>Delete</button>
                  </div>

                </li>
              ))}
            </ul>
          
          </div>

        </div>

    
   
  );
}

export default Users;
