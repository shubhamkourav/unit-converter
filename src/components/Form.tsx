import React, { useMemo, useState } from 'react'
import config from '@config/config'
import { ConvertProps, Units } from '@/types/interface';


type TFormProps = {
    form_name: string,
    onConvert: ({ value, from, to }: ConvertProps) => void
}

export default function Form({ form_name, onConvert }: TFormProps) {
    const [value, setValue] = useState<number>(0);
    const [from, setForm] = useState<keyof Units>();
    const [to, setTo] = useState<keyof Units>();

    const formConfig = useMemo(() => {
        setValue(0);
        setForm(undefined);
        setTo(undefined);
        return config.tabs.find(({ id }) => id === form_name);
    }, [form_name])

    const handleConvert = () => {
        console.log('convert', from, to);
        if(from && to) onConvert({ value, from, to })

    }
    return (
        <div className='mb-4'>
            {formConfig?.form.map((form, i) => {
                if (form.name === 'value') {
                    return (
                        <div key={i} className="mb-4">
                            <label className="block mb-2 font-medium">{form.label}</label>
                            <input
                                type="number"
                                value={value}
                                name={form.name}
                                onChange={(e) => setValue(parseFloat(e.target.value))}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    )
                } else if (form.name === 'from' || form.name === 'to') {
                    return (
                        <div key={i} className="mb-4">
                            <label className="block mb-2 font-medium">{form.label}</label>
                            <select
                                value={form.name === 'from'? from: to}
                                onChange={(e) => form.name === 'from' ? setForm(e.target.value as keyof Units) : setTo(e.target.value as keyof Units)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option >Select</option>
                                {
                                    form.options?.map((option, j) => {
                                        return <option key={j} value={option.value}>{option.label}</option>
                                    })
                                }
                            </select>
                        </div>
                    )
                } else {
                    return <></>
                }
            })}
            <button
                onClick={handleConvert}
                className="bg-gradient w-full p-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
            >
                Convert
            </button>
        </div>
    )
}
