import React from 'react'
import { NavLink, useOutletContext, useParams } from 'react-router-dom'
import { calculateTotalBy, getMember } from './utils';

export const MemberDetails = () => {
	const params = useParams();
	const member = getMember(params.id);
	const allMealret = calculateTotalBy() / calculateTotalBy('Meal')

	const totalDailyCost = member?.Meal?.reduce(
		(sum, mealItem) => sum + (allMealret * Number(mealItem.Meal)),
		0
	) ?? 0;
	const totalGivenTk = member?.Record?.reduce(
		(sum, recordItem) => sum + Number(recordItem.record),
		0
	) ?? 0;

	const balance = totalGivenTk - totalDailyCost;

	const uiMood = useOutletContext();

	console.log('uiMood', uiMood)

	return (
		<div className="home-tabel_wrapper">
			<div className="flex a-member">
				<div className="ex-btn-wrapper">
					<NavLink to="/">Exit</NavLink>
					<h2>User Name: <span>{member?.memberName}</span></h2>
				</div>
				<div className="width-350 info-box">
					<h4>Email: <span className="email">{member?.memberEmail}</span></h4>
					<h4>Phone: <span className="phone">{member?.memberNumber}</span></h4>
					<h4>NID: <span className="nid">{member?.memberNID}</span></h4>
				</div>
			</div>

			<div className="flex border-buttom table-header">
				<div className="width-280"><h3>Date</h3></div>
				<div className="width-280"><h3>Meal Rate</h3></div>
				<div className="width-280"><h3>Meals</h3></div>
				<div className="width-280"><h3>Daily Cost</h3></div>
			</div>

			{member.Meal?.map((mealItem, index) => (
				<div key={index} className="flex border-bottom table-content">
					<div className="width-280 border-right">
						<p>{mealItem.date}</p> {/* Display date */}
					</div>
					<div className="width-280 border-right">
						<p>{allMealret.toFixed(2)}</p> {/* Display meal count */}
					</div>
					<div className="width-280 border-right">
						<p>{mealItem.Meal}</p>
					</div>
					<div className="width-280">
						<p>{allMealret * mealItem.Meal}</p>
					</div>
				</div>
			))}

			<div className="flex border-buttom">
				<div className="width-50 border-right">
					<p><b>Total cost of <span>{member?.memberName}</span> : <span>{totalDailyCost}</span> TK </b></p>
				</div>
				<div className="width-50">
					<div className=" flex gap-3">


						<span>{member?.memberName}</span>
						<p style={{
							color: balance < 0 ? 'red' : 'green',
							fontWeight: 'bold'
						}}>
							{balance < 0 ? 'You Will Give: ' : 'You Will Get: '}{balance.toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
