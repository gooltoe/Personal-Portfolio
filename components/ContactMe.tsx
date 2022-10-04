import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:joerhoecommerce@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I've got just what you need.{" "}
          <span className="underline decoration-[#709DFF]/50">Let's Talk.</span>
        </h4>

        <div className="flex justify-evenly">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#709DFF] h-7 w-7 animate-pulse" />
            <p>+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#709DFF] h-7 w-7 animate-pulse" />
            <p>email@email.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#709DFF] h-7 w-7 animate-pulse" />
            <p>123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2"
        >
          <div className="space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#709DFF] py-5 px-10 rounded-md text-gray-700 font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
