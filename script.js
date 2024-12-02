document.getElementById("generate-split").addEventListener("click", () => {
  const occupation = document.getElementById("occupation").value;
  const time = document.getElementById("time").value;
  const fitnessPlan = document.getElementById("fitness-plan");

  const plans = {
    student: {
      15: [
        "5 min: Warm-up (jumping jacks, dynamic stretches)",
        "10 min: Bodyweight exercises (push-ups, squats, planks)",
      ],
      30: [
        "5 min: Warm-up",
        "10 min: Cardio (running, skipping)",
        "15 min: Strength (push-ups, pull-ups, squats)",
      ],
      60: [
        "10 min: Warm-up",
        "20 min: Cardio",
        "30 min: Strength training (gym or home)",
      ],
      90: [
        "10 min: Warm-up",
        "30 min: Cardio",
        "50 min: Comprehensive strength training",
      ],
    },
    "working-professional": {
      15: [
        "3 min: Quick warm-up",
        "12 min: High-intensity interval training (HIIT)",
      ],
      30: [
        "5 min: Warm-up",
        "15 min: Cardio (cycling or brisk walking)",
        "10 min: Core workout (planks, sit-ups)",
      ],
      60: [
        "10 min: Warm-up",
        "25 min: Cardio",
        "25 min: Strength training (weights or resistance bands)",
      ],
      90: [
        "10 min: Warm-up",
        "40 min: Cardio",
        "40 min: Strength and mobility work",
      ],
    },
    "stay-at-home": {
      15: [
        "5 min: Stretching",
        "10 min: Low-impact exercises (yoga or Pilates)",
      ],
      30: [
        "5 min: Warm-up",
        "10 min: Yoga",
        "15 min: Strength and core workout",
      ],
      60: [
        "10 min: Warm-up",
        "20 min: Cardio (dance or home treadmill)",
        "30 min: Full-body strength workout",
      ],
      90: [
        "10 min: Warm-up",
        "30 min: Cardio",
        "50 min: Advanced strength and flexibility training",
      ],
    },
  };

  if (plans[occupation] && plans[occupation][time]) {
    const selectedPlan = plans[occupation][time];
    fitnessPlan.innerHTML = `
      <h3>Occupation: ${capitalize(occupation.replace("-", " "))}</h3>
      <h3>Time: ${time} Minutes</h3>
      <ul>${selectedPlan.map((step) => `<li>${step}</li>`).join("")}</ul>
    `;
  } else {
    fitnessPlan.textContent = "No plan available for the selected options.";
  }
});

function capitalize(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
