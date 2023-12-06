const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

overviewButtons.forEach(overviewButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentToShow = button.dataset.componentToShow;
	
		overviewButtons.forEach(overviewButton => {
			overviewButton.classList.remove('overview__button--active');

			if (overviewButton.dataset.componentToShow === componentToShow) {
				button.classList.add('overview__button--active');
			}
		})
	
		components.forEach(component => {
			component.classList.remove('component--visible');
	
			const componentName = component.dataset.componentName;
	
			if (componentName === componentToShow) {
				component.classList.add('component--visible');
			}
		});
	}

	overviewButton.addEventListener('click', displayComponent);
});

// ---------------------- ACCORDION ----------------------

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');
	
	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}
	
	accordionToggle.addEventListener('click', displayAccordionContent);
})


// ---------------------- TOAST ----------------------

const componentTriggersButtons = document.querySelectorAll('.component-triggers__button');

componentTriggersButtons.forEach(componentTriggerButton => {
	const createToastElement = (message, type) => {
		const toastContainer = document.createElement('div');

		toastContainer.className = 'toast';			
		toastContainer.className += ' toast--' + type;
		toastContainer.textContent = message;
		
		return toastContainer;
	}

	const triggerState = (event) => {
		const button = event.currentTarget;
		const stateToTest = button.dataset.stateToTest;
		const testToastElement = createToastElement("This is a message", stateToTest);
		
		document.body.appendChild(testToastElement);
	}
	
	componentTriggerButton.addEventListener('click', triggerState);
})


// ---------------------- CONTENT LOADER ----------------------

  setTimeout(function () {
	let loaderContainer = document.getElementById('loader-container');
	let actualContent = document.getElementById('actual-content');

	loaderContainer.style.display = 'none';
	actualContent.style.display = 'block';
  }, 10000);


// ---------------------- COMBOBOX ----------------------

 function toggleDropdown() {
	const dropdown = document.getElementById('dropdown');
	dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  }

  function selectItem(key) {
	const input = document.querySelector('.combobox-input');
	input.value = document.querySelector('.combobox-item[data-key="' + key + '"]').textContent;
	toggleDropdown();
  }


  document.addEventListener('click', function(event) {
	const combobox = document.getElementById('combobox');
	const dropdown = document.getElementById('dropdown');

	if (!combobox.contains(event.target) && !dropdown.contains(event.target)) {
	  dropdown.style.display = 'none';
	}
  });



// ---------------------- MEDIA CONTROLLER ----------------------

  function togglePlayPause() {
	const playPauseButton = document.getElementById('playPauseButton');
	const icon = playPauseButton.querySelector('i');

	if (icon.classList.contains('fa-play')) {

	  icon.classList.remove('fa-play');
	  icon.classList.add('fa-pause');
	} else {

	  icon.classList.remove('fa-pause');
	  icon.classList.add('fa-play');
	}
  }

  document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);



// ---------------------- TIME PICKER----------------------

function padZero(number) {
	return number < 10 ? '0' + number : number;
  }

  function setCurrentTime() {
	const currentTime = new Date();
	const hour = currentTime.getHours() % 12 || 12; 
	const minute = currentTime.getMinutes();
	const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';

	document.getElementById('hour').value = padZero(hour);
	document.getElementById('minute').value = padZero(minute);
	document.getElementById('ampm').value = ampm;
  }

  setCurrentTime();