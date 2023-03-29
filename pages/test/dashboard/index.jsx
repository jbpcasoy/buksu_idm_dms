import AdminLayout from "@/components/admin/AdminLayout";
import { ApprovedIMsLine } from "@/components/charts/ApprovedIMsLine";
import Chart from "@/components/charts/Chart";
import NumberOfFaculties from "@/components/charts/Faculties";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className='grid sm:grid-cols-4 md:grid-rows-3'>
        <div className='col-span-2'>
          <ApprovedIMsLine />
        </div>
        <div className=''>
          <Chart />
        </div>
        <div className=''>
          <NumberOfFaculties />
        </div>
      </div>
    </AdminLayout>
  );
}
