import AddForm from '@/components/AddForm';
import StepsViewer from '@/components/StepsViewer';

export default function Home() {
  return (
    <main>

      <header className='py-5 px-10 bg-gray-200'>
        <h1 className='text-3xl font-extrabold'>Step Addition</h1>
      </header>

      <AddForm />

      <StepsViewer />
    </main>
  );
}
