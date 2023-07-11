'use client';

import AddForm from '@/components/AddForm';
import Header from '@/components/Header';
import StepsViewer from '@/components/StepsViewer';
import { TSteps } from '@/types';
import { useState } from 'react';

export default function Home() {
  const [ stepsSum, setStepsSum ] = useState<TSteps | null>(null);

  return (
    <main>
      <Header />

      <AddForm setStepsSum={setStepsSum} />

      <StepsViewer stepsSum={stepsSum} />
    </main>
  );
}
