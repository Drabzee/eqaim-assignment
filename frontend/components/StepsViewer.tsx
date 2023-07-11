"use client";

import { TStepsSum } from '@/types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function StepsViewer(props: { stepsSum: TStepsSum | null }) {

    return props.stepsSum !== null ? (
        <section className='w-full max-w-lg mx-auto mb-10'>
            <SyntaxHighlighter className="text-sm m-0 mb-5" language="json" style={rainbow}>
                {JSON.stringify(props.stepsSum.steps, null, 1)}
            </SyntaxHighlighter>
            <button className="block ml-auto text-sm shadow text-white hover:bg-violet-400 focus:shadow-outline focus:outline-none py-3 px-5 rounded bg-violet-500" type="button">
                Save result to DB
            </button>
        </section>
    ) : <></>;
}