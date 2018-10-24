$(document).ready(function () {

    var h = 500;
    var w = 1350;
    var barPadding = 5;

    var dataset = [201, 612, 332, 127, 518, 315, 158, 369, 201, 700, 104, 177, 168, 317, 662, 287, 450, 275, 115, 162, 672, 591, 502, 477, 316, 492, 408];

    var scale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .range([0, h]);

    var colWidth = w / dataset.length;
    var barWidth = colWidth - barPadding;

    var svg = d3.select("#myGraph")
        .append("svg")
        
        // disable w/h in order to make responsive
        //.attr("height", h)
        //.attr("width", w)
        .attr("width", "100%")
        .attr("height", "99.6%")
        .style("background-color", "orange")
        .style("opactiy", 0)
        .style("stroke", "brown")
        .style("stroke-opacity", 0.9)
        .style("stroke-width", 0.5)
        .attr("viewBox", function() {
            return "0 0 " + w + " " + h;
        })
        .attr("preserveAspectRatio", "xMaxYMax meet");

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * colWidth;
        })
        .attr("y", function (d) {
            return h - scale(d);
        })
        .attr("height", function (d) {
            return scale(d);
        })
        .attr("width", barWidth)
        .attr("fill", function (d) {
            if (d > 650) {
                return "#623A15";
            } else if (d > 550) {
                return "#D56627";
            } else if (d > 450) {
                return "#FFDE66";
            } else if (d > 350) {
                return "#FCE5B7";
            } else if (d > 250) {
                return "#FFFFFF";
            } else if (d > 150) {
                return "#555555";
            } else if (d > 50) {
                return "#000000";
            }
            return "pink";
        })
        .style("opacity", 0.5)
        .style("stroke", "black")
        .style("stroke-width", 0.75)
        .style("stroke-dasharray", ("15,5"));

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d;
        })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
            return i * colWidth + barWidth / 2;
        })

        /*.attr("y", function (d) {
            return h - scale(d) + 45;
        })*/
        .attr("y", function (d) {
            if (d > 700) {
                return h - scale(d) + 85;
            } else if (d > 600) {
                return h - scale(d) + 75;
            } else if (d > 500) {
                return h - scale(d) + 65;
            } else if (d > 400) {
                return h - scale(d) + 55;
            } else if (d > 300) {
                return h - scale(d) + 45;
            } else if (d > 200) {
                return h - scale(d) + 35;
            } else {
                return h - scale(d) + 25;
            }
        })

        .attr("font-family", "sans-serif")

        //.attr("font-size", "2em")
        .attr("font-size", function (d) {
            if (d > 700) {
                return "4em";
            } else if (d > 600) {
                return "3.5em";
            } else if (d > 500) {
                return "3em";
            } else if (d > 400) {
                return "2.5em";
            } else if (d > 300) {
                return "2em";
            } else if (d > 200) {
                return "1.5em";
            }
            return "1em";
        })
        .attr("fill", "orange")
        .style("font-weight", "bold")
        .style("writing-mode", "tb")
        .style("glyph-orientation-vertical", 0);

});