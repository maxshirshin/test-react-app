import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './index';

const mockData = [
    {
        title: "Foo Item",
        url: "/bar"
    },
    {
        title: "Baz Item",
        url: "/quux",
        children: [
            {
                title: "Second Level 1",
                url: "/second1"
            },
            {
                title: "Second Level 2",
                url: "/second2"
            }
        ]
    }
];
jest.mock("../../data/nav", () => () => Promise.resolve(mockData));

describe("toggle menu", () => {
    let container;
    beforeEach(async () => {
        container = render(<Nav/>).container;
        await screen.findByText("Foo Item");
        // we are rendered by this point
    });

    it("collapsed is the default", () => {
        // check if collapsed modifier is set by default
        expect(container.querySelector(".b-menu--collapsed")).toBeInTheDocument();
    });

    it("hamburger click toggles the menu", () => {
        const toggle = container.querySelector(".b-nav__toggle");
        fireEvent.click(toggle);
        expect(container.querySelector(".b-menu--collapsed")).not.toBeInTheDocument();
        fireEvent.click(toggle);
        expect(container.querySelector(".b-menu--collapsed")).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(container.querySelector(".b-menu--collapsed")).not.toBeInTheDocument();
    });
});
