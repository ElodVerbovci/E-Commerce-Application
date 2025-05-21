import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-96 w-full rounded-lg group'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 opacity-10 z-10' />
					<img
						src={category.imageUrl}
						alt={category.name}
						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 '
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
						<h3 className='inline-block bg-[#000] rounded-full px-7 py-1 text-[#fff] text-md font-semibold shadow-md mb-2'>{category.name}</h3>
						<p className=' bg-white w-37 rounded-full px-5 py-1 text-[#000] text-sm font-semibold shadow-sm'>Explore {category.name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;