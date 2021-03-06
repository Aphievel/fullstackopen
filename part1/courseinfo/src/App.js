const Header = (props) => {
	return (
		<>
			<h1>{props.course.name}</h1>
		</>
	);
};
const Part = (props) => {
	return (
		<>
			<p>
				{props.partno} {props.no_of_exercises}
			</p>
		</>
	);
};
const Content = (props) => {
	return (
		<>
			<Part
				partno={props.course.parts[0].name}
				no_of_exercises={props.course.parts[0].exercises}
			/>
			<Part
				partno={props.course.parts[1].name}
				no_of_exercises={props.course.parts[1].exercises}
			/>
			<Part
				partno={props.course.parts[2].name}
				no_of_exercises={props.course.parts[2].exercises}
			/>
		</>
	);
};
const Total = (props) => {
	let total = 0;
	for (let i = 0; i < props.course.parts.length; i++) {
		total += props.course.parts[i].exercises;
	}
	return (
		<>
			<p>Number of exercises {total}</p>
		</>
	);
};
const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</>
	);
};

export default App;
