import { BNCC } from "@/app/lib/IActivitiesData";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";

export const CheckboxBNCCComponent: React.FC = () => {
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
            {bncc.map((bncc_option) => {
                return <Checkbox key={bncc_option.BNCC_id} value={bncc_option.BNCC_id}>{bncc_option.title}</Checkbox>
            })}
        </>
        )
};