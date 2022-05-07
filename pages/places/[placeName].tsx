import { getPlacesNames, getPlacesDetailsByName } from '../../utils/places';
import { GetStaticPaths, GetStaticProps } from 'next';
import { places } from '../../data/placesData.js';

export default function Place(props: { [key: string]: any }) {
	// return <div>{props?.placeName}</div>;
  return (
    <div>
      <h1>{props?.placeName}</h1>
      <p>{props?.details}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: getPlacesNames(places),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return {
		props: {
			placeName: params?.placeName,
      details: getPlacesDetailsByName(places, params?.placeName),
		},
	};
};
