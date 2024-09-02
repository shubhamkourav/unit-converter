
"use client"
import React, { useState } from 'react';
import TabWrapper from '@components/Tab/TabWrapper';
import config from '@config/config'
import Tab from '@/components/Tab/Tab';
import Form from '@/components/Form';
import { ConvertProps, Tabs } from '@/types/interface';


const UnitConverter: React.FC = () => {
  const { tabs, units } = config
  const [activeTab, setActiveTab] = useState<Tabs>('length');
  const [result, setResult] = useState<string>('');


  const convertLength = ({ value, from, to }: ConvertProps) => {
    const activeUnit = units[activeTab];
    const fromFactor = activeUnit[from];
    const toFactor = activeUnit[to];
    const convertedValue = (value * fromFactor) / toFactor;
    setResult(`${value} ${from} = ${convertedValue.toFixed(2)} ${to}`);
  };

  const convertWeight = ({ value, from, to }: ConvertProps) => {
    const activeUnit = units[activeTab];
    const fromFactor = activeUnit[from];
    const toFactor = activeUnit[to];
    const convertedValue = (value * fromFactor) / toFactor;
    setResult(`${value} ${from} = ${convertedValue.toFixed(2)} ${to}`);
  };

  const convertTemperature = ({ value, from, to }: ConvertProps) => {
    let convertedValue: number = value;

    if (from === to) {
      convertedValue = value;
    } else if (from === 'celsius' && to === 'fahrenheit') {
      convertedValue = (value * 9) / 5 + 32;
    } else if (from === 'celsius' && to === 'kelvin') {
      convertedValue = value + 273.15;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      convertedValue = ((value - 32) * 5) / 9;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
      convertedValue = ((value - 32) * 5) / 9 + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
      convertedValue = value - 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
      convertedValue = ((value - 273.15) * 9) / 5 + 32;
    }

    setResult(`${value} ${from} = ${convertedValue.toFixed(2)} ${to}`);
  };

  const handleConvert = (props: ConvertProps) => {
    if (activeTab === 'length') {
      convertLength(props);
    } else if (activeTab === 'weight') {
      convertWeight(props);
    } else if (activeTab === 'temperature') {
      convertTemperature(props);
    }
  };

  const handleTabChange = (tab: Tabs) => {
    setActiveTab(tab);
    // Reset units and result when switching tabs
    setResult('');

  };

  return (
    <div className="max-w-xl vh-100 mx-auto mt-20 p-5 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-5 text-center">Unit Converter</h1>

      {/* Tabs */}
      <TabWrapper>
        {tabs.map(tab => {
          return <Tab key={tab.id} value={tab.id as Tabs} label={tab.title} isActive={activeTab === tab.id} onTabChange={(key: Tabs) => handleTabChange(key)} />
        })}

      </TabWrapper>

      {/* Result Display */}
      {result ? (
        <div className="mt-4 p-2 bg-gray-100 rounded-md">
          <p className="text-lg font-bold">{result}</p>
        </div>
      ) : <Form form_name={activeTab} onConvert={(props: ConvertProps) => handleConvert(props)} />}
    </div>
  );
};

export default UnitConverter;
