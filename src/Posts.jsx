import React, { useState, useEffect } from 'react'

export function Posts (){
	const [page, setPage] = useState(1);
	const [data, setData] = useState({})

	useEffect(() => {

		if( ! data[page] ) {
			let url = `https://dummyjson.com/posts?delay=1000&limit=5&skip=${5 * (page-1)}`;

			fetch(url)
				.then( res => res.json() )
				.then( res => {
					setData( ( prevData ) => {
						return { ...prevData, [page]: res.posts }
					})
				})
		}

	}, [page])



  return (
	<div>
		Current Page: {page}
		<ul>
			{ ! data[page] && 'Loading...'}
			{ data[page] && data[page].map( (post) => {
				return <li key={post.title}>{ post.title }</li>
			})}
		</ul>

		<ul>
			<li onClick={() => setPage(1)}>1</li>
			<li onClick={() => setPage(2)}>2</li>
			<li onClick={() => setPage(3)}>3</li>
			<li onClick={() => setPage(4)}>4</li>
			<li onClick={() => setPage(5)}>5</li>
		</ul>
	</div>
  )
}
