import { BNCC } from "@/app/lib/IActivities";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";

const CheckboxBNCCComponent: React.FC<{value?: string[], onChange?: (value: string[]) => void}> = ({value = [], onChange}) => {
    const [bncc, setBncc] = useState<BNCC[]>([]);
    useEffect(() => {
        async function fetchBNCC() {
            const response = await fetch('http://localhost:3000/api/options/bncc');
            const data = await response.json();
            setBncc(data);

            return data;
        }
        fetchBNCC();
    }, []);

    if(!bncc) return <p>Carregando...</p>;

    return (
        <>
            <Checkbox.Group value={value} onChange={onChange}>
                {bncc.map((bncc_option) => (
                    <Checkbox key={bncc_option.id} value={bncc_option.id}>
                        {bncc_option.title}
                    </Checkbox>
                ))}
            </Checkbox.Group>
        </>
        )
};

export default CheckboxBNCCComponent;