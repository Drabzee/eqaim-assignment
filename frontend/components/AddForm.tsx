'use client';

import { Dispatch, FormEvent, SetStateAction } from 'react';
import axios from '@/utils/axios';
import { ApiResponse, TSteps, TStepsSum } from '@/types';

export default function AddForm(props: { setStepsSum: Dispatch<SetStateAction<TSteps | null>> }) {

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement> & { target: { num1: HTMLInputElement, num2: HTMLInputElement } }) => {
    e.preventDefault();

    const num1 = e.target.num1.value;
    const num2 = e.target.num2.value;

    try {
      const { data } = await axios.post<any,ApiResponse<TStepsSum>>('/steps-sum', {
        num1, num2
      }, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!data.success) throw Error(data.errorMsg);

      props.setStepsSum(data.data);
      
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <section className='flex justify-center p-10'>
      <form onSubmit={formSubmitHandler} className="w-full max-w-lg">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="num1">
              First number
            </label>
          </div>
          <div className="md:w-2/3">
            <input min={0} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="num1" type="number" placeholder="Enter your first number" required />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="num2">
              Second number
            </label>
          </div>
          <div className="md:w-2/3">
            <input min={0} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="num2" type="number" placeholder="Enter your second number"  required />
          </div>
        </div>
        <button type="submit" className="block ml-auto text-sm shadow text-gray-500 hover:bg-gray-50 focus:shadow-outline focus:outline-none py-2 px-4 rounded border-2 border-gray-400">
          Generate Steps
        </button>
      </form>
    </section>
  );
}