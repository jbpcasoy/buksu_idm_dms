import AdminLayout from "@/components/admin/AdminLayout";
import Chart from "@/components/charts/Chart";
import { Dean } from "@/components/charts/Dean";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className='grid sm:grid-cols-3 md:grid-rows-3'>
        <div className='col-span-2'>
          <Dean />
        </div>
        <div className=''>
          <Chart />
        </div>
      </div>
    </AdminLayout>
  );
}
