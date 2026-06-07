window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('doctorName');
  const specialty = params.get('specialty');
  const hospital = params.get('hospital');
  const shift = params.get('shift');
  const img = params.get('img');

  if (name && specialty && hospital && shift) {
    document.getElementById('doctor-name').textContent = name;
    document.getElementById('doctor-specialty').textContent = specialty;
    document.getElementById('appointment-doctor-name').textContent = name;

    if (img) {
      document.getElementById('doctor-img').src = img;
    }
  } else {
    console.error('Missing doctor details in the URL parameters');
  }
};

let currentStep = 1;
const steps = document.querySelectorAll('.step');
const dots = document.querySelectorAll('.step-dot');
const lines = document.querySelectorAll('.step-line');

function updateStepIndicator() {
  dots.forEach((dot, i) => {
    const stepNum = i + 1;
    dot.classList.remove('active', 'completed');
    if (stepNum === currentStep) {
      dot.classList.add('active');
    } else if (stepNum < currentStep) {
      dot.classList.add('completed');
    }
  });

  lines.forEach((line, i) => {
    line.classList.toggle('active', i < currentStep - 1);
  });
}

function showStep(step) {
  steps.forEach((el, i) => {
    el.classList.toggle('active', i === step - 1);
  });
  updateStepIndicator();
}

function nextStep() {
  if (currentStep === 2) {
    const reason = document.querySelector('textarea[required]');
    if (reason.value.trim() === '') {
      alert('Please provide a reason for booking.');
      return;
    }
  }

  if (currentStep === 3) {
    const checkbox = document.getElementById('terms-check');
    if (!checkbox.checked) {
      alert('Please accept the Terms & Conditions.');
      return;
    }
  }

  if (currentStep < 4) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function redirectToSearch() {
  window.location.href = 'search.html';
}
