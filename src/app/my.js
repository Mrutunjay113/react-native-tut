const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe7zFgAh3nBoWmNF7rRikS1-z6hIz7VFDWlvc5QrR2hSp2vjw/formResponse"; // Replace YOUR_FORM_ID

// Define possible options for each question
const options = {
  "entry.1589082674_sentinel": [
    "Very aware",
    "Moderately aware",
    "Not aware at all",
  ],
  "entry.69096362_sentinel": ["Yes", "No"],
  "entry.1039643745_sentinel": ["Flood", "Earthquake", "Wildfire", "Other"],
  "entry.1654021820_sentinel": ["Yes", "No"],
  "entry.1137964456_sentinel": [
    "Very familiar",
    "Partially",
    "Not familiar at all",
  ],
  "entry.446093377_sentinel": ["Confident", "Neutral", "Not confident"],
  "entry.1028172999_sentinel": ["Yes", "No"],
  "entry.1475223664_sentinel": ["SMS", "Email", "Mobile App"],
  "entry.856388053_sentinel": ["Willing", "Neutral", "Unwilling"],
  "entry.2142597808_sentinel": ["Yes", "No"],
};

// Function to generate random response for each submission
function generateRandomResponse() {
  const response = {};
  for (const key in options) {
    const choices = options[key];
    response[key] = choices[Math.floor(Math.random() * choices.length)];
  }
  return response;
}
// Function to submit a single response
async function submitSingleResponse(response) {
  try {
    const res = await fetch(formURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(response).toString(), // Serialize the response
    });

    if (res.ok) {
      console.log("Submission successful:", response);
    } else {
      console.error("Submission failed:", res.statusText);
    }
  } catch (error) {
    console.error("Error submitting response:", error);
  }
}

// Function to submit multiple responses
async function submitResponses(numResponses = 20) {
  for (let i = 0; i < numResponses; i++) {
    const randomResponse = generateRandomResponse(); // Generate a random response
    await submitSingleResponse(randomResponse); // Await the completion of each submission
  }
}

// Start submitting responses
submitResponses(20);
