const calendarElement = document.getElementById('calendar');
const selectedDateElement = document.getElementById('selected-date');
const eventListElement = document.getElementById('event-list');
const newEventInput = document.getElementById('new-event');
const addEventButton = document.getElementById('add-event');

let selectedDate = new Date().toISOString().split('T')[0];
selectedDateElement.textContent = selectedDate;

function createCalendar() {
		const daysOfWeek = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarElement.textContent = '';

		daysOfWeek.forEach(day => { 
			const dayOfWeekElement = document.createElement('div'); 
			dayOfWeekElement.classList.add('day-of-week'); 
			dayOfWeekElement.textContent = day; 
			calendarElement.appendChild(dayOfWeekElement); 
		});

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendarElement.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        const currentDate = new Date(currentYear, currentMonth, day+1).toISOString().split('T')[0];
        dayElement.dataset.date = currentDate;

        dayElement.addEventListener('click', function() {
            selectedDate = this.dataset.date;
            selectedDateElement.textContent = selectedDate;
            loadEvents();
        });

        calendarElement.appendChild(dayElement);
    }
}

function loadEvents() {
    const events = JSON.parse(localStorage.getItem(selectedDate)) || [];
    eventListElement.textContent = '';

    events.forEach((event, index) => {
        const eventElement = document.createElement('li');
        eventElement.textContent = event;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', function() {
            deleteEvent(index);
        });

        eventElement.appendChild(deleteButton);
        eventListElement.appendChild(eventElement);
    });
}

function addEvent() {
    const eventText = newEventInput.value;
    if (eventText === '') return;

    const events = JSON.parse(localStorage.getItem(selectedDate)) || [];
    events.push(eventText);
    localStorage.setItem(selectedDate, JSON.stringify(events));

    newEventInput.value = '';
    loadEvents();
}

function deleteEvent(index) {
    const events = JSON.parse(localStorage.getItem(selectedDate)) || [];
    events.splice(index, 1);
    localStorage.setItem(selectedDate, JSON.stringify(events));
    loadEvents();
}

addEventButton.addEventListener('click', addEvent);

createCalendar();
loadEvents();
