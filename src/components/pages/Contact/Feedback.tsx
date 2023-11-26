import GradientBtn from "../../buttons/GradientBtn";
import Card from "../../common/Card";

export default function Feedback() {
  return (
    <Card className="justify-center mt-6 w-40 bg-gray-100 border-2 p-2 rounded-xl shadow-xl text-xl">
      <form className="">
        <p className="text-2xl">Feedback & Queries</p>
        <div>
          <label className="text-sm">Select Issue*</label>
          <br></br>
          <select
            className="bg-gray-50 border border-gray-300  
                                        text-gray-600 text-sm rounded-lg  
                                        focus:border-blue-500 w-full p-2.5"
          >
            <option value="Feedback">-- Select Your Query --</option>
            <option value="Feedback">Feedback</option>
            <option value="Feedback">Community Related Queries</option>
            <option value="Feedback">Payment Related Issue</option>
            <option value="Feedback">Profile Related Queries</option>
            <option value="Feedback">Advertise With Us</option>
          </select>
          <br></br>
          <label className="text-sm">Email Address*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300  
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
            type="email"
            placeholder="abc@geeksforgeeks.org"
          />
          <br></br>
          <label className="text-sm">Contact No.</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500  
                                        w-full p-2.5"
            type="text"
            placeholder="1324567890"
          />
          <br></br>
          <label className="text-sm">Drop Your Query</label>
          <br></br>
          <textarea
            className="bg-gray-50 border border-gray-300  
                                            text-sm rounded-lg  
                                            focus:border-blue-500  
                                            w-full p-2.5"
            rows={4}
            cols={25}
            // maxlength={300}
            placeholder="Max Allowed Characters: 300"
          ></textarea>
          <br></br>
          <GradientBtn className={"w-full"} label={"Submit"}/>
        </div>
      </form>
    </Card>
  );
}
