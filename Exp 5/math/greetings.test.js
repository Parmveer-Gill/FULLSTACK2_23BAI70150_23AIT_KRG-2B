import { render } from "@testing-library/react";
test("greetings test : " ,()=> {
    const {container} = render(<greeting name = "Umang"/>)
    expect(container).toMatchSnapshot();
});