import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('check title is on page', () => { // title of test
  render(<App />); // can change the component here the test runs in or keep to 'App' and it runs in the entire App
  const linkElement = screen.getByText("Electronic Number Cruncher");  // looks for text string in App/on page
  expect(linkElement).toBeInTheDocument(); // expects the const linkElement to be in the document
});

// new test
test('check sum of two numbers', () => { 
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"1"})) // fireEvent fires the button without us having to press it, have to import this as seen above
  fireEvent.click(component.getByRole("button", {name:"+"})) // name =  number of button on screen
  fireEvent.click(component.getByRole("button", {name:"1"}))
  fireEvent.click(component.getByRole("button", {name:"="})) 
  const answer = component.getByTitle("display-numbers").textContent; // gets title in display.js and looks for text content 'display-numbers' 
  expect(answer).toBe("2"); // expects answer = to be 
});

test('check subtraction of number', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"7"}))
  fireEvent.click(component.getByRole("button", {name:"-"}))
  fireEvent.click(component.getByRole("button", {name:"2"}))
  fireEvent.click(component.getByRole("button", {name:"="}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("5");
});

test('check division of number', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"8"}))
  fireEvent.click(component.getByRole("button", {name:"/"}))
  fireEvent.click(component.getByRole("button", {name:"4"}))
  fireEvent.click(component.getByRole("button", {name:"="}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("2");
});

test('check times of number', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"8"}))
  fireEvent.click(component.getByRole("button", {name:"*"}))
  fireEvent.click(component.getByRole("button", {name:"4"}))
  fireEvent.click(component.getByRole("button", {name:"="}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("32");
});

test('check back button', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"8"}))
  fireEvent.click(component.getByRole("button", {name:"←"}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("0");
});

test('check clear button', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"8"}))
  fireEvent.click(component.getByRole("button", {name:"C"}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("0");
});

test('check negative toggle', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"8"}))
  fireEvent.click(component.getByRole("button", {name:"-/+"}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("-8");
});

test('check negative toggle with zero button', () => {
  const component = render(<App />);
  fireEvent.click(component.getByRole("button", {name:"0"}))
  fireEvent.click(component.getByRole("button", {name:"-/+"}))
  const answer = component.getByTitle("display-numbers").textContent;
  expect(answer).toBe("0");
});