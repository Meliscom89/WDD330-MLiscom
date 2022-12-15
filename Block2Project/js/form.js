function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const value = Object.fromEntries(formData.entries());

    console.log({ value });
  }

  const formData = document.querySelector('form');
  saveMyChar.addEventListener('submit', handleSubmit);