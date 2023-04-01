// get DOM elements
const websiteLinkInput = document.getElementById('website-link');
const trafficResultsDiv = document.getElementById('traffic-results');
const addKeywordForm = document.getElementById('add-keyword-form');
const potentialTrafficSpan = document.getElementById('potential-traffic');
const ratingSpan = document.getElementById('rating');
const contactForm = document.getElementById('contact-form');

// handle form submission
function analyzeTraffic(event) {
  event.preventDefault();
  const websiteLink = websiteLinkInput.value;

  // make API call to get traffic and ranking data
  // and populate the table with the results

  // calculate potential traffic based on added keywords
  // and update the potentialTrafficSpan

  // calculate rating based on current rankings
  // and update the ratingSpan
}

// handle add keyword form submission
function addKeyword(event) {
  event.preventDefault();
  const newKeyword = addKeywordForm.elements['add-keyword'].value;

  // add the keyword to the list and recalculate potential traffic
  // update the potentialTrafficSpan and ratingSpan
}

// handle contact form submission
function contactRankskipper(event) {
  event.preventDefault();
  const message = contactForm.elements['contact-message'].value
