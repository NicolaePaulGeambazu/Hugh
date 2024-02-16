import { OptionContainer } from "./Filter.style";

interface FilterOptionProps {
  label: string;
  children?: React.ReactNode;
  values: string[];
  selectOptions: (select: string) => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  values,
  selectOptions,
}) => {
  const isChecked = values.includes(label);
  return (
    <OptionContainer>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => selectOptions(label)}
      />
      <span>{label}</span>
    </OptionContainer>
  );
};

export default FilterOption;