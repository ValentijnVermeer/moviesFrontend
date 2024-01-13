import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeletePage({ id, setDeleteConfirmation, deleteConfirmation }) {
	const navigate = useNavigate();
	const DeleteHandler = () => {
		axios
			.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movie/${id}`)
			.then((res) => {
				navigate(-1);
			})
			.catch((e) => console.error(e));
	};

	return (
		<div className='absolute top-0 bottom-0 right-0 left-0 w-100 h-100 z-10 bg-opacity-80 antialiased bg-zinc-900 text-gray-900 font-sans overflow-x-hidden'>
			<div className=' relative px-4 min-h-screen md:flex md:items-center md:justify-center'>
				<div className='bg-black opacity-25 w-full h-full absolute z-10 inset-0'></div>
				<div className='bg-zinc-800 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative'>
					<div className='flex items-start'>
						<div className='mt-4 md:mt-0 md:ml-6 text-start'>
							<p className='text-orange-500 font-bold'>Delete this movie</p>
							<p className='text-sm text-white mt-1'>
								You will lose all data about this movie by deleting it. This
								action cannot be undone.
							</p>
						</div>
					</div>
					<div className='text-center md:text-right mt-4 md:flex md:justify-end'>
						<button
							className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2'
							onClick={DeleteHandler}
						>
							Delete movie
						</button>
						<button
							className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
            md:mt-0 md:order-1'
							onClick={() => setDeleteConfirmation(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeletePage;
