import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PlaceCard from '../components/placeCard';
import { places } from '../data/placesData.js';
import { getPlacesNames, getPlacesDetailsByName } from '../utils/places';

const Home: NextPage = () => {
	console.log(getPlacesNames(places))
	return (
		<div>
			<Head>
				<title>TRAVEL PLUS</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="grid place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:px-32">
				{places.map((place, idx) => (
					<PlaceCard key={idx} placeName={place.placeName} details={place.details} imgURL={place.imgURL} />
				))}
			</div>
		</div>
	);
};

export default Home;
