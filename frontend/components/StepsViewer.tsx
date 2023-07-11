"use client";

import { ApiResponse, TStepsSum } from '@/types';
import axios from '@/utils/axios';
import { AxiosError } from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function StepsViewer(props: { stepsSum: TStepsSum | null }) {

    const buttonClickHandler = async () => {
        const num1 = props.stepsSum?.num1;
        const num2 = props.stepsSum?.num2;

        try {
            await axios.post<any, ApiResponse<TStepsSum>>('/steps-sum', {
                num1, num2, toSaveInDB: true
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            alert('Result saved successfull in DB');

        } catch (e) {
            console.log(e);
        }
    }

    return props.stepsSum !== null ? (
        <section className='w-full max-w-lg mx-auto mb-10'>
            <SyntaxHighlighter className="text-sm m-0 mb-5" language="json" style={rainbow}>
                {JSON.stringify(props.stepsSum.steps, null, 1)}
            </SyntaxHighlighter>
            <button onClick={buttonClickHandler} className="block ml-auto text-sm shadow text-white hover:bg-violet-400 focus:shadow-outline focus:outline-none py-3 px-5 rounded bg-violet-500" type="button">
                Save result to DB
            </button>
        </section>
    ) : <></>;
}