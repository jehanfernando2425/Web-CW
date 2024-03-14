// function sendForm() {
//   var rating = document.querySelector('input[name="rating"]:checked').value;
//   var reasons = document.querySelector('textarea[name="reasons"]').value;
//   var task_completion = document.querySelector('select[name="task_completion"]').value;
//   var task_preference = document.querySelector('select[name="task_preference"]').value;

//   var subject = 'Form Submission';
//   var body = 'Rating: ' + rating + '\n'
//            + 'Reasons: ' + reasons + '\n'
//            + 'Task Completion: ' + task_completion + '\n'
//            + 'Task Preference: ' + task_preference + '\n';

//   window.location.href = 'mailto:minethvismitha@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
// }

document.getElementById('feedback-form').addEventListener('submit', function (event) {
  event.preventDefault();
  sendForm();
});

function sendForm() {
  // Validate required fields
  var rating = document.querySelector('input[name="rating"]:checked');
  var reasons = document.querySelector('textarea[name="reasons"]');
  removeErrorMsg();

  var errors = false;

  if (!rating) {
    displayErrorMsg('Please choose a rating', 'rating-error', document.querySelector('.radio-group'));
    applyErrorOutline(document.querySelectorAll('.radio-label'));
    errors = true;
  }

  if (!reasons || reasons.value.trim() === '') {
    displayErrorMsg('Please provide reasons for your rating', 'reasons-error', reasons);
    applyErrorOutline([reasons]);
    errors = true;
  }

  if (errors) {
    return;
  }
  // Get form data
  var task_completion = document.querySelector('select[name="task_completion"]').value;
  var task_preference = document.querySelector('select[name="task_preference"]').value;

  var subject = 'Form Submission';
  var body = 'Rating: ' + rating.value + '\n'
    + 'Reasons: ' + reasons.value + '\n'
    + 'Task Completion: ' + task_completion + '\n'
    + 'Task Preference: ' + task_preference + '\n';

  // Send email
  window.location.href = 'mailto:minethvismitha@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Hide form and show thank you message
  document.getElementById('feedback-form').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
}

function displayErrorMsg(message, id, element) {
  if (document.getElementById(id)) {
    return;
  }

  var errorDiv = document.createElement('div');
  errorDiv.id = id;
  errorDiv.innerHTML = '<p style="color: red;">' + message + '</p>';
  element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

function removeErrorMsg() {
  var errorMsgs = document.querySelectorAll('#rating-error, #reasons-error');
  errorMsgs.forEach(function (msg) {
    msg.remove();
  });
  removeErrorOutline(document.querySelectorAll('.radio-label, textarea[name="reasons"]'));
}

function applyErrorOutline(elements) {
  elements.forEach(function (element) {
    element.classList.add('error-outline');
  });
}

function removeErrorOutline(elements) {
  elements.forEach(function (element) {
    element.classList.remove('error-outline');
  });
}


// function sendForm() {
//   var rating = document.querySelector('input[name="rating"]:checked').value;
//   var reasons = document.querySelector('textarea[name="reasons"]').value;
//   var task_completion = document.querySelector('select[name="task_completion"]').value;
//   var task_preference = document.querySelector('select[name="task_preference"]').value;

//   var data = {
//     rating: rating,
//     reasons: reasons,
//     task_completion: task_completion,
//     task_preference: task_preference
//   };

//   fetch('/send-email', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(function(response) {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.error('There was a problem with the fetch operation:', error);
//   });
// }





// function submitForm(event) {
//   event.preventDefault(); // prevent the form from submitting and refreshing the page
  
//   // get the form elements
//   const rating = document.querySelector('input[name="rating"]:checked');
//   const reasons = document.querySelector('textarea[name="reasons"]');
//   const taskCompletion = document.querySelector('select[name="task_completion"]');
//   const taskPreference = document.querySelector('select[name="task_preference"]');
  
//   // validate the form
//   if (!rating) {
//     alert('Please select a rating.');
//     return;
//   }
  
//   // create an object with the form data
//   const formData = {
//     rating: rating.value,
//     reasons: reasons.value,
//     taskCompletion: taskCompletion.value,
//     taskPreference: taskPreference.value
//   };
  
//   // display a thank you message
//   alert('Thank you for your feedback!');
  
//   // reset the form
//   event.target.reset();
// }

// // add an event listener to the form
// const form = document.querySelector('form');
// form.addEventListener('submit', submitForm);

























/* function submitForm(event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  
  // get the form elements
  const rating = document.querySelector('input[name="rating"]:checked');
  const reasons = document.querySelector('textarea[name="reasons"]');
  const taskCompletion = document.querySelector('select[name="task_completion"]');
  const taskPreference = document.querySelector('select[name="task_preference"]');
  
  // validate the form
  if (!rating) {
    alert('Please select a rating.');
    return;
  }
  
  // create an object with the form data
  const formData = {
    rating: rating.value,
    reasons: reasons.value,
    taskCompletion: taskCompletion.value,
    taskPreference: taskPreference.value
  };
  
  // send the form data to the server
  fetch('gs://exploresrilanka-f2456.appspot.com/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for your feedback!');
      // reset the form
      event.target.reset();
    } else {
      throw new Error('Failed to submit form.');
    }
  })
  .catch(error => {
    alert(error.message);
  });
}

// add an event listener to the form
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

 */