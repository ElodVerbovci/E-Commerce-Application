import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCartStore();

	return (
		<div className="space-y-2 mt-">
			<h1 className="text-xl text-[#2E8B57] font-semibold">Your Cart:</h1>
		
		<div className='rounded-lg border p-4 shadow-sm border-gray-700 bg-gray-100 md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<div className='shrink-0 md:order-1'>
					<img className='h-20 md:h-32 rounded object-cover' src={item.image} />
				</div>
				<label className='sr-only'>Choose quantity:</label>

				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center gap-2'>
						<button
							className='inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-md border
							 border-gray-500 bg-gray-100 hover:bg-gray-300 focus:outline-none focus:ring-2
							  focus:ring-[#2E8B57]'
							onClick={() => updateQuantity(item._id, item.quantity - 1)}
						>
							<Minus className='text-black' />
						</button>
						<p>{item.quantity}</p>
						<button
							className='inline-flex h-5 w-5 shrink-0 items-center cursor-pointer justify-center rounded-md border
							 border-gray-500 bg-gray-100 hover:bg-gray-300 focus:outline-none 
						focus:ring-2 focus:ring-[#2E8B57]'
							onClick={() => updateQuantity(item._id, item.quantity + 1)}
						>
							<Plus className='text-gray-black' />
						</button>
					</div>

					<div className='text-end md:order-4 md:w-32'>
						<p className='text-base font-semibold font-mono text-[#2E8B57]'>${item.price}</p>
					</div>
				</div>

				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<p className='text-base font-bold text-[#2E8B57] hover:text-[#3EB489] font-roboto  hover:underline'>
						{item.name}
					</p>
					<p className='text-sm text-black font-semibold'>{item.description}</p>

					<div className='flex items-center gap-4'>
						<button
							className='inline-flex items-center  cursor-pointer text-sm font-medium text-red-500
							 hover:text-red-400 hover:underline'
							onClick={() => removeFromCart(item._id)}
						>
							<Trash />
						</button>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};
export default CartItem;