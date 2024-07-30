/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let num_selected_days = 0;
var txt_calculated_cost = document.getElementById('calculated-cost');
let total_cost = 0;
let daily_rate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clicked() {
    if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');
        num_selected_days ++;
        calculateTotalCost();
}}

const mon_btn = document.getElementById('monday').addEventListener('click', clicked);
const tue_btn = document.getElementById('tuesday').addEventListener('click', clicked);
const wed_btn = document.getElementById('wednesday').addEventListener('click', clicked);
const thu_btn = document.getElementById('thursday').addEventListener('click', clicked);
const fri_btn = document.getElementById('friday').addEventListener('click', clicked);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const items = document.querySelectorAll('.day-selector li');

function clear() {
    items.forEach(item => {
        item.classList.remove('clicked');
    });
    num_selected_days = 0;
    total_cost = 0;
    txt_calculated_cost.innerHTML = total_cost;
}

document.getElementById('clear-button').addEventListener('click', clear);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay(){
    daily_rate = 20;
    this.classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    calculateTotalCost();
}

document.getElementById('half').addEventListener('click', halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay(){
    daily_rate = 35;
    this.classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateTotalCost();
}

document.getElementById('full').addEventListener('click', fullDay)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost(){
    total_cost = num_selected_days * daily_rate;
    txt_calculated_cost.innerHTML = total_cost;

}
