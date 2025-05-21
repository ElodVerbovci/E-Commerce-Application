import { useCartStore } from '../stores/useCartStore';
import { motion } from 'framer-motion'
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import axios from '../lib/axios';

const stripePromise = loadStripe("pk_test_51QsqrGG1q4SZngJ5eFjLGZjmBraWA80rcmEHPAODNdHeKXlHikk0jqpDdLGPKXRazap1teHwir30bbMuEsiI3bi900Zi9ALxrc");
const OrderSummary = () => {

const {total,subtotal,coupon , isCouponApplied ,cart} = useCartStore();

const savings = subtotal - total;

const formattedSubtotal = subtotal.toFixed(2);

const formattedTotal = total.toFixed(2);

const formattedSavings = total.toFixed(2);

const handlePayment = async () =>{
	const stripe = await stripePromise;
	const res = await axios.post("/payments/create-checkout-session", {
		products:cart ,
		 couponCode: coupon ? coupon.code : null,

	});
	const session = res.data;
	const result = await stripe.redirectToCheckout({
		sessionId: session.id,
	})

	if(result.error){
		console.log(result.error , "Error");
	}
};


 return (
		<motion.div
			className='space-y-4 rounded-lg border  border-gray-500 bg-gray-100 p-4 m-5 mt-9 shadow-sm sm:p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<p className='text-xl font-semibold text-[#2E8B57]'>Order summary</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-black'>Original price</dt>
						<dd className='text-base font-medium text-[#2E8B57]'>${formattedSubtotal}</dd>
					</dl>

					{savings > 0 && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-black'>Savings</dt>
							<dd className='text-base font-medium text-[#2E8B57]'>-${formattedSavings}</dd>
						</dl>
					)}

					{coupon && isCouponApplied && (
						<dl className='flex items-center justify-between gap-4'>
							<dt className='text-base font-normal text-black'>Coupon ({coupon.code})</dt>
							<dd className='text-base font-medium text-[#2E8B57]'>-{coupon.discountPercentage}%</dd>
						</dl>
					)}
					<dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
						<dt className='text-base font-bold text-black'>Total</dt>
						<dd className='text-base font-bold text-[#2E8B57]'>${formattedTotal}</dd>
					</dl>
				</div>

				<motion.button
					className='flex cursor-pointer w-full items-center justify-center rounded-lg bg-[#2E8B57] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3CB371] focus:outline-none focus:ring-2 focus:ring-[#3CB371]'
					whileHover={{ scale: 1.01 }}
					whileTap={{ scale: 0.98 }}
					onClick = {handlePayment}
				>
					Proceed to Checkout
				</motion.button>

				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-gray-400'>or</span>
					<Link
						to='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-[#2E8B57] underline hover:text-[#3CB371] hover:no-underline'
					>
						Continue Shopping
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};
export default OrderSummary;
