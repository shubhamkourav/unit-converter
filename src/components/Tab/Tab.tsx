import { Tabs } from '@/types/interface';
import React from 'react';
type TabProps = {
    value: Tabs,
    label: string,
    isActive: boolean,
    onTabChange: (key: Tabs) => void
}
export default function Tab({ value, label, isActive, onTabChange }: TabProps) {
    return (
        <button
            key={label}
            onClick={() => onTabChange(value)}
            className={`p-2 mx-2 font-medium ${isActive ? 'bottom-border-gradient border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
            {label}
        </button>
    )

}