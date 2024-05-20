'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
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
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Item className="SelectItem" value="light">
                <Select.ItemText>Light</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">v</Select.ItemIndicator>
              </Select.Item>
              <Select.Item className="SelectItem" value="dark">
                <Select.ItemText>Dark</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">v</Select.ItemIndicator>
              </Select.Item>
              <Select.Item className="SelectItem" value="purple">
                <Select.ItemText>Purple</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">v</Select.ItemIndicator>
              </Select.Item>
              <Select.Item className="SelectItem" value="yellow">
                <Select.ItemText>Yellow</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">v</Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default ThemeSwitcher;
