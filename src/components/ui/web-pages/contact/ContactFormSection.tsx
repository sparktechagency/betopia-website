"use client";

import { Form, Input, Button } from "antd";
import { Phone } from "lucide-react";
import Image from "next/image";

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactFormSection() {
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log("Form values:", values);
    // Handle form submission here
  };
  return (
    <section className="w-full  bg-[#F795490A]">
      <div className="grid lg:grid-cols-2 py-16 px-4  container mx-auto gap-0 rounded-3xl overflow-hidden ">
        {/* Left Side - Form */}
        <div
          style={{
            backgroundImage: "url(/contact/form-bg2.png)",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-[#FDE7D5] p-4 py-8 rounded-t-3xl md:rounded-tr-none lg:rounded-l-3xl md:p-12 lg:p-16 relative overflow-hidden "
        >
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                CONTACT US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Get in Touch
            </h2>

            {/* Form */}
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Your Name"
                    className="h-14 rounded-xl border-0 bg-white shadow-sm"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Email Address"
                    className="h-14 rounded-xl border-0 bg-white shadow-sm"
                  />
                </Form.Item>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Form.Item
                  name="subject"
                  rules={[{ required: true, message: "Please enter subject" }]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Subject"
                    className="h-14 rounded-xl border-0 bg-white shadow-sm"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your phone" },
                  ]}
                  className="mb-0"
                >
                  <Input
                    placeholder="Phone"
                    className="h-14 rounded-xl border-0 bg-white shadow-sm"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="company"
                rules={[
                  { required: true, message: "Please enter company name" },
                ]}
                className="mb-0"
              >
                <Input
                  placeholder="Company Name"
                  className="h-14 rounded-xl border-0 bg-white shadow-sm"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
                className="mb-0"
              >
                <TextArea
                  placeholder="Write a Message"
                  rows={5}
                  className="rounded-xl border-0 bg-white shadow-sm resize-none"
                />
              </Form.Item>

              <Form.Item className="mb-0 mt-6">
                <Button
                  htmlType="submit"
                  className=" !h-[50px] lg:!h-[60px]   !bg-[#F79549] border-0 !w-[230px] !rounded-full !text-white !font-semibold !text-base !uppercase !tracking-wider !hover:shadow-lg !transition-all !duration-300 !hover:scale-105"
                >
                  SUBMIT REQUEST
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Right Side - Image with Phone Overlay */}
        <div className="relative h-[600px] lg:h-auto rounded-r-3xl ">
          <Image
            src="/contact/form-img.jpg"
            alt="Team collaboration"
            fill
            className="object-cover rounded-tr-none lg:rounded-r-3xl"
          />

          {/* Phone Call Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-gray-900/80 p-8 max-w-[300px] rounded-tr-3xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-1">Call us anytime</p>
                <a
                  href="tel:+8801332840871"
                  className="text-white text-sm lg:text-lg font-bold hover:text-[#FF8C42] transition-colors"
                >
                  +88 01332840871
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
