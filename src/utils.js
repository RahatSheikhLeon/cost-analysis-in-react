export function getAllData(key = 'memberInfo'){
	return JSON.parse(localStorage.getItem(key)) || [];
}

export function getMember( id ){
	const members = getAllData();
	return members.find( member => member.id === id );
}

export function setAllData( data ){
	localStorage.setItem("memberInfo", JSON.stringify(data));
	return true;
}


	export const calculateTotalBy = ( by = 'Record') => {
		const members = getAllData();

		let byTag = by;
		if( by === 'Record' ){
			byTag = byTag.toLowerCase();
		}

		return members.reduce(( prev, member ) => {
			return prev + (member?.[by]?.reduce((acc, record) => acc + +record[byTag], 0) ?? 0);
		}, 0);
	}