import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Social } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = { socials: Social[] };
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ socials }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:joerhoecommerce@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };

  return (
    <div className="flex flex-col justify-evenly items-center md:pt-16">
      <div className="mb-20">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <h3 className="tracking-[3px] text-gray-500 text-sm uppercase text-center">
          Get In Touch
        </h3>
      </div>

      {/* <h4 className="text-2xl font-semibold text-center">
        <span className="underline decoration-[#709DFF]/50">Get in touch.</span>
      </h4> */}
      <div className="grid lg:grid-cols-5 gap-8 px-[10vw]">
        <div className="col-span-3 lg:col-span-2 w-full h-full">
          <div className="p-4 shadow-xl rounded-xl lg:hover:scale-105 duration-300 ease-in">
            <div className="max-w-[700px]">
              <img
                src="https://francescocolumbu.com/wp-content/uploads/2021/03/Best-Laptop-for-Front-End-Developer.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold pt-2">Joe Rho</h2>
              <p className="uppercase text-gray-500 tracking-widest">
                Web Developer
              </p>
              <p className="py-4">
                I am available for freelance projects. Contact me and let's
                talk.
              </p>
            </div>
            <div>
              <p className="uppercase text-gray-500 tracking-widest">
                Let's Connect
              </p>
              {socials.map((social) => {
                return (
                  <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor="transparent"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full h-full shadow-xl p-4 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <div className="grid md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col">
                  <label className="uppercase tracking-widest text-gray-500 text-sm pb-2">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase tracking-widest text-gray-500 text-sm pb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="contactInput"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="uppercase tracking-widest text-gray-500 text-sm py-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase tracking-widest text-gray-500 text-sm py-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="contactInput"
                  rows={6}
                />
              </div>
            </div>

            <button className="custom-button p-4 w-full rounded-md text-gray-800 font-bold text-lg mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
