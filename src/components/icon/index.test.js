import {render, screen, fireEvent} from '@testing-library/react';
import Icon from './index';

describe("Icon", () => {
    it("adds no modifier if no icon type passed", () => {
        const {container} = render(<Icon />);

        expect(container.querySelector(".b-icon").className).toBe("b-icon");
    });

    it("adds a modifier for the type passed", () => {
        const {container} = render(<Icon type="foo" />);

        expect(container.querySelector(".b-icon--foo")).toBeInTheDocument();
    });

    it("adds a custom className", () => {
        const {container} = render(<Icon type="foo" className="bar-baz" />);

        expect(container.querySelector(".b-icon").classList.contains("bar-baz")).toBeTruthy()
    });
});
