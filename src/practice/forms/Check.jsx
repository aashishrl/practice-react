// 1️⃣ User Profile Form fields: firstName, lastName, email, socialLinks (array of objects with { platform, url })
// Tasks:
// - Add a new social link dynamically.
// - Update the url of a specific social link.
// - Remove a social link.

import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    socialLinks: [
      {
        id: Date.now().toString(),
        platform: "",
        url: "",
      },
    ],
  });

  // Handle top-level input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle nested socialLinks input
  const handleSocialLinks = (index, name, value) => {
    const updatedLinks = [...form.socialLinks]; // copy array
    updatedLinks[index] = { ...updatedLinks[index], [name]: value }; // copy object + update key
    setForm({ ...form, socialLinks: updatedLinks }); // update state
  };

  // Add new social link
  const addSocialLink = () => {
    setForm({
      ...form,
      socialLinks: [
        ...form.socialLinks,
        { id: Date.now().toString(), platform: "", url: "" },
      ],
    });
  };

  // Remove social link
  const removeSocialLink = (index) => {
    const updatedLinks = [...form.socialLinks];
    updatedLinks.splice(index, 1);
    setForm({ ...form, socialLinks: updatedLinks });
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <form className="p-8 space-y-4" onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label>Social Links:</label>
        {form.socialLinks.map((link, index) => (
          <div key={link.id} className="flex space-x-2 items-center">
            <input
              type="text"
              placeholder="Platform"
              value={link.platform}
              onChange={(e) =>
                handleSocialLinks(index, "platform", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleSocialLinks(index, "url", e.target.value)}
            />
            <button type="button" onClick={() => removeSocialLink(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSocialLink}>
          Add Social Link
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
