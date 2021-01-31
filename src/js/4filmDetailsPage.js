function test(data) {
  const li = document.createElement('li');
  li.textContent = data.text_data;
}

MyApi.ganres().then(data => {
  test(data);
});
