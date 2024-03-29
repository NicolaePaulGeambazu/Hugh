import React, { Fragment, useState } from "react";
import { Chevron, OptionText } from "./Filter.style";
import {
  Container,
  FilterContainer,
} from "./Filter.style";
import FilterOption from "./FilterOption";

interface Option {
  label: string;
  children?: Option[];
}

interface Props {
  label: string;
  options: Option[];
  values: string[];
  selectOptions: (select: string) => void;
}
const Filter = ({ label, options, values, selectOptions }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderOptions = (options: Option[]): JSX.Element[] => {
    return options.map((option) => (
      <Fragment key={option.label}>
        <div style={{ paddingLeft: "3px" }}>
          {option.children ? (
            <>
              <h4>{option.label}</h4>
              <div>
                {option.children.map((child) => (
                  <Fragment key={child.label}>
                    <FilterOption
                      label={child.label}
                      key={child.label}
                      values={values}
                      selectOptions={selectOptions}
                    />
                    {child.children && ( // Render second level of children
                      <div style={{ paddingLeft: "10px", paddingTop: '5px' }}>
                        {child.children.map((subChild) => (
                          <FilterOption
                            label={subChild.label}
                            key={subChild.label}
                            values={values}
                            selectOptions={selectOptions}
                          />
                        ))}
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </>
          ) : (
            <div>
              <FilterOption
                label={option.label}
                key={option.label}
                values={values}
                selectOptions={selectOptions}
              />
            </div>
          )}
        </div>
      </Fragment>
    ));
  };

  return (
    <Container>
      <FilterContainer onClick={toggleOpen}>
        <p>{label}</p>
        <Chevron isOpen={isOpen} />
      </FilterContainer>
      {isOpen && <OptionText>
        {renderOptions(options)}</OptionText>}
    </Container>
  );
};


export default Filter;
