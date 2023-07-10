"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const stepsObj = {
    step1: { carryString: "1_", sumString: "3" },
    step2: { carryString: "11_", sumString: "03" },
    step3: { carryString: "111_", sumString: "203" },
    step4: { carryString: "111_", sumString: "2203" }
};

export default function StepsViewer() {
    return (
        <section className='w-full max-w-lg mx-auto mb-10'>
            <SyntaxHighlighter className="text-sm m-0 mb-5" language="json" style={rainbow}>
                {JSON.stringify(stepsObj, null, 1)}
            </SyntaxHighlighter>
            <button className="block ml-auto text-sm shadow text-white hover:bg-violet-400 focus:shadow-outline focus:outline-none py-2 px-4 rounded border-2 bg-violet-500" type="button">
                Save result to DB
            </button>
        </section>
    );
}