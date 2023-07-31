function grade() {
    var marks1 = prompt("Enter mark 1:");
    var marks2 = prompt("Enter mark 2:");
    var marks3 = prompt("Enter mark 3:");
    var marks4 = prompt("Enter mark 4:");
    var marks5 = prompt("Enter mark 5:");
  
    var total = marks1 + marks2 + marks3 + marks4 + marks5;
    var average = total / 5;
  
    if (average > 30) {
      alert("Congrats! You passed.");
    } else {
      alert("Better luck next time.");
    }
  }
  
  document.getElementById("gradeButton").addEventListener("click", grade);