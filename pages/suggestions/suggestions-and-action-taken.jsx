import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import Suggestions from "@/views/suggestions/suggestions";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const Tabs = {
    MyIMs: "MyIMs",
    ToRevise: "ToRevise",
    ToReview: "ToReview",
    Reviewed: "Reviewed",
    DepartmentIMs: "DepartmentIMs",
  };

  const [ims, setIms] = useState([]);
  const [tab, setTab] = useState(Tabs.MyIMs);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    page: 1,
    limit: 10,
    serialNumber: "",
    title: "",
    status: undefined,
  });

  const { user, userLoading, userError } = useUser();

  useEffect(() => {
    console.log({ user });
  }, [user]);

  const router = useRouter();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;
    setLoading(true);

    const filter = {
      page: state.page,
      limit: state.limit,
      serialNumber: state.serialNumber,
      title: state.title,
      status: state.status,
    };

    let getter = getMyIMs;

    switch (tab) {
      case Tabs.MyIMs:
        getter = getMyIMs;
        break;
      case Tabs.ToReview:
        getter = getToReview;
        break;
      default:
        throw new Error("Tab unsupported");
    }

    getter(filter).then((res) => {
      setLoading(false);
      if (!subscribe) return;

      setIms(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user, state, tab]);

  async function getMyIMs(filter) {
    return frontendGetIMs({
      ownerId: user.ActiveFaculty.Faculty.id,
      ...filter,
    });
  }

  async function getToReview(filter) {
    return frontendGetIMs({
      notOwnerId: user.ActiveFaculty.Faculty.id,
      departmentId: user.ActiveFaculty.Faculty.departmentId,
      ...filter,
    });
  }

  function handleSerialNumberChange(e) {
    setState((prev) => ({ ...prev, serialNumber: e.target.value }));
  }
  const debouncedHandleSerialNumberChange = _.debounce(
    handleSerialNumberChange,
    800
  );

  function handleTitleChange(e) {
    setState((prev) => ({ ...prev, title: e.target.value }));
  }
  const debouncedHandleTitleChange = _.debounce(handleTitleChange, 800);

  function handleStatusChange(e) {
    setState((prev) => ({
      ...prev,
      status: e.target.value === "" ? undefined : e.target.value,
    }));
  }
  const debouncedHandleStatusChange = _.debounce(handleStatusChange, 800);

  return (
    <Layout>
      <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
        <div className='px-6 pt-12 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl mb-8 '>
            Suggestions and Actions Taken on IM Evaluation from IMERC
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement</p> */}
        </div>
        <div className='border border-CITLGray-lighter mx-5 rounded-lg'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part A. Program Review
              </h2>
              <button
                title='Add IM'
                className='flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center shadow-md text-white '
                // onClick={() => {
                //   router.push("/im/new");
                // }}
              >
                Add row
              </button>
            </div>
          </div>

          <table className='w-full divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className=' px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Action Taken
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Page No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Remarks
                </th>
              </tr>
            </thead>

            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              <Suggestions />
            </tbody>
          </table>
        </div>

        <div className='border border-CITLGray-lighter mx-5 rounded-lg mt-5  mb-5 '>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3 '>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part B. CITL Review
              </h2>
              <button
                title='Add IM'
                className='flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center shadow-md text-white '
                // onClick={() => {
                //   router.push("/im/new");
                // }}
              >
                Add row
              </button>
            </div>
          </div>

          <table className='w-full divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className='px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Action Taken
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Page No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Remarks
                </th>
              </tr>
            </thead>

            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              <Suggestions />
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
