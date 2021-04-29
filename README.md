This was a weekly challenge project which had y
ou calcualte the number of days from whatever day you input

The key logic is using getTime();
What getTime does is, it gives you time in milliseconds 
So you take the current date time in milliseconds and subtract it from whatever date the user has input,

to get current date = new Date.getTime() // so you get todays day in Milliseconds

to get user date => selectedDate = dob.value // grab input value
userInputDate = new Date(selectedDate).getTime();

difference = currentDate - userInputDate
So you get the differnce in milliseconds

Now last bit is to convert it into days
1 ms = 1/1000 seconds
so ms in a day = 1000 * 60 * 60 * 24 //864000 something

your final result is differnce in ms / ms in a day
use Math.floor to round it down to the lowest for eg 7.5 will be rounded to 7

date input has an attribute of max='2021-04-29' 
so you get that attribute using  
dateValidation = new Date().toISOString().split('T')[0]; 

and then finally add it to the date input using javascript
dob.setAttribute('max', dateValidation);
