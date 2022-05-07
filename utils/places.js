export const getPlacesNames = places => {
	const names = places.map(place => {
		return { params: { placeName: place.placeName } };
	});
	return names;
};

export const getPlacesDetailsByName = (places, placeName) => {
  const placeDetails = places.filter(place => place.placeName === placeName)[0].details;
	return placeDetails
};
