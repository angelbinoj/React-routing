import React from 'react';


const Home = () => (
  <div className=' w-full h-full flex justify-center'>
    <div className='mt-10 border-4 rounded-sm h-30 sm:w-3/4 lg:w-2/4 h-fit  px-2 shadow-2xl'>
      <div>
        <h2 className='uppercase italic  text-xl font-semibold p-5'>Welcome to our User Management System !</h2>
      </div>
      <div className='my-10 px-5 '>
        <p>Our platform makes it simple and efficient to manage users, whether you’re registering new members, accessing your account, or keeping track of customer information. Designed with ease-of-use and security in mind, our system ensures a smooth experience for everyone.<br /><br />

          <b>Features Overview:</b>
          With our system, you can quickly register and create your personal account, log in securely, and access a comprehensive list of customers. Enjoy powerful features like user role management, detailed customer information, and a user-friendly dashboard to stay organized and productive.

          Security and Privacy:
          We prioritize your privacy and the security of your data. Every account is protected with modern encryption standards, ensuring that your personal information and customer data remain safe and confidential.

          Get Started Today:
          Joining is easy! Simply register to create your account, or log in if you already have one. Once logged in, you’ll have instant access to your customer list and all the tools you need to manage your users efficiently. Experience seamless user management like never before!
        </p>
      </div>
    </div>
  </div>
);

export default Home;