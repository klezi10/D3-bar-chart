const svgWidth = 500;
const svgHeight = 300;

const svg = d3
	.select('svg')
	.attr('width', svgWidth)
	.attr('height', svgHeight)
	.attr('class', 'bar-chart');

const dataset = [80, 200, 45, 75, 145, 180, 160, 40, 10];

const barPadding = 5;

const barWidth = svgWidth / dataset.length;

const barChart = svg
	.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('y', function (d) {
		return svgHeight - d;
	}) //invoked once per item in dataset array - x and y coordinates are always calculated starting from the top left corner
	.attr('height', function (d) {
		return d;
	})
	.attr('width', barWidth - barPadding)
	.attr('transform', function (d, i) {
		const xCoordinate = barWidth * i;
		return 'translate(' + xCoordinate + ')';
	});
