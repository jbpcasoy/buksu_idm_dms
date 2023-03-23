export default function test() {
  return (
    <table class='min-w-full divide-y divide-gray-200'>
      <thead class='bg-gray-50'>
        <tr>
          <th
            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
            onclick='sortTable(0)'
          >
            First Name
          </th>
          <th
            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
            onclick='sortTable(1)'
          >
            Last Name
          </th>
          <th
            class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer'
            onclick='sortTable(2)'
          >
            Age
          </th>
        </tr>
      </thead>
      <tbody class='bg-white divide-y divide-gray-200'>
        <tr>
          <td class='px-6 py-4 whitespace-nowrap'>John</td>
          <td class='px-6 py-4 whitespace-nowrap'>Doe</td>
          <td class='px-6 py-4 whitespace-nowrap'>30</td>
        </tr>
        <tr>
          <td class='px-6 py-4 whitespace-nowrap'>Jane</td>
          <td class='px-6 py-4 whitespace-nowrap'>Doe</td>
          <td class='px-6 py-4 whitespace-nowrap'>25</td>
        </tr>
        <tr>
          <td class='px-6 py-4 whitespace-nowrap'>Bob</td>
          <td class='px-6 py-4 whitespace-nowrap'>Smith</td>
          <td class='px-6 py-4 whitespace-nowrap'>40</td>
        </tr>
      </tbody>
    </table>
  );
}
