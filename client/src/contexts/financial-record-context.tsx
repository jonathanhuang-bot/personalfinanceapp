import { createContext, useContext } from "react";

interface FinancialRecord {
    id?: string;
    userId: string,
    date: Date,
    description: string,
    amount: number,
    category: string,
    paymentMethod: string;
}


interface FinancialRecordsContextType {
    records: FinancialRecord[];
    addRecord: (record: FinancialRecord) => void;
    updateRecord: (id: string, newRecord: FinancialRecord) =>void;
    deleteRecord: (id: string) => void;
}

export const FinancialRecordsContext = createContext<
    FinancialRecordsContextType | undefined
>(undefined);

export const FinancialRecordsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [records, setRecords] = useState<FinancialRecord[]>([]);
    const addRecord = async (record: FinancialRecord) =>{

    }
    return (
    <FinancialRecordsContext.Provider value = {{records, addRecord}}>
        {" "}
        {children}
    </FinancialRecordsContext.Provider>    
        
    );
    
};

export const useFinancialRecords = () => {
    const context = useContext<FinancialRecordsContextType | undefined>(
        FinancialRecordsContext
    );

    if (!context) {
        throw new Error("useFinancialRecords must be used within a FinancialRecordsProvider");
    }
    return context;
};
