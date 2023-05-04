import Header from "./Header";

const ContactUs = () => {
	return (
		<>
			<Header />
			<div className="ContactUs">
				<div className="left">
					{/* <img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7sYzEIO3VovFc9xcjQN8zgcqvfuFSPw-BI9h__5wce65_1haZCbM37c_6QD_EAy3okg&usqp=CAU"
						alt=""
					/> */}
					<div>
						<span>Prof. Jhareswar Maiti</span>
						<span>Head of the Department</span>
						<span>Contact (Head)</span>
						<span>Phone: +91-3222-282272</span>
						<span>Fax: +91-3222-282272, 255303</span>
						<span>
							Email :{" "}
							<span style={{ color: "blue" }}>jmaiti@iem.iitkgp.ac.in</span>{" "}
						</span>
					</div>
				</div>
				<div className="right">
					<span>
						Department of Industrial and Systems Engineering (ISE), the pioneer
						of industrial engineering education in India with a legacy of over
						40 years of service to the nation has continually reinvented itself
						in terms of academic curriculum, teaching pedagogy and research
						infrastructure to keep pace with the developments in the global
						scenario and needs and requirements of the nation in general and the
						industries and service organizations in particular.
					</span>
					<span>
						ISE provides an excellent opportunity to the students to build their
						career in an inter-disciplinary area of Industrial and systems
						engineering with a strong focus on real life industry problems. The
						courses are designed with a strong analytical and process
						orientation for the design, procurement, operations & production,
						delivery and recovery of goods and services. Students are exposed to
						the complete spectrum of analytical tools for Decision Analysis,
						Performance Improvements and Process Transformations including
						analytics, OR, statistics, multivariate data analysis, simulation
						and soft computing. Students receive hands-on experience on various
						latest software packages like CPLEX, SAS, R, MATLAB, MS-Project,
						Arena, DELMIA, QUEST and Mathematica, and technologies like
						Analytics, Virtual-Reality and ICT. Graduates are recruited by the
						leading multinational companies in analytics, finance, insurance,
						logistics, manufacturing, IT and capitalists firms. We are
						consulting and carrying out sponsored projects in collaboration with
						leading service & manufacturing industries, and several leading
						foreign universities. We provide the most conducive environment of
						learning by linking theoretical concepts with its practical
						applications to takeup challenging real life problems.ISE has
						illustrious alumni who continually support for betterment of the
						department.
					</span>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
