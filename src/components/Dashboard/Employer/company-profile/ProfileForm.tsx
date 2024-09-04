import ImageInput from "./ImageInput";
import MultipleSelect from "./MultipleSelect";

const ProfileForm = () => {
  return (
    <div className="rounded-md py-1 ">
      <form className="w-full">
        <div className="bg-white p-6 rounded-sm shadow shadow-blue-300">
          <ImageInput />
          {/* ------------------- company name and email  -------------------- */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Company name</label>
              <input
                type="text"
                placeholder="company Name"
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Email"
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>
          {/* ------------------- phone and website ----------------- */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Phone</label>
              <input
                type="number"
                placeholder="Phone"
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Website</label>
              <input
                type="text"
                placeholder="web site link"
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>
          {/* ------------------------ team size company do------------------- */}
          <div className="md:flex gap-x-4 items-center">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Team Size</label>
              <select
                name=""
                id=""
                className="w-full p-1 bg-[#CBD5E1] overflow-auto rounded-sm"
              >
                <option value="">50-100</option>
                <option value="">150-250</option>
                <option value="">300-550</option>
                <option value="">1000+</option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%] ">
              <label htmlFor="">What does your company do?</label>
              <MultipleSelect />
            </div>
          </div>
          {/* -------------- about the company ------------ */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <label htmlFor="">About Company</label>
            <textarea
              name=""
              id=""
              className="w-full p-1 rounded-sm bg-[#CBD5E1]"
              placeholder="About Company ...."
            ></textarea>
          </div>
        </div>
        {/* ---------------------- contract info --------------- */}
        <div className="mt-6 w-full bg-white p-6 rounded-sm shadow shadow-blue-300">
          <h1>Contact Information</h1>
          <div className="md:flex items-center gap-x-4 mt-4">
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">Country</label>
              <input
                type="number"
                placeholder="Country..."
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 w-full md:w-[70%]">
              <label htmlFor="">City</label>
              <input
                type="text"
                placeholder="City ..."
                className=" w-full p-1 rounded-sm bg-[#CBD5E1]"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="">Complete Address</label>
            <input
              type="text"
              className="w-full bg-[#CBD5E1] p-1 rounded-sm"
              name=""
              id=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
