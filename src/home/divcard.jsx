import React from "react";

function Divcard (){
    return(

        <>
        <div className="grid md:grid-cols-3  gap-5  pt-5 pl-8">
        <div className="bg-yellow-200 rounded-lg shadow-lg p-4 bg-blue-200 ">
      <h2 className="text-lg font-medium"> sector number</h2>
      <p className="text-gray-500">+25078345698</p>
    </div>
    <div className="bg-blue-300 rounded-lg shadow-md p-4 pl-6">
      <h2 className="text-lg font-medium">the schools with high drop-out</h2>
      <p className="text-gray-500">Apade</p>
      <p className="text-gray-500">kagarama secondary school</p>
    </div>
    <div className="bg-blue-100 rounded-lg shadow-md p-4 pl-6">
      <h2 className="text-lg font-medium">schools in sector</h2>
      <p className="text-gray-500">Apade </p>
      <p className="text-gray-500">Efoteck</p>
    </div>
        </div>
        </>
    )
}
export default Divcard