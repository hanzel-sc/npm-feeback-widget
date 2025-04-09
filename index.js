
function bloop(options = {}) {
    const message = options.message || "Leave your feedback, pwease 🥹🥹🥹 :";
    const thankYou = options.thankYou || "Thanks for your thoughts! 😁😁😁";
    
    const feedback = prompt(message);
    if (feedback) {
      console.log(`[bloop] ${feedback}`);
      alert(thankYou);
    } else {
      alert("No feedback provided!");
    }
  }
  
  module.exports = bloop;
  