const Footer = () => {
	return (
		<div className='flex flex-col items-stretch'>
			<div className='bg-zinc-950 flex w-full flex-col justify-center items-stretch max-md:max-w-full'>
				<div className='flex-col overflow-hidden relative flex w-full items-stretch pb-12 max-md:max-w-full'>
					<div className='self-center flex w-full max-w-[1139px] flex-col items-stretch mt-14 px-5 max-md:max-w-full max-md:mt-10'>
						<div className='max-md:max-w-full'>
							<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
								<div className='flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0'>
									<div className='flex grow flex-col items-start max-md:max-w-full max-md:mt-10'>
										<div className='text-amber-500 text-2xl font-bold whitespace-nowrap mb-2'>
											<span className='text-orange-500'>CitrusCinema</span>
											&#127818;
										</div>
										<div className='text-white text-xs font-medium leading-5 self-stretch max-md:max-w-full text-justify'>
											CitrusCinema is a comprehensive web platform dedicated to
											movie enthusiasts. The website features a robust backend
											and a sleek frontend interface, allowing users to explore
											a vast collection of movies across various genres and
											featuring numerous artists.
											<br />
										</div>
									</div>
								</div>{' '}
								<div className='flex flex-col items-stretch justify-between max-md:w-full px-10 mx-10'>
									<div className='max-md:max-w-full max-md:mt-10'>
										<div className='gap-5 flex max-md:items-stretch max-md:gap-0 space-x-10'>
											<div className='flex flex-col items-stretch  max-md:w-full max-md:ml-0 ml-20'>
												<ul className='flex grow flex-col items-stretch max-md:mt-10 list-disc text-left'>
													<li className='text-white text-sm font-semibold leading-5 list-none'>
														Explore
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5 whitespace-nowrap mt-3'>
														<a href='#popular'>Most Popular</a>
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														<a href='#top_rated'>Top Rated</a>
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														New Arrivals
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														Franchises
													</li>
												</ul>
											</div>{' '}
											<div className='flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0'>
												<ul className='flex grow flex-col items-stretch max-md:mt-10 list-disc text-left'>
													<li className='text-white text-sm font-semibold leading-5 whitespace-nowrap list-none'>
														Reach out
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5 mt-3'>
														Linkedin
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														Instagram
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														Facebook
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														YouTube
													</li>
												</ul>
											</div>{' '}
											<div className='flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0'>
												<ul className='flex grow flex-col items-stretch max-md:mt-10 list-disc text-left'>
													<li className='text-white text-sm font-semibold leading-5 whitespace-nowrap list-none'>
														Service
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5 whitespace-nowrap mt-3'>
														<a
															href='https://github.com/adichats92'
															target='_blank'
															rel='noopener noreferrer'
														>
															Aadil
														</a>
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5 whitespace-nowrap'>
														<a
															href='https://github.com/andrii-kuznichenko'
															target='_blank'
															rel='noopener noreferrer'
														>
															Andrii
														</a>
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5 whitespace-nowrap'>
														<a
															href='https://github.com/ValentijnVermeer'
															target='_blank'
															rel='noopener noreferrer'
														>
															Valentijn
														</a>
													</li>{' '}
													<li className='text-white text-xs font-medium leading-5'>
														WD45
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>{' '}
						<div className='text-white text-sm font-medium leading-8 mt-4 text-center'>
							© CitrusCinema.com - 2023
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
