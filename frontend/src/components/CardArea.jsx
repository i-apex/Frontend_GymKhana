import React from 'react';
import './CardArea.css';
import mountain from '../assets/mountain.jpg';

const Card = ({ image, title, description }) => (
	<div className="box">
		<img src={image} alt={title} />
		<div className="overlay">
			<h3>{title}</h3>
			<p>{description}</p>
			<a href="#">Book Now</a>
		</div>
	</div>
);

const CardArea = () => {
	return (
		<div id="card-area ">
			<div className="wrapper">
				<div className="box-area flex">
					<Card
						image={mountain}
						title="Mountaineering"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod."
					/>
					<Card
						image={mountain}
						title="Scuba Diving"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod."
					/>
					<Card
						image={mountain}
						title="Travel World"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod."
					/>
					<Card
						image={mountain}
						title="Travel World"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi explicabo libero ea nam. Quod."
					/>
          
				</div>
			</div>
		</div>
	);
};

export default CardArea;
