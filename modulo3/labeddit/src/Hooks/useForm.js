import React, { useState } from "react";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clear = () => {
    setForm(initialValues);
  };

  // Lembra que estou mandando um objeto com return do Hook.
  return { form, onChange, clear };
};

export default useForm;
