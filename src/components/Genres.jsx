import { Button, ButtonGroup } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const Genres = () => {
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_SERVER_BASE_URL}/api/genres`
				);
				setGenres(response.data);
			} catch (error) {
				console.error('Failed to fetch genres:', error);
			}
		};
		fetchGenres();
	}, []);
	return (
		<div className='bg-zinc-950 flex w-full flex-col py-12 max-md:max-w-full'>
			<ButtonGroup className='items-start flex justify-between gap-5 px-5 max-md:max-w-full flex-wrap justify-evenly items-center'>
				{genres.map((genre) => {
					return (
						<Button
							key={genre.id}
							className='text-white text-sm leading-4 whitespace-nowrap items-stretch bg-zinc-900 self-stretch grow justify-center px-8 py-2.5 rounded-[500px] max-md:px-5'
						>
							{genre.title}
						</Button>
					);
				})}
			</ButtonGroup>
		</div>
	);
};

export default Genres;
