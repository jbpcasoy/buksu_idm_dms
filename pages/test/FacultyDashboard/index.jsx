import AdminLayout from "@/components/admin/AdminLayout";
import { NumberOfDepartmentIMs } from "@/components/charts/NumberOfDepartmentIMs";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className=''>
        <div className='w-4/5'>
          <NumberOfDepartmentIMs />
        </div>
      </div>
    </AdminLayout>
  );
}
