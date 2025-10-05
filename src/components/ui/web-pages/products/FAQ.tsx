import React from "react";
import { Collapse, ConfigProvider } from "antd";
import type { CollapseProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FAQ: React.FC = () => {
    const items: CollapseProps["items"] = [
        {
            key: "1",
            label: "How is this ERP different from other software?",
            children: (
                <p>
                    Our ERP is fully integrated, cloud-based, and modular. It lets you
                    manage everything — CRM, sales, purchase, helpdesk, employees, and
                    more — from one easy-to-use dashboard.
                </p>
            ),
        },
        {
            key: "2",
            label: "Can I use it for both small and large businesses?",
            children: (
                <p>
                    Yes, our ERP is designed to scale with your business — from startups
                    to enterprises.
                </p>
            ),
        },
        {
            key: "3",
            label: "Does it support multiple departments and users?",
            children: (
                <p>
                    Absolutely. You can create multiple departments, assign roles, and
                    manage permissions easily.
                </p>
            ),
        },
        {
            key: "4",
            label: "Can I customize the ERP for my business needs?",
            children: (
                <p>
                    Yes, it’s modular and highly customizable to fit your unique workflow.
                </p>
            ),
        },
        {
            key: "5",
            label: "Does it integrate with my existing tools and hardware?",
            children: (
                <p>
                    It integrates seamlessly with popular third-party tools and can work
                    with existing hardware setups.
                </p>
            ),
        },
        {
            key: "6",
            label: "Do you provide training and support?",
            children: (
                <p>
                    Yes, we provide onboarding assistance, documentation, and ongoing
                    technical support.
                </p>
            ),
        },
    ];

    return (
        <div className="max-w-3xl mx-auto py-10">
            <h2 className="text-center text-3xl font-semibold mb-6">
                Frequently Asked <span className="text-orange-500">Question</span>
            </h2>

            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            headerBg: "#F79549"
                        }
                    },
                    token: {
                        colorTextHeading: "white"
                    }
                }}
            >
                <Collapse
                    accordion
                    items={items}
                    defaultActiveKey={["1"]}
                    size="large"
                    className="faq-collapse"
                     expandIconPosition="end" 
                    expandIcon={({ isActive }) => (
                        <div
                            className={`icon-circle ${isActive ? "rotate" : ""} w-10 h-10 flex items-center justify-center border border-white rounded-full`}
                        >
                            <DownOutlined color="white" size={40} />
                        </div>
                    )}
                />

            </ConfigProvider>
        </div>
    );
};

export default FAQ;
