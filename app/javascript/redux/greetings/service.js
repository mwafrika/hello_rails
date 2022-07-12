const getGreeting = async () => {
  const response = await fetch('/greeting');
  const data = await response.json();
  return data.message;
};

export default getGreeting;
