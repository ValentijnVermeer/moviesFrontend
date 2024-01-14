import { useState, useEffect } from 'react';
import Polygon from '../assets/public/Polygon.png';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';
import CitrusCinemaLogo from '../assets/public/CitrusCinemaLogo.png';
import axios from 'axios';

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};
const Header = () => {
	const [activeSection, setActiveSection] = useState('');
	const navigate = useNavigate();
	const [isWideViewport, setIsWideViewport] = useState(
		window.innerWidth >= 900
	);
	const [searchInput, setSearchInput] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
			.then((res) => {
				filterMovies(searchInput, res.data);
				console.log(res.data);
			})
			.catch((e) => console.error(e));
	}, [searchInput]);

	const handleSearchChange = (event) => {
		const input = event.target.value;
		setSearchInput(input);
	};

	const filterMovies = (input, movies) => {
		if (input) {
			const filtered = movies.filter((movie) =>
				movie.title.toLowerCase().includes(input.toLowerCase())
			);
			setFilteredMovies(filtered);
		} else {
			setFilteredMovies([]);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setIsWideViewport(window.innerWidth >= 900);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const getImagePosition = (activeSection) => {
		switch (activeSection) {
			case 'Home':
				return 'left-[-0.3rem]';
			case 'Movies':
				return 'left-[4.5rem]';
			default:
				return 'left-0';
		}
	};

	const handleNavClick = (path) => {
		navigate(path);
	};
	return (
		<header className=' overflow-hidden relative flex w-full items-stretch w-full'>
			<div className='relative bg-black flex w-full flex-col justify-center items-center px-4 py-8 w-full'>
				<div className='flex w-full items-start justify-between gap-5 px-6'>
					{isWideViewport ? (
						<div className='flex text-xl pt-2 text-base font-medium leading-10 self-stretch grow whitespace-nowrap text-left'>
							<img
								loading='lazy'
								src={CitrusCinemaLogo}
								className='w-30 h-10'
								style={{ top: '50%', transform: 'translateY(-50%)' }}
							/>
							<span>&#127818;</span>
						</div>
					) : (
						<div className='flex text-5xl pt-2 text-base font-medium leading-10 self-stretch grow whitespace-nowrap text-left'>
							&#127818;
						</div>
					)}
					<div className='self-center flex items-center gap-2 my-auto mx-2 relative'>
						{isWideViewport && activeSection ? (
							<img
								loading='lazy'
								src={Polygon}
								className={`absolute object-contain object-center w-2 max-w-full transition-all duration-300 ${getImagePosition(
									activeSection
								)}`}
								style={{ top: '50%', transform: 'translateY(-50%)' }}
							/>
						) : (
							<span></span>
						)}
						{isWideViewport ? (
							<div
								className='flex text-white text-lg font-semibold mx-2 nowrap cursor-pointer transition ease-in-out hover:scale-110'
								onClick={() => {
									setActiveSection('Home');
									handleNavClick('/');
								}}
							>
								Home
							</div>
						) : (
							<div
								className='flex text-white text-lg font-bold mx-2 text-5xl grow self-stretch cursor-pointer  transition ease-in-out hover:scale-110'
								onClick={() => {
									setActiveSection('Home');
									handleNavClick('/');
								}}
							>
								⌂
							</div>
						)}
						{isWideViewport ? (
							<div
								className='flex text-white text-lg font-semibold mx-3 nowrap cursor-pointer transition ease-in-out hover:scale-110'
								onClick={() => {
									setActiveSection('Movies');
									handleNavClick('/movies/new');
								}}
							>
								Add Movies
							</div>
						) : (
							<div
								className='flex text-white text-base font-semibold mx-2 text-5xl grow self-stretch cursor-pointer transition ease-in-out hover:scale-110'
								onClick={() => {
									setActiveSection('Movies');
									handleNavClick('/movies/new');
								}}
							>
								+
							</div>
						)}
					</div>

					<div>
						<form className='max-w-sm px-4 relative'>
							<div className='relative z-20'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='absolute top-0 bottom-0 w-6 h-6 my-auto text-white-400 left-3'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
								<input
									type='text'
									placeholder='Search'
									className='w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full bg-transparent focus:bg-black focus:border-orange-600'
									value={searchInput}
									onChange={handleSearchChange}
								/>

								{searchInput && (
									<div className=' absolute bg-zinc-900 z-50 top--1 rounded-tr-2xl rounded-bl-2xl max-h-96 mt-1 overflow-y-auto w-full py-2.5 search-results'>
										{filteredMovies.map((movie) => (
											<Link
												key={movie.id}
												to={`/movies/${movie.id}`}
												className='block p-2 hover:bg-orange-600'
											>
												<img
													src={movie.poster}
													alt={movie.title}
													className='w-11 h-11 inline-block'
												/>
												<span className='ml-2 text-center'>{movie.title}</span>
											</Link>
										))}
									</div>
								)}
							</div>
						</form>
					</div>

					<div className='self-center flex items-start justify-between gap-3 my-auto'>
						<div className='self-center flex items-stretch gap-1.5 my-auto'>
							<Menu
								as='div'
								className='relative inline-block text-left'
							>
								<div>
									{isWideViewport ? (
										<Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent text-lg px-2 py-2 font-semibold text-white nowrap'>
											My Profile
											<ChevronDownIcon
												className='-mr-1 h-5 w-5 text-white-600'
												aria-hidden='true'
											/>
										</Menu.Button>
									) : (
										<Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent p-3 font-semibold text-white nowrap text-5xl'>
											<ChevronDownIcon
												className='-mr-1 h-5 w-5 text-white-600 text-4xl grow self-stretch'
												aria-hidden='true'
											/>
										</Menu.Button>
									)}
								</div>

								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='fixed right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
										<div className='py-1'>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active
																? 'bg-black-100 text-white-900'
																: 'text-white-700',
															'block px-4 py-2 text-sm text-white'
														)}
													>
														Account
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active
																? 'bg-black-100 text-white-900'
																: 'text-white-700',
															'block px-4 py-2 text-sm text-white'
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active
																? 'bg-black-100 text-white-900'
																: 'text-white-700',
															'block px-4 py-2 text-sm text-white'
														)}
													>
														Support
													</a>
												)}
											</Menu.Item>
											<form
												method='POST'
												action='#'
											>
												<Menu.Item>
													{({ active }) => (
														<button
															type='submit'
															className={classNames(
																active
																	? 'bg-black-100 text-white-900'
																	: 'text-white-700',
																'block w-full px-4 py-2 text-left text-sm text-white'
															)}
														>
															Sign out
														</button>
													)}
												</Menu.Item>
											</form>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>

						{/* <img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/ce7152e6ca695955df27a989658851662ba6f21ee1ad352592828771e3901dba?'
							className='aspect-square object-contain object-center w-5 stroke-[2px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full'
						/> */}
						{/* <img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/d4b44135d9c3b8927247ff63692192d0799d37488ab840f6bfd645aa80533011?'
							className='aspect-square object-contain object-center w-5 fill-white overflow-hidden self-stretch shrink-0 max-w-full'
						/>
						<div className='text-white text-xs font-semibold self-center my-auto'>
							ENG
						</div>
						<img
							loading='lazy'
							src='https://cdn.builder.io/api/v1/image/assets/TEMP/55b7e95f0df5a794796d6c7060bdc36b3b0ad82b7eff88be2897a2b87f120720?'
							className='aspect-[1.67] object-contain object-center w-2.5 stroke-[1.5px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto'
						/> */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
