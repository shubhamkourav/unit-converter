export default {
  tabs: [
    {
      id: "length",
      title: "Length",
      form: [
        {
          name: "value",
          label: "Enter the length to convert",
        },
        {
          name: "from",
          label: "Unit to convert from",
          options: [
            { value: "millimeter", label: "Millimeter" },
            { value: "centimeter", label: "Centimeter" },
            { value: "meter", label: "Meter" },
            { value: "kilometer", label: "Kilometer" },
            { value: "inch", label: "inch" },
            { value: "foot", label: "Foot" },
            { value: "yard", label: "yard" },
            { value: "mile", label: "Mile" },
          ],
        },
        {
          name: "to",
          label: "Unit to convert to",
          options: [
            { value: "millimeter", label: "Millimeter" },
            { value: "centimeter", label: "Centimeter" },
            { value: "meter", label: "Meter" },
            { value: "kilometer", label: "Kilometer" },
            { value: "inch", label: "inch" },
            { value: "foot", label: "Foot" },
            { value: "yard", label: "yard" },
            { value: "mile", label: "Mile" },
          ],
        },
      ],
    },
    {
      id: "weight",
      title: "Weight",
      form: [
        {
          name: "value",
          label: "Enter the weight to convert",
        },
        {
          type: "select",
          name: "from",
          label: "Unit to convert from",
          options: [
            { value: "milligram", label: "Milligram" },
            { value: "gram", label: "Gram" },
            { value: "kilogram", label: "Kilogram" },
            { value: "pound", label: "Pound" },
            { value: "ounce", label: "Ounce" },
          ],
        },
        {
          name: "to",
          label: "Unit to convert to",
          options: [
            { value: "milligram", label: "Milligram" },
            { value: "gram", label: "Gram" },
            { value: "kilogram", label: "Kilogram" },
            { value: "pound", label: "Pound" },
            { value: "ounce", label: "Ounce" },
          ],
        },
      ],
    },
    {
      id: "temperature",
      title: "Temperature",
      form: [
        {
          name: "value",
          label: "Enter the temperature to convert",
        },
        {
          name: "from",
          label: "Unit to convert from",
          options: [
            { value: "celsius", label: "Celsius" },
            { value: "fahrenheit", label: "Fahrenheit" },
            { value: "kelvin", label: "Kelvin" },
          ],
        },
        {
          name: "to",
          label: "Unit to convert to",
          options: [
            { value: "celsius", label: "Celsius" },
            { value: "fahrenheit", label: "Fahrenheit" },
            { value: "kelvin", label: "Kelvin" },
          ],
        },
      ],
    },
  ],
  units: {
    length: {
      millimeter: 1,
      centimeter: 10,
      meter: 1000,
      kilometer: 1000000,
      inch: 25.4,
      foot: 304.8,
      yard: 914.4,
      mile: 1609344,
    },
    weight: {
      milligram: 1,
      gram: 1000,
      kilogram: 1000000,
      ounce: 28349.5,
      pound: 453592,
    },
      temperature: {
        celsius: 32
    },
  },
};
