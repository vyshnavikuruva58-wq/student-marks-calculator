function calculate() {
    var s1 = Number(document.getElementById("sub1").value);
    var s2 = Number(document.getElementById("sub2").value);
    var s3 = Number(document.getElementById("sub3").value);
    var s4 = Number(document.getElementById("sub4").value);
    var s5 = Number(document.getElementById("sub5").value);

    var total = s1 + s2 + s3 + s4 + s5;
    var percentage = (total / 500) * 100;

    document.getElementById("total").innerHTML = "Total Marks: " + total;
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage + "%";

    var grade = "";

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 75) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    document.getElementById("grade").innerHTML = "Grade: " + grade;
}
