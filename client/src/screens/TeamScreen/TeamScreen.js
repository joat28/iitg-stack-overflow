import React from "react";
import LinkedIn from "../../assets/svg/LinkedIn";
import Github from "../../assets/svg/Github";

const TeamScreen = () => {
	return (
		<div
			className="flex flex-col pt-16 min-h-screen pb-20"
			style={{
				backgroundColor: "#000000",
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,

				backgroundSize: "cover",
			}}
		>
			<div className="flex h-2/5 justify-center text-5xl pt-6 mb-2 italic text-white">
				OUR TEAM
			</div>
			<div className="h-2/5 flex px-5 text-xl pt-6 italic text-white justify-center">
				We are a team of developers with skillsets in various domains
				of development.
			</div>
			<div className="flex flex-row px-5 mt-16 justify-around">
				<div className="w-1/4 h-2/5  rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/XJWFdzD/FB-IMG-1626115440284.jpg"
						alt="Tanmay Shreshth"
					></img>
					<div className="flex content-around w-full justify-center my-1.5">
						<a
							target="_blank"
							rel="noreferrer"
							className="mr-2"
							href="https://www.linkedin.com/in/tanmay-shreshth/"
						>
							<LinkedIn />
						</a>
						<a
							href="https://github.com/TanmayS26"
							target="_blank"
							rel="noreferrer"
						>
							<Github />
						</a>
					</div>
					<span className="font-semibold">Tanmay Shreshth</span>
				</div>

				<div className="w-1/4 h-2/5 rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/W697x9x/20210713-004249.jpg"
						alt="Shashank Raj"
					></img>
					<div className="flex content-around w-full justify-center my-1.5 ">
						<a
							className="mr-2"
							href="https://www.linkedin.com/in/srj1105"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn />
						</a>
						<a
							href="https://github.com/srj1107"
							target="_blank"
							rel="noreferrer"
						>
							<Github />
						</a>
					</div>
					<span className="font-semibold">Shashank Raj</span>
				</div>
				<div className="w-1/4 h-2/5  rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/bPXsXc2/Whats-App-Image-2021-07-13-at-01-09-57.jpg"
						alt="Kautilya Pandey"
					></img>
					<div className="flex content-around w-full justify-center place-items-center my-1.5">
						<a
							className="mr-2"
							href="https://www.linkedin.com/in/kautilya-pandey3/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn />
						</a>
						<a href="https://github.com/kpx3" target="_blank" rel="noreferrer">
							<Github />
						</a>
					</div>
					<span className="font-semibold">Kautilya Pandey</span>
				</div>
			</div>
			<div className="flex flex-row h-1/2 justify-center py-0 pl-20  mt-16 mb-8 ">
				<div className="w-1/4 h-2/5 mr-40 rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/hL2gswz/Whats-App-Image-2021-07-13-at-00-27-26.jpg"
						alt="Shantanu Pathak"
					></img>
					<div className="flex content-around w-full justify-center my-1.5">
						<a
							className="mr-2"
							href="https://www.linkedin.com/in/shantanu-p-101/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn />
						</a>
						<a
							href="https://github.com/shantanu689"
							target="_blank"
							rel="noreferrer"
						>
							<Github />
						</a>
					</div>
					<span className="font-semibold">Shantanu Pathak</span>
				</div>
				<div className="w-1/4 h-2/5 ml-2 rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/txFZ6mJ/Whats-App-Image-2021-07-13-at-00-37-13.jpg"
						alt="Prabhat Rao"
					></img>
					<div className="flex content-around w-full justify-center my-1.5 ">
						<a
							className="mr-2"
							href="https://www.linkedin.com/in/prabhat-rao/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn />
						</a>
						<a href="https://github.com/joat28" target="_blank"
							rel="noreferrer">
							<Github />
						</a>
					</div>
					<span className="font-semibold" target="_blank" rel="noreferrer">
						Prabhat Rao
					</span>
				</div>
			</div>
		</div>
	);
};

export default TeamScreen;
