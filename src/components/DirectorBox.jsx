function DirectorBox({ id, firstName, secondName, dateOfBirth, photo }) {
	return (
		<div className='absolute bg-gray-950 bg-opacity-80 p-10'>
			<img
				srcset={photo}
				class='object-contain h-48 w-96'
			></img>
			<div className='mt-4'>
				<div>
					<span className='font-semibold text-gray-50 pe-1'>Name: </span>
					<span className='text-orange-500'>
						{firstName + ' ' + secondName}{' '}
					</span>
				</div>
				<div>
					<span className='font-semibold text-gray-50 pe-1'>Age: </span>
					<span className='text-orange-500'>{dateOfBirth} </span>
				</div>
			</div>
		</div>
	);
}

export default DirectorBox;
