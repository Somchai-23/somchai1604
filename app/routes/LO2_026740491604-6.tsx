import { useState } from "react";

export default function PetForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    sex: "",
    description: "",
    ownerName: "",
    ownerEmail: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      birthdate: "",
      sex: "",
      description: "",
      ownerName: "",
      ownerEmail: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded shadow-md text-black">
      <h2 className="text-lg font-semibold mb-4 text-black">การเพิ่มข้อมูลนามบัตร</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black">Photo:</label>
          <input type="file" onChange={handleFileChange} className="border p-1 text-black" />
        </div>
        <div>
          <label className="text-black">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-1 w-full text-black"
          />
        </div>
        <div>
          <label className="text-black">Birthdate:</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="border p-1 w-full text-black"
          />
        </div>
        <div>
          <label className="text-black">Sex:</label>
          <div className="space-x-4 text-black">
            <label>
              <input
                type="radio"
                name="sex"
                value="Male"
                checked={formData.sex === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="Female"
                checked={formData.sex === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="Other"
                checked={formData.sex === "Other"}
                onChange={handleChange}
              />{" "}
              Other
            </label>
          </div>
        </div>
        <div>
          <label className="text-black">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-1 w-full text-black"
          />
        </div>
        <h3 className="text-md font-semibold text-black">Owner</h3>
        <div>
          <label className="text-black">Name:</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="border p-1 w-full text-black"
          />
        </div>
        <div>
          <label className="text-black">Email:</label>
          <input
            type="email"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            className="border p-1 w-full text-black"
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
            บันทึกข้อมูล
          </button>
          <button type="button" onClick={handleClear} className="bg-gray-300 px-4 py-1 rounded">
            เคลียร์ข้อมูล
          </button>
        </div>
      </form>
      <div className="mt-6 border-t pt-4 text-black">
        <h3 className="text-md font-semibold text-black">ข้อมูล</h3>
        <p>
          <strong>Name:</strong> {formData.name || "กรุณากรอกชื่อ"}
        </p>
        <p>
          <strong>Birthdate:</strong> {formData.birthdate || ""}
        </p>
        <p>
          <strong>Sex:</strong> {formData.sex || "กรุณาเลือกเพศ"}
        </p>
        <p>
          <strong>Owner Name:</strong> {formData.ownerName || "กรุณากรอกชื่อ"}
        </p>
        <p>
          <strong>Email:</strong> {formData.ownerEmail || "กรุณากรอกอีเมล์"}
        </p>
        {formData.photo && <p><strong>Photo:</strong> {formData.photo.name}</p>}
      </div>
    </div>
  );
}
