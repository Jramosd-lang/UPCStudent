// CustomListbox.jsx
const StyledOption = React.memo(({ option, isSelected, isHighlighted, onClick, height = 40 }) => (
  <div
    className={`
      flex items-center px-3 py-2 cursor-pointer transition-colors
      ${isHighlighted ? 'bg-[#ffffff15]' : ''}
      ${isSelected ? 'bg-[#ffffff20] font-medium' : 'hover:bg-[#ffffff10]'}
      text-[#919191]
    `}
    style={{ height }}
    onClick={() => onClick(option)}
  >
    <span className="flex-1 truncate">{option.label}</span>
    {isSelected && <Check className="w-4 h-4 text-[#919191] ml-2 flex-shrink-0" />}
  </div>
));

const CustomListbox = ({
  options = [],
  value,
  onChange,
  placeholder = "Seleccionar...",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);

  const selectedOption = useMemo(() =>
    options.find(opt => opt.value === value), [options, value]);

  const handleOptionClick = useCallback((option) => {
    onChange?.(option.value, option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  }, [onChange]);

  const handleToggle = useCallback(() => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setHighlightedIndex(-1);
  }, [disabled]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev =>
            prev < options.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            handleOptionClick(options[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, options, handleOptionClick]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        tabIndex={0}
        className={`
          w-full px-4 py-2 text-left bg-[#ffffff10] border-2 border-[#ffffff30] rounded-lg
          flex items-center justify-between transition-colors text-[#919191]
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ffffff15] hover:border-[#ffffff40]'}
          ${isOpen ? 'border-[#ffffff40] bg-[#ffffff15]' : ''}
        `}
      >
        <span className={`truncate ${selectedOption ? 'text-[#919191]' : 'text-[#666]'}`}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#919191] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-[#00000025] border-2 border-[#ffffff30] rounded-lg shadow-lg backdrop-blur-sm">
          <div className="max-h-48 overflow-y-auto">
            {options.length === 0 ? (
              <div className="px-3 py-2 text-[#666] text-center">
                No hay opciones disponibles
              </div>
            ) : (
              options.map((option, index) => (
                <StyledOption
                  key={option.value}
                  option={option}
                  isSelected={option.value === value}
                  isHighlighted={index === highlightedIndex}
                  onClick={handleOptionClick}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomListbox;
