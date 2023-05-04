import { Card } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";

const Home = () => {
	return (
		<>
			<Header />
			<div className="HomePage">
				<div className="left">
					<Card className="Card">
						<span>THE FIRE AND EXPLOSION INDEX ?</span>
						<div>
							<span>
								The Fire and Explosion Index{" "}
								<span style={{ color: "black", fontWeight: "bold" }}>
									(F&EI)
								</span>{" "}
								is a numerical representation of the potential for a fire or
								explosion to occur within a process unit or facility. It is a
								quantitative assessment tool used in the process industries to
								evaluate the risk posed by flammable materials and substances.
							</span>

							<span>
								The{" "}
								<span style={{ color: "black", fontWeight: "bold" }}>F&EI</span>{" "}
								considers various factors such as the type and quantity of
								flammable materials, the presence of ignition sources, and the
								design and construction of equipment and facilities.
							</span>

							<span>
								It is usually expressed as a score or a rating on a scale that
								ranges from low to high, with low values indicating a low
								likelihood of fire or explosion and high values indicating a
								high likelihood of fire or explosion.
							</span>

							<span>
								The F&EI is commonly used in hazard analysis and risk
								assessments for process safety management, design and
								construction of new facilities, and modifications to existing
								facilities.
							</span>
						</div>
					</Card>

					<Card className="Card">
						<span>Use case of fire and explosion index ?</span>
						<div>
							<span>
								The Fire and Explosion Index{" "}
								<span style={{ color: "black", fontWeight: "bold" }}>
									(F&EI)
								</span>{" "}
								is used to assess the likelihood and potential consequences of a
								fire or explosion in a facility, such as an industrial plant,
								storage area, or transportation system. The F&EI helps
								organizations identify areas of high risk and prioritize safety
								measures to reduce the risk of fire or explosion incidents. It
								is commonly used in the process industry, such as petrochemical,
								chemical, pharmaceutical, and food processing, to ensure the
								safety of employees, the public, and the environment.
							</span>
						</div>
					</Card>
				</div>
				<div className="right">
					<img src={process.env.PUBLIC_URL + "/img.png"} alt="" />

					<div>
						<span>Important Questions</span>
						<div className="accordian">
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography>
										How can organizations reduce their Fire and Explosion Index
										score?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Organizations can reduce their Fire and Explosion Index
										(F&EI) score by implementing various safety measures, such
										as: 1.Conducting regular risk assessments 2.Implementing
										effective fire protection and prevention systems
										3.Implementing proper storage and handling procedures for
										hazardous materials 4.Providing employee training on fire
										safety 5.Performing regular maintenance on equipment and
										systems 6.Implementing emergency response plans 7.Conducting
										regular fire drills 8.Regularly reviewing and updating
										safety procedures 9.Conducting safety audits and
										incorporating findings 10.Implementing process safety
										management programs.
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography>
										What factors are considered in the Fire and Explosion Index
										assessment?
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										The factors considered in the Fire and Explosion Index
										(F&EI) assessment vary depending on the specific assessment
										method and the industry. However, common factors considered
										in an F&EI assessment include: 1.Hazards present: This
										includes the type, quantity, and storage of hazardous
										materials, such as flammable liquids, gases, and solids.
										2.Sources of ignition: This includes potential sources of
										ignition, such as electrical equipment, hot surfaces, and
										sparks. 3.Fire protection and prevention systems: This
										includes the effectiveness of fire protection systems, such
										as fire alarms, fire sprinklers, and fire suppression
										systems. 4.Emergency response capabilities: This includes
										the organization's ability to respond effectively to a fire
										or explosion, including emergency response plans, fire
										drills, and training. 5.Physical layout: This includes the
										physical layout of the facility, including the location of
										hazardous materials, sources of ignition, and fire
										protection systems. 6. Operational practices: This includes
										the day-to-day operational practices, such as storage and
										handling procedures for hazardous materials, maintenance
										practices, and employee training. 7.Compliance with
										regulations and standards: This includes compliance with
										relevant regulations and industry standards, such as OSHA
										regulations and NFPA codes These are some of the common
										factors considered in an F&EI assessment. The specific
										factors considered may vary depending on the industry, the
										type of facility, and the assessment methodology used.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
