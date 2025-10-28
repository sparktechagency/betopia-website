"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

interface SubmitDocumentComponentProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
}

const SubmitDocumentComponent: React.FC<SubmitDocumentComponentProps> = ({
  value,
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      handleFileSelectInternal(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      handleFileSelectInternal(selectedFile);
    }
  };

  const handleFileSelectInternal = (file: File) => {
    if (onChange) onChange(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const validateFile = (file: File) => {
    const validTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 3 * 1024 * 1024; // 3MB

    if (!validTypes.includes(file.type)) {
      alert("Please upload a valid file type (JPG, PNG, PDF, DOC, DOCX)");
      return false;
    }

    if (file.size > maxSize) {
      alert("File size must be less than 3MB");
      return false;
    }

    return true;
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <h2 className="text-base md:text-lg font-medium text-[#4A4A4A] flex items-center gap-2">
          <span className="text-orange-500">📋</span>
          Upload a proof of your identity
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground">
          Belanja Limited requires a valid government-issued ID (Passport /
          National ID / Driving license)
        </p>
      </div>

      {/* Drop Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 md:p-12 transition-all duration-200 bg-white hover:border-orange-300 hover:bg-orange-50/40 ${
          isDragging ? "border-orange-400 bg-orange-50/50" : "border-orange-200"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <Upload className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          </div>

          {value ? (
            <div className="space-y-2">
              <p className="text-sm md:text-base font-medium text-[#4A4A4A]">
                {value.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(value.size / 1024).toFixed(2)} KB
              </p>
              {previewUrl &&
                (value.type.startsWith("image/") ? (
                  <Image
                    src={previewUrl!}
                    alt="Preview"
                    width={300}
                    height={160}
                    className="max-h-40 mx-auto rounded-md object-contain"
                  />
                ) : (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-orange-500 underline"
                  >
                    Preview File
                  </a>
                ))}
              <button
                onClick={handleBrowseClick}
                className="text-xs md:text-sm text-orange-500 hover:text-orange-600 underline"
              >
                Change file
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm md:text-base text-[#4A4A4A]">
                Drag and Drop your{" "}
                <span className="text-orange-500 font-medium">image</span> or{" "}
                <span className="text-orange-500 font-medium">file</span>
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                or{" "}
                <button
                  onClick={handleBrowseClick}
                  className="text-orange-500 hover:text-orange-600 underline font-medium"
                >
                  browse file on your computer
                </button>
              </p>
            </div>
          )}
        </div>

        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            Supported Format:PDF
          </p>
        </div>

        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            Maximum Size: 3MB
          </p>
        </div>
      </div>

      <div className="flex items-start lg:items-center gap-2 p-3 md:p-4 bg-orange-50/50 rounded-lg">
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={isConfirmed}
          onChange={(e) => setIsConfirmed(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-500"
        />
        <label
          htmlFor="confirm-checkbox"
          className="text-xs md:text-sm font-medium text-[#4A4A4A] cursor-pointer"
        >
          I confirm that I uploaded a valid government-issued photo ID.
        </label>
      </div>
    </div>
  );
};

export default SubmitDocumentComponent;
