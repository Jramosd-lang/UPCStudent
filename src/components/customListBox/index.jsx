import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

function CustomListBox({
  options = [],
  value,
  defaultValue,
  placeholder = "Selecciona una opción",
  disabled = false,
  onChange,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const selectedOption = options.includes(selectedValue) ? selectedValue : null;

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manejar navegación con teclado
  useEffect(() => {
    function handleKeyDown(event) {
      if (!isOpen || options.length === 0) return;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => prev < options.length - 1 ? prev + 1 : 0);
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => prev > 0 ? prev - 1 : options.length - 1);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (focusedIndex >= 0) {
            handleSelect(options[focusedIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options]);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
    if (onChange) {
      onChange(optionValue);
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setFocusedIndex(-1);
      }
    }
  };

  return (
    <div ref={selectRef} className={`relative inline-block w-full ${className}`}>
      {/* Trigger */}
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        className={`
          flex items-center justify-between w-full outline-0 rounded-md cursor-pointer
          transition-all h-7 duration-200 ease-in-out ouline-[#ffffff30]
          bg-[#0e0e10] text-[#888889] hover:outline-1 
          px-4 py-1 text-base font-medium
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${isOpen ? "ring-2 ring-[#181b21] ring-opacity-50 " : ""}
        `}
      >
        <span className={`select-none truncate ${selectedOption ? "text-[#888889]" : "text-[#919191]"}`}>
          {selectedOption || placeholder}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          className="scrollbar-dark absolute z-50 w-full mt-1 bg-[#00000030] backdrop-blur-sm select-none border border-[#ffffff30] 
          rounded-md shadow-lg max-h-60 overflow-auto"
        >
          {options.length === 0 ? (
            <div className="px-4 py-3 text-[#919191] text-sm">
              No hay opciones disponibles
            </div>
          ) : (
            options.map((option, index) => (
              <div
                key={option}
                role="option"
                aria-selected={option === selectedValue}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`
                  flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-150
                  text-base text-white hover:bg-[#00000052]
                  ${focusedIndex === index ? "bg-[#00000052]" : ""}
                  ${option === selectedValue ? "bg-[#00000070]" : ""}
                `}
              >
                <span className="truncate">{option}</span>
                {option === selectedValue && <Check className="w-5 h-5 text-white" />}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
export default CustomListBox;