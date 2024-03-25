"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function Form() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [validationError, setValidationError] = useState("");
  const [formState, setFormState] = useState(initialFormState);
  const formRef = useRef<HTMLFieldSetElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const form = formRef.current;
      gsap.to(
        { val: 0 },
        {
          val: 1,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          onUpdate: function () {
            const progress = this.progress();
            const shadow1 = gsap.utils.interpolate(7, 10, progress);
            const shadow2 = gsap.utils.interpolate(10, 15, progress);
            const shadow3 = gsap.utils.interpolate(21, 25, progress);
            const shadow4 = gsap.utils.interpolate(42, 45, progress);

            form.style.boxShadow = `
                0 0 ${shadow1}px #fff, 
                0 0 ${shadow2}px #f09, 
                0 0 ${shadow3}px #f09, 
                0 0 ${shadow4}px #f09`;
          },
        }
      );
    }
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setValidationError("");
    },
    []
  );
  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const isInvalid = Object.values(formState).some(
        (value) => value.length < 3
      );
      if (isInvalid) {
        setValidationError("All fields must be at least 3 characters long.");
        return;
      }
      setFormState(initialFormState);
      console.log(formState);
    },
    [formState]
  );

  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <fieldset
        className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-2"
        ref={formRef}
      >
        {validationError && <p className="text-red-500">{validationError}</p>}
        <label>
          First name
          <input
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="p-1 rounded w-full text-black"
          />
        </label>
        <label>
          Last name
          <input
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="p-1 rounded w-full  text-black"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-1 rounded w-full  text-black"
          />
        </label>
        <label>
          Message
          <input
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="p-1 rounded w-full h-[100px] flex flex-col items-start  text-black"
          />
        </label>
      </fieldset>
      <div className="flex justify-center w-full">
        <button className="text-black  font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline custom-bg-color mt-3  ">
          SEND IT
        </button>
      </div>
    </form>
  );
}
