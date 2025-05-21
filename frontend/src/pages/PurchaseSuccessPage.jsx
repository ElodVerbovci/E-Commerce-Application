import { ArrowRight, CheckCircle, HandHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import axios from "../lib/axios";
import Confetti from "react-confetti";

const PurchaseSuccessPage = () => {
	const [isProcessing, setIsProcessing] = useState(true);
	const { clearCart } = useCartStore();
	const [error, setError] = useState(null);

	useEffect(() => {
		const handleCheckoutSuccess = async (sessionId) => {
			try {
				await axios.post("/payments/checkout-success", {
					sessionId,
				});
				clearCart();
			} catch (error) {
				console.log(error);
			} finally {
				setIsProcessing(false);
			}
		};

		const sessionId = new URLSearchParams(window.location.search).get("session_id");
		if (sessionId) {
			handleCheckoutSuccess(sessionId);
		} else {
			setIsProcessing(false);
			setError("No session ID found in the URL");
		}
	}, [clearCart]);

	if (isProcessing) return "Processing...";

	if (error) return `Error: ${error}`;
  
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={300}
        recycle={false}
      />
      
      <div className="max-w-md w-full bg-gray-100 shadow-xl overflow-hidden relative z-10 ">
        <div className="p-6 sm:p-8"> 
      <div className='flex justify-center'>
    <CheckCircle className='text-[#2E8B57] w-16 h-16 mb-4' />
      </div>
      <h1 className='text-2xl sm:text-3xl font-bold text-center mb-2 text-[#2E8B57]'>
        Purchase Successful!
      </h1>
        <p className='text-gray-700 text-center mb-2'>
          Thank you for your order! {"We're"} processing it now.
        </p>
        <p className='text-gray-700 text-center text-sm mb-6'>
          You will receive an email confirmation shortly.
        </p>

        <div className='flex item-center justify-between'>
          <span className='text-sm text-gray-700'>Estimated Delivery</span>
          <span className='text-sm font-semibold text-[#2E8B57]'>3-5 Business Days</span> 

        </div>
        </div>
        <div className='space-y-4'>
						<button
							className='w-full cursor-pointer bg-[#2E8B57] hover:bg-[#3EB489] text-white font-semibold py-2 px-4
             rounded-lg transition duration-300 flex items-center justify-center'
						>
							<HandHeart className='mr-2' size={18} />
							Thanks for trusting us!
						</button>
						<Link
							to={"/"}
							className='w-full bg-gray-100 hover:bg-gray-400 text-[#2E8B57] font-semibold py-2 px-4 
            rounded-lg transition duration-300 flex items-center justify-center'
						>
							Continue Shopping
							<ArrowRight className='ml-2' size={18} />
						</Link>
					</div>
      </div>
    </div>
  )
}

export default PurchaseSuccessPage
