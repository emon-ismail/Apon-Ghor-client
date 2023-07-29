import React from 'react';
import img from '../../../../assets/home/chef-service.jpg'
import './BistroBoss.css'
// import featuredImg from "../../../assets/home/featured.jpg"

const BistroBoss = () => {
    return (
    



<div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100 bg-image">
  <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded animation-parallax">
   
<div className="p-5 mx-auto sm:p-10 md:p-16 mt-10 dark:bg-gray-400 dark:text-gray-100 bg-image">
<div className="p-5 mx-auto sm:p-10 md:p-16 bg-fixed bg-transparent dark:text-gray-100   bg-slate-500 bg-opacity-60 ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
		<img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-400">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> Ismail Emon</a>
				</p>
			</div>
			
		</div>
	</div>
</div>
</div>
  </div>
</div>

    );
};

export default BistroBoss;