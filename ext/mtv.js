function getScoreAndColor(table, assignments, assignmentSplit, maxPoints, requiredPercentage, dangerOffset) {
    if (assignments === undefined) {
        console.error("Assignment count is undefined");
        return;
    }
    let sum = 0;
    let part1 = 0;
    let part2 = 0;
    for (let i = 1; i <= assignments; i++) {
        let td = table.querySelector(`td[data-assignment-number='${i}']`);
        let points = parseFloat(td.innerText);
        if (isNaN(points)) {
            continue;
        }
        sum += points;
        if (i <= assignmentSplit) {
            part1 += points;
        }
        else {
            part2 += points;
        }

        if (points / maxPoints > requiredPercentage + dangerOffset) {
            td.style.backgroundColor = "lightgreen";
        }
        else if (points / maxPoints > requiredPercentage) {
            td.style.backgroundColor = "coral";
        }
        else {
            td.style.backgroundColor = "#ff6a6a";
        }
    }
    return [sum, part1, part2];

}


document.querySelectorAll("button.show-assignments[aria-expanded=false]").forEach(b => b.click());
document.querySelectorAll("tr[id^='collapse-course'] > td:nth-child(1)").forEach(e => e.style.display = "none");
document.querySelectorAll("tr[id^='collapse-course'] > td:nth-child(2)").forEach(e => e.colSpan = "2");
let statTds = document.querySelectorAll("tr[id^='collapse-course'] > td:nth-child(3)")

let courseCount = [10, 15];
let requiredPercentage = [.4, .5];
let dangerOffset = [.1, .15];
let assignmentPartSplit = [7, 7];
for (let i = 0; i < statTds.length; i++) {
    statTds[i].style.minWidth = "max-content";

    let table = document.querySelectorAll("table tr[id^='collapse-course']")[i].querySelector("td:nth-child(2) table");
    let assignmentsCount = table.querySelector("tr[data-assignment-numbers]").dataset.assignmentNumbers;
    let [score, part1, part2] = getScoreAndColor(table, assignmentsCount, assignmentPartSplit[i], courseCount[i], requiredPercentage[i], dangerOffset[i]);
    let percentage = score / (courseCount[i] * assignmentsCount);

    // part 1
    let span = document.createElement("span");
    percentage = part1 / (assignmentPartSplit[i] * courseCount[i]);
    span.innerText = "Part 1: " + part1 + " / " + (assignmentPartSplit[i] * courseCount[i]) + " (" + parseInt(percentage * 1000) / 10 + "%)";
    if (percentage >= requiredPercentage[i] + dangerOffset[i]) {
        span.style.backgroundColor = "lightgreen";
    }
    else if (percentage >= requiredPercentage[i]) {
        span.style.backgroundColor = "coral";
    }
    else {
        span.style.backgroundColor = "#ff6a6a";
    }
    statTds[i].appendChild(span);
    statTds[i].appendChild(document.createElement("br"));

    // part2
    span = document.createElement("span");
    percentage = part2 / ((assignmentsCount - assignmentPartSplit[i]) * courseCount[i]);
    span.innerText = "Part 2: " + part2 + " / " + ((assignmentsCount - assignmentPartSplit[i]) * courseCount[i]) + " (" + parseInt(percentage * 1000) / 10 + "%)";
    if (percentage >= requiredPercentage[i] + dangerOffset[i]) {
        span.style.backgroundColor = "lightgreen";
    }
    else if (percentage >= requiredPercentage[i]) {
        span.style.backgroundColor = "coral";
    }
    else {
        span.style.backgroundColor = "#ff6a6a";
    }
    statTds[i].appendChild(span);

    // separator
    statTds[i].appendChild(document.createElement("hr"));

    // total 
    span = document.createElement("span");
    span.innerText = `Total: ${score} / ${courseCount[i] * assignmentsCount} => ` + parseInt(percentage * 1000) / 10 + "%";
    console.log(table, table.querySelectorAll("tr:nth-child(2) td"));

    if (percentage >= requiredPercentage[i] + dangerOffset[i]) {
        span.style.backgroundColor = "lightgreen";
    }
    else if (percentage >= requiredPercentage[i]) {
        span.style.backgroundColor = "coral";
    }
    else {
        span.style.backgroundColor = "#ff6a6a";
    }

    statTds[i].appendChild(span);
}
