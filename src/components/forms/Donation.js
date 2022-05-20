import React from "react";
import { Input } from "..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MakeChange from "../../assets/images/make-change.jpg";
import cogoToast from "cogo-toast";
export const Donation = () => {
  const schema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^([+234]{4})[0-9]{10}$/,
        "Phone number must match this format +2348023456789"
      ),
    email: Yup.string()
      .email("Valid email address is required")
      .required("Valid email address is required"),
    amount: Yup.number().required("Amount required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    window.payWithGlade({
      MID: "GP_9695a6071e26433f929b490d7128ecbb",
      KEY: "b0e25a0647ed4276a42fcab6e1897103",
      email: data.email,
      firstname: data.firstName,
      lastname: data.lastName,
      amount: data.amount,
      meta_data: JSON.stringify({ amount: data.amount, currency: "NGN" }),
      description: "Payment link",
      title: "Glade Pay",
      bearer: "Customer",
      currency: "NGN",
      country: "NG",
      onclose: (err) => {
        cogoToast.error("Transaction not completed");
      },
      callback: (res) => {
        cogoToast.success("Transaction was successful");
      },
    });
  });

  return (
    <div className="bg-white fixed h-full w-full top-12 left-0 ">
      <div className="grid lg:grid-cols-2 overflow-y-scroll h-full">
        <div className="col-span-1 py-12 px-8 lg:px-20">
          <h2 className="text-3xl text-[#0E8427] mb-3">Donation</h2>
          <form action="" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                {...register("firstName")}
                name="firstName"
                label="First Name"
                placeholder="Enter first name"
                errorMessage={errors.firstName?.message}
              />
              <Input
                {...register("lastName")}
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
                errorMessage={errors.lastName?.message}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                {...register("email")}
                name="email"
                label="Email Address"
                placeholder="Enter email address"
                requiredLabel
                errorMessage={errors.email?.message}
              />
              <Input
                {...register("phone")}
                name="phone"
                label="Mobile Number"
                placeholder="Enter mobile number"
                requiredLabel
                errorMessage={errors.phone?.message}
              />
            </div>

            <Input
              {...register("amount")}
              label="Amount"
              name="amount"
              placeholder="Enter Amount"
              requiredLabel
              errorMessage={errors.amount?.message}
            />
            <Input
              {...register("comments")}
              label="Comments"
              name="comments"
              placeholder="Enter Comments"
              errorMessage={errors.comments?.message}
            />
            <button
              type="submit"
              className="bg-[#0E8427] float-right text-white px-5 py-3 rounded-lg hover:bg-white hover:text-[#0E8427] border border-[#0E8427] transition duration-700 ease-in-out"
            >
              Donate
            </button>
          </form>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <img src={MakeChange} alt="Covid-19" className="h-full w-auto" />
          </div>
          <div className="h-auto py-16 w-[100%] text-white bg-[#0E8427]">
            <p className="relative top-1/4 text-3xl md:text-4xl text-bolder text-center">
              Join the us in saving the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
