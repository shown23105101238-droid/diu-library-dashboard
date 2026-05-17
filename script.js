// --- USER FEEDBACK SUBMISSION LOGIC ---
document.getElementById('userFeedbackForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Form reload key prevent korbe
  
  const name = document.getElementById('fbName').value;
  const email = document.getElementById('fbEmail').value;
  const message = document.getElementById('fbMessage').value;
  
  // Console-e check korar jonno simulations data log
  console.log("New Feedback Received:", { name, email, message });
  
  // Alert message user-ke dekhabe (Since CodePen has no backend)
  alert(`Thank you, ${name}! Your feedback has been simulated on CodePen.`);
  
  // Close the feedback popup after submission
  window.location.hash = ""; 
  this.reset(); // Input field clear kore dibe
});

// --- ADMIN LOGIN SUBMISSION LOGIC (Verified credentials) ---
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const user = document.getElementById('uName').value;
  const pass = document.getElementById('uPass').value;
  
  // Vefified credentials check: Username 'admin', Password '1234'
  if(user === "admin" && pass === "1234") {
    // Verified, redirect simulation
    alert("Verified! Login Successful. Welcome Admin.");
    window.location.hash = ""; 
    // real project-e redirect hoto ekhane, CodePen-e just alert die hash clear
    this.reset();
  } else {
    // Verified fail logic
    alert("Error: Wrong credentials. Hint: admin / 1234");
  }
});