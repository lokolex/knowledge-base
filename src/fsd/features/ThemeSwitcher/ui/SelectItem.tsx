'use client';

import React from 'react';
import * as Select from '@radix-ui/react-select';
import { Check } from 'lucide-react';
import clsx from 'clsx';

import './styles.css';

const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx('SelectItem', className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <Check size={16} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

export default SelectItem;
