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
	var playPauseButton = document.getElementById('playPauseButton');
	var icon = playPauseButton.querySelector('i');

	if (icon.classList.contains('fa-play')) {
	  // If the icon is play, change it to pause
	  icon.classList.remove('fa-play');
	  icon.classList.add('fa-pause');
	} else {
	  // If the icon is pause, change it to play
	  icon.classList.remove('fa-pause');
	  icon.classList.add('fa-play');
	}
  }

  // Add click event to the play/pause button
  document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);