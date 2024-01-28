import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers Page',
};

export default async function Page() {
  const customers = await fetchFilteredCustomers('');
  console.log(customers);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
      </div>
      <Table customers={customers} />
    </div>
  );
}
