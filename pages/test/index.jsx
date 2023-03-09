import Layout from "@/components/layout/Layout";

export default function test() {
  return (
    <Layout>
      <input
        type='text'
        class='w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400'
        placeholder='Full Name'
      />
    </Layout>
  );
}
