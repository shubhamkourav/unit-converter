import React from 'react';

type TabWrapperProps = {
    children: any
}
export default function TabWrapper({ children }: TabWrapperProps) {
    return (
        <div className="flex justify-center mb-5">
            {children}
        </div>
    )
}