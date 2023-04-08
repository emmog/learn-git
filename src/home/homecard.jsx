import React from 'react'
const Homecard = ()=>{
    return(
    <>
        <div className="grid md:grid-cols-4  gap-4 pl-10">
        <div className="pt-3">
   <div className="bg-green-300 rounded-lg shadow-lg p-6 pl-4">   
  <div className="flex items-center">
    <div className="text-gray-500 text-sm font-medium">Sector</div>
    <div className="ml-auto text-gray-900 text-xl font-semibold">Technology</div>
  </div>
  <div className="flex items-center">
    <div className="text-gray-500 text-sm font-medium">number of schools</div>
    <div className="ml-auto text-gray-900 text-xl font-semibold">20</div>
  </div>

  <div className=" border-t border-gray-300 pt-4" >
    <div className="text-gray-500 text-sm font-medium">schools</div>
    <ul className="mt-2">
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full  mr-2"></div>
        <div className="text-gray-700 font-medium">A' level</div>
        <div className="ml-auto text-gray-900">450 students</div>
      </li>
   
      <li className="flex items-center mt-2">
        <div className="w-6 h-6 rounded-full mr-2"></div>
        <div className="text-gray-700 font-medium">TVET </div>
        <div className="ml-auto text-gray-900">500 students</div>
      </li>
    </ul>
  </div>
</div>
</div>
{/* end */}
<div className="pt-3 pr-30 ">
   <div className=" bg-gray-300 rounded-lg shadow-lg p-6">
  <div className="flex items-center ">
    <div className="text-gray-500 text-sm font-medium">schools</div>
    <div className="ml-auto text-gray-900 text-xl font-semibold">Technology</div>
  </div>
  <div className="mt-4 border-t border-gray-300 pt-4">
    <ul className="mt-2">
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-blue-500 mr-2"></div>
        <div className="text-gray-700 font-medium">MEG</div>
        <div className="ml-auto text-gray-900">40 students</div>
      </li>
      <li className="flex items-center mt-2">
        <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
        <div className="text-gray-700 font-medium">HEG</div>
        <div className="ml-auto text-gray-900">50 students</div>
      </li>
      <li className="flex items-center mt-2">
        <div className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></div>
        <div className="text-gray-700 font-medium">MEC</div>
        <div className="ml-auto text-gray-900">40 students</div>
      </li>
    </ul>
  </div>
</div>
</div>
{/* end */}
<div className="pt-3 pr-30  ">
   <div className="bg-blue-300 rounded-lg shadow-lg p-6  ">
  <div className="flex items-center">
    <div className="text-gray-500 text-sm font-medium">schools</div>
    <div className="ml-auto text-gray-900 text-xl font-semibold">perfomance</div>
  </div>
  <div className="mt-4 border-t border-gray-300 pt-4">
    <ul className="mt-2">
      <li className="flex items-center">
        <div className="w-6 h-6 rounded-full mr-2"></div>
        <div className="text-gray-700 font-medium">kagarama secondary school</div>
        <div className="ml-auto text-gray-900">90%</div>
      </li>
      <li className="flex items-center mt-2">
      </li>
      <li className="flex items-center mt-2">
        <div className="w-6 h-6 rounded-full mr-2"></div>
        <div className="text-gray-700 font-medium">groly</div>
        <div className="ml-auto text-gray-900">55%</div>
      </li>
    </ul>
  </div>
</div>
</div>

  <div className='pt-3 pl-10'>
  <button
      className="bg-blue-500  text-white font-bold py-2 px-5 rounded ">
     signin
    </button>
  </div>

</div>


    </>
    )
}

export default Homecard