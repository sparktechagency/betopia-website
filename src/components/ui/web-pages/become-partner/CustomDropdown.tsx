'use client'

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CustomDropdownProps {
  label: string;
  items: string[];
  selected: string;
  setSelected: (value: string) => void;
  registerName: string;
  register: any;
  errors: any;
  width?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  items,
  selected,
  setSelected,
  registerName,
  register,
  errors,
  width 
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm md:text-lg text-[#404D61] mb-4">
        {label}
      </label>

      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`w-full ${width} flex items-center justify-between px-4 py-3 border rounded-lg bg-white text-[#404D61] 
              ${errors?.[registerName] ? "border-red-400" : "border-[#E1E3E6]"}`}
        >
          <span>{selected || `Select ${label}`}</span>
          <ChevronDown
            className={`w-4 h-4 text-[#2D3748] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

  
        <input type="hidden" {...register(registerName)} value={selected || ""} />

        {open && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-10">
            {items.map((item: string) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#2D3748]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {errors?.[registerName] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[registerName]?.message}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
