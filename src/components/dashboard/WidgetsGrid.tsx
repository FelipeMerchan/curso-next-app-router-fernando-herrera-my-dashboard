'use client';

import { useAppSelector } from '@/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
  const inCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        href='/dashboard/counter'
        icon={<IoCartOutline className='text-blue-600' size={70} />}
        label='Contador'
        subtitle='Productos agregados'
        title={`${inCart}`}
      />
    </div>
  )
}
