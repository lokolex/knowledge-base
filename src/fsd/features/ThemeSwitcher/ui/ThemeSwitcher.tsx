'use client';

import React, { useLayoutEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import SelectItem from './SelectItem';

import './styles.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select.Root defaultValue={theme} onValueChange={(val) => setTheme(val)}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value />
        <Select.Icon>
          <ChevronDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default ThemeSwitcher;
