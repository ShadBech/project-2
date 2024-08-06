import React, { useState } from 'react';

const AccountInfo = () => {
  const [firstName, setFirstName] = useState('Mark');
  const [lastName, setLastName] = useState('Cole');
  const [email, setEmail] = useState('swoo@gmail.com');
  const [phone, setPhone] = useState('+1 0231 4554 452');

  const handleSave = () => {
    // Implement save logic here
    console.log('Saved');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-white p-4 shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img 
            src="https://s3-alpha-sig.figma.com/img/e106/1d6d/7a2a7662770083f211f37bc54523a829?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zk5RXUI3LoaN4LmuD5kIQIzvrPh6o0fmPEAe7X1E6VoDxgz23YVZOvIyz2FzyhcOj0taZg6P3vwTlrfmmSwvUd1IBAWqHNpId31N-ZrH~Dk6AkxJLiujQjYZZ3nsgsURIDDvHkqQBjrRQtVmTMBdwpE828DdEXX6rk9PflYsL-SEjEmMSQDYMG01miwWDn0iXdJ3t5ASUuYTJeQagJrszpMtTQfYnUyq3i-Jf3ALnZfCZOm4PU-wPvrPTq6n6d1fqMuuhuRda8l0rSd53bIwEuHjvA2RS8EUbR5xrFrqgfOD9IC405Hf~SUjvyZuewob-Q4Hx4~itCDbaI-oAtxQZg__" 
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">{firstName} {lastName}</h2>
          <p>{email}</p>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 text-green-500 bg-gray-100 rounded-md">Account info</a>
          <a href="#" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">My order</a>
          <a href="#" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">My address</a>
          <a href="#" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">Change password</a>
        </nav>
      </aside>
      <main className="w-3/4 p-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-8">Account Info</h1>
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number (Optional)</label>
              <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button 
              onClick={handleSave} 
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              SAVE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountInfo;
