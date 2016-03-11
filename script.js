	/**
	 * QUESTION 1: 
	 * User will enter the rate and hours, then the program should display the Pay. 
	 * If the employee works more than 40 hours he should get paid with an overtime rate which is 1.5 the regular rate.
	 */


	document.getElementById("submit").onclick=function () {

		// Regular hour variables
		var hours = document.getElementById("hours").value;
		var rate = document.getElementById("rate").value;
		var wages = document.getElementById("wages");
		
		// Variables for Overtime Pay
		var overHours, overPay, overRate, regPay, grossPay;

		// Overtime verification
		if (hours > 40) {

			overHours = hours - 40;
			overRate = rate * 1.5;
			overPay = overHours * overRate;

			regPay = rate * 40;

			grossPay = overPay + regPay;

			wages.innerHTML = "$" + grossPay;

		} else {

			// Regular rate
			wages.innerHTML = "$" + hours * rate;
		}

	};

	/**
	 * QUESTION 2:
	 * User will enter the width and height of a Rectangle.
	 * Then, the program will calculate and display the area and the perimeters of any rectangle.
	 * The program should check if the user is entering a positive value or not.
	 * If the user enters a negative value for the width or the height, display an error message.
	 */


	document.getElementById("create").onclick=function () {

		// User input
		var width = Number(document.getElementById("width").value);
		var height = Number(document.getElementById("height").value);
		var rectangle = document.getElementById("rectangle");

		// Input Validation
		if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {

			alert("Please enter a valid number");

		} else {

			// Display rectangle
			rectangle.style.width = width + "px";
			rectangle.style.height = height + "px";
			rectangle.style.backgroundColor = "blue";

		}

	};

	/**
	 * QUESTION 3
	 * Write a program that computes and display the number of minutes hours and seconds in a given number of days.
	 */
	
	document.getElementById("convert").onclick=function () {

		// Time variables
		var givenDays = document.getElementById("givenDays").value;
		var minutes = document.getElementById("minutes");
		var seconds = document.getElementById("seconds");
		var hour = document.getElementById("hour");
		var days = document.getElementById("days");

		// Input validation
		if (isNaN(givenDays) || givenDays < 0) {

			alert("Please enter a valid number");

		} else {

			// Time conversion
			days.innerHTML = givenDays;
			hour.innerHTML = givenDays * 24;
			minutes.innerHTML = givenDays * 1440;
			seconds.innerHTML = givenDays * 86400;

		}

	};