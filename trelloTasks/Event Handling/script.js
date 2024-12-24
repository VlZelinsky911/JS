	const form = document.getElementById('registration-form');

	const fields = {
		name: {
			input: document.getElementById('name'),
			error: document.getElementById('name-error'),
			hint: document.getElementById('name-hint'),
			validate: (value) => value.trim() !== ''
		},
		email: {
			input: document.getElementById('email'),
			error: document.getElementById('email-error'),
			hint: document.getElementById('email-hint'),
			validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
		},
		password: {
			input: document.getElementById('password'),
			error: document.getElementById('password-error'),
			hint: document.getElementById('password-hint'),
			validate: (value) => value.length >= 6
		}
	};

	Object.values(fields).forEach(field => {

		field.input.addEventListener('focus', () => {
			field.hint.style.display = 'block';
		});

		field.input.addEventListener('blur', () => {
			field.hint.style.display = 'none';
			
			const isValid = field.validate(field.input.value);
			field.error.style.display = isValid ? 'none' : 'block';
		});

		field.input.addEventListener('input', () => {
			field.error.style.display = 'none';
		});
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		let isFormValid = true;
		Object.values(fields).forEach(field => {
			const isValid = field.validate(field.input.value);
			field.error.style.display = isValid ? 'none' : 'block';
			if (!isValid) isFormValid = false;
		});

		if (isFormValid) {
			alert('Форма успішно відправлена!');
			form.reset();
		}
	});
