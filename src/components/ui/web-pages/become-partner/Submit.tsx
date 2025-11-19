import { CheckSquare, Square, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const Submit = ({ errors, watch, control, handleSubmit }: any) => {
  const [dragActive, setDragActive] = useState(false);
  const uploadedDocument = watch("document");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  return (
    <div className="pt-14">
      <div className="w-[306px] rounded-4xl flex items-center gap-2 p-2 mb-9 bg-linear-to-r from-[#E0E0E0] to-[#F6F6F6]">
        <div className="w-10 h-10 bg-[#F69348] rounded-full flex items-center justify-center text-white font-semibold">
          3
        </div>
        <h2 className="text-[28px] text-[#414042] pt-2">Submit Document</h2>
      </div>

      {/* Upload Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="size-4 bg-[#F6934866] rounded-full "></div>
          <h3 className="text-[22px] font-semibold text-[#414042] pt-2">
            Upload a proof of your identitys
          </h3>
        </div>
        <p className="text-sm md:text-base text-[#737373] pb-4">
          Betopia Limited Requires a valid government-issued ID (Passport/
          National ID/ Driving license)
        </p>
        <div className="bg-white p-8 rounded-2xl">
          <Controller
            name="document"
            control={control}
            rules={{ required: "Document upload is required" }}
            render={({ field: { onChange, value, ...field } }) => (
              <div
                className={`border-2 bg-[#95CDB81F] border-dashed rounded-xl py-[51px] text-center transition-colors ${
                  dragActive
                    ? "border-orange-400 bg-orange-50"
                    : errors.document
                    ? "border-red-400"
                    : "border-[#F69348CC] "
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(false);
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    onChange(e.dataTransfer.files);
                  }
                }}
              >
                <div className="flex flex-col items-center">
                    <Image src="/download.png" alt="" width={60} height={60} />
                  <p className="text-[#414042] text-[20px] font-semibold mb-2 pt-4">
                    Drag and Drop your{" "}
                  </p>
                  <p>
                    <span className="text-[#F6934899] font-semibold">
                      Image
                    </span>{" "}
                    or{" "}
                    <span className="text-[#F6934899] font-semibold">file</span>
                  </p>
                  <p className="text-xs text-[#41404299] mb-4 pt-4">
                    or{" "}
                    <label className="text-[#F6934899] font-semibold cursor-pointer hover:underline">
                      browse file
                      <input
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf,.doc"
                        {...field}
                        onChange={(e) => onChange(e.target.files)}
                      />
                    </label>{" "}
                    on your computer
                  </p>
                  {uploadedDocument && uploadedDocument[0] && (
                    <div className="text-sm text-green-600 font-semibold">
                      ✓ {uploadedDocument[0].name}
                    </div>
                  )}
                </div>
              </div>
            )}
          />
          {errors.document && (
            <p className="text-red-500 text-xs mt-1">
              {errors.document.message}
            </p>
          )}
        </div>

        <div className="flex justify-between text-xs text-[#757D8A] mt-2">
          <span>Supported Formats: JPG, PNG, PDF, DOC</span>
          <span>Maximum Size: 24mb</span>
        </div>

        {/* Confirmation Checkbox */}
        <div className="mt-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <Controller
              name="documentConfirmed"
              control={control}
              rules={{ required: "You must confirm the document requirements" }}
              render={({ field: { onChange, value } }) => (
                <div
                  className="mt-0.5 cursor-pointer"
                  onClick={() => onChange(!value)}
                >
                  {value ? (
                    <CheckSquare className="w-5 h-5 text-[#F69348]" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                  )}
                </div>
              )}
            />
            <span className="text-sm md:text-[20px] text-[#414042]">
              I confirmed that I uploaded a valid government-Issued photo ID.
              This ID includes my picture, signature, name, date of birth, and
              address.
            </span>
          </label>
          {errors.documentConfirmed && (
            <p className="text-red-500 text-xs mt-1 ml-8">
              {errors.documentConfirmed.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex items-center justify-center text-white font-semibold text-lg md:text-[32px]">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full md:w-[443px] mx-auto py-4 bg-[#F69348] rounded-xl "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
