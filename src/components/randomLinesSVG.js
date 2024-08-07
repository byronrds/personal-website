import React, { useEffect, useRef, useState } from 'react';

const RandomLinesSVG = ({ width = 300, height = 300, lineCount = 50, lineInterval = 100 }) => {
	const svgRef = useRef(null);
	const [lines, setLines] = useState([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setLines((prevLines) => {
				if (prevLines.length >= lineCount) {
					clearInterval(intervalId);
					return prevLines;
				}

				const newLine = {
					x1: Math.random() * width,
					y1: Math.random() * height,
					x2: Math.random() * width,
					y2: Math.random() * height,
				};

				return [...prevLines, newLine];
			});
		}, lineInterval);

		return () => clearInterval(intervalId);
	}, [lineCount, lineInterval, width, height]);

	return (
		<svg ref={svgRef} width={width} height={height} style={{ border: '2px solid black' }}>
			{lines.map((line, index) => (
				<line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke='black' strokeWidth='1' />
			))}
		</svg>
	);
};

export default RandomLinesSVG;
