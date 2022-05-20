import React from "react";
import { Input } from "..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import StaySafe from "../../assets/images/stay-safe.jpg";
import cogoToast from "cogo-toast";

export const Request = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required "),
    lastName: Yup.string().required("Last name is required "),
    amount: Yup.string().required("Amount is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^([+234]{4})[0-9]{10}$/,
        "Phone number must match this format +2348023456789"
      ),
    email: Yup.string()
      .email("Valid email address is required")
      .required("Valid email address is required"),
    story: Yup.string()
      .min(50, "Enter at least 100 charcters")
      .required("This field is required"),
  });
  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    cogoToast.success(
      " Your record has been taken successfully. We will contact youin 24 hours for the next move. Stay safe"
    );
    window.location.reload();
  };
  return (
    <div className="bg-white fixed h-full w-full top-12 left-0 ">
      <div className="grid lg:grid-cols-2 overflow-y-scroll h-full">
        <div className="col-span-1 py-12 px-8 md:px-20">
          <h2 className="text-3xl text-[#0E8427] mb-3">
            Let's get to know you
          </h2>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                {...register("firstName")}
                label="First Name"
                placeholder="Enter first name"
                requiredLabel
                errorMessage={errors.firstName?.message}
              />
              <Input
                {...register("lastName")}
                label="Last Name"
                placeholder="Enter last name"
                requiredLabel
                errorMessage={errors.lastName?.message}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                {...register("email")}
                label="Email Address"
                placeholder="Enter email address"
                requiredLabel
                errorMessage={errors.email?.message}
              />
              <Input
                {...register("phone")}
                label="Mobile Number"
                placeholder="Enter mobile number"
                requiredLabel
                errorMessage={errors.phone?.message}
              />
            </div>
            <Input
              {...register("amount")}
              label="Amount"
              placeholder="Enter Amount in Naira"
              requiredLabel
              errorMessage={errors.amount?.message}
            />
            <div>
              <div className="text-left col-span-1 md:col-span-2">
                <label htmlFor="" className="text-left w-full ">
                  Tell Us Your Story
                  <span className="text-red-400">*</span>
                  <br />
                  <span className="text-sm text-gray-400">
                    Character Count(0/350)
                  </span>
                </label>
                <textarea
                  id="the-textarea"
                  {...register("story")}
                  maxLength={350}
                  placeholder="Start Typin..."
                  autoFocus
                  className=" w-full border border-base-gray-100 outline-none rounded-lg  py-2 text-[0.94rem] bg-transparent"
                ></textarea>
              </div>
              {errors?.story && (
                <div className="invalid-feedback">{errors.story?.message}</div>
              )}
            </div>

            <button className="bg-[#0E8427] float-right text-white px-5 py-3 rounded-lg hover:bg-white hover:text-[#0E8427] border border-[#0E8427] transition duration-700 ease-in-out">
              Request
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img src={StaySafe} alt="Covid-19" className="h-full w-auto" />
          </div>
          <div className="h-auto py-16 w-[100%] text-white bg-[#0E8427]">
            <p className="relative top-1/4 text-3xl md:text-4xl text-bolder text-center">
              Help is on the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
