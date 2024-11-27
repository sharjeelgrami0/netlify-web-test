import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import 'styles/elements/dropdown.css';
import ArrowIcon from 'assets/svgs/arrow.svg?react'

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[]
  placeholder: string
  onSelect: (value: string) => void
}

const Dropdown = ({
    options,
    placeholder,
    onSelect,
}: DropdownProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Menu as="div" className="dropdown">
      <Menu.Button className="dropdown-button">
            {selected || placeholder}
        <ArrowIcon className="dropdown-arrow" height={10} fill='#333333'/>
      </Menu.Button>
      <Menu.Items className="dropdown-items">
        {options.map((option) => (
          <Menu.Item key={option.value}>
            {({ active }) => (
              <button
                className={`dropdown-item ${active ? 'active' : ''}`}
                onClick={() => {
                  setSelected(option.label);
                  onSelect(option.value);
                }}
              >
                {option.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;