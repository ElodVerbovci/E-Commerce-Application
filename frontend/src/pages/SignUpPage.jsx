import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { signup , loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(formData);
	};

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
      className="sm:mx-auto sm:w-full sm:max-w-md"
      initial={{opacity: 0 , y:-20}}
        animate={{opacity: 1 , y:0}}
        transition={{duration: 0.8 }}
        >
          <h2 className="mt-6 text-center text-3xl pb-8 font-extrabold text-[#3EB489]">Create your account</h2>

      </motion.div>
      <motion.div
      className="sm:mx-auto sm:w-full sm:max-w-md"
      initial={{opacity: 0 , y:20}}
        animate={{opacity: 1 , y:0}}
        transition={{duration: 0.8 , delay: 0.2}}
        >
          <div className="bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
            <label htmlFor='name' className='block text-sm font-medium text-[#2E8B57]'>
								Full name
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<User className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='name'
									type='text'
									required
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-4000 border border-gray-4000 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-[#2E8B57] focus:border-[#2E8B57] sm:text-sm'
									placeholder='Your name...'
								/>
						  	</div>
						  </div>

              <div>
            <label htmlFor='name' className='block text-sm font-medium text-[#2E8B57]'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className='block w-full px-3 py-2 pl-10 bg-gray-4000 border border-gray-4000 rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-[#2E8B57] focus:border-[#2E8B57] sm:text-sm'
									placeholder='Your@email.com'
								/>
						  	</div>
						  </div>
              <div>
							<label htmlFor='password' className='block text-sm font-medium text-[#2E8B57]'>
								Password
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
									className=' block w-full px-3 py-2 pl-10 bg-gray-4000 border border-gray-4000 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2E8B57] focus:border-[#2E8B57] sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>
            <div>
							<label htmlFor='confirmPassword' className='block text-sm font-medium text-[#2E8B57]'>
								Confirm Password
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='confirmPassword'
									type='password'
									required
									value={formData.confirmPassword}
									onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
									className=' block w-full px-3 py-2 pl-10 bg-gray-4000 border
									 border-gray-4000 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#2E8B57] focus:border-[#2E8B57] sm:text-sm'
									placeholder='••••••••'
								/>
							</div>
						</div>
            <button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border cursor-pointer border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-[#2E8B57]
							 hover:bg-[#3EB489] focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-[#3EB489] transition duration-150 ease-in-out disabled:opacity-50'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<UserPlus className='mr-2 h-5 w-5 ' aria-hidden='true' />
									Sign up
								</>
							)}
						</button>
            </form>
            <p className='mt-8 text-center text-sm text-gray-700'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-[#2E8B57] hover:[#3EB489]'>
							Login here <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
          </div>
      </motion.div>
    </div>
  )
}

export default SignUpPage;
