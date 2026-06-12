import { useEffect, useState } from "react";
const Form = () => {
    const [step, setStep] = useState(1);
    
    const renderSteps = () => {
        if(step === 1){
            return (
                <div>
                    <div className="mb-8">Step 1</div>                    
                    <div className="flex gap-4">
                        <button className="px-8 py-2" onClick = {e => setStep(prev => prev + 1)}>Next</button>
                    </div>
                </div>
            );
        }
        else if (step === 2 ){
            return (
                <div>
                    <div className="mb-8">Step 2</div>
                     <div className="flex gap-4">
                        <button className="px-8 py-2" onClick = {e => setStep(prev => prev - 1)}>Back</button>
                        <button className="px-8 py-2" onClick = {e => setStep(prev => prev + 1)}>Next</button>
                    </div>
                </div>
            );
        }
        else if (step === 3) {
            return (
                <div>
                    <div className="mb-8">Step 3</div>
                        <div className="flex gap-4">
                            <button className="px-8 py-2" onClick = {e => setStep(prev => prev - 1)}>Back</button>
                            <button className="px-8 py-2" onClick = {e => setStep(prev => prev + 1)}>Next</button>
                        </div>
                </div>
            )
        }
    }
    
    return (
        <section className="p-4 m-4 ">
            <h1 className="mb-8 text-4xl">Forms</h1>
            {renderSteps()}
        </section>
    )
}
export default Form;