const Contact = () => {
  return (
    <div className="border border-white text-white rounded-2xl contact-form flex flex-col items-center gap-5 my-10 mx-auto w-[30%] py-5">
      <h1
        className="text-3xl font-bold">Contact Me</h1>
      <div className="w-[90%] flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input 
          className="bg-gray-200 p-2 rounded-md w-full"
          type="text" 
          placeholder="Name" 
        />
      </div>

      <div className="w-[90%] flex flex-col gap-2">
        <label htmlFor="name">Email:</label>
        <input 
          className="bg-gray-200 p-2 rounded-md w-full"
          type="text" 
          placeholder="Email" 
        />
      </div>

      <div className="w-[90%] flex flex-col gap-2">
        <label htmlFor="message">Message:</label>
        <textarea 
          rows={5}
          cols={50}
          className="bg-gray-200 p-2 rounded-md w-full" 
          placeholder="Message" />
      </div>
      

      <button className="bg-green-800 rounded-xl px-5 py-2 w-[50%]">Send</button>
    </div>
  ); 
}

export default Contact