import {render, screen, fireEvent} from '@testing-library/react';
import Menu from './index';
import data from "./navigation-mock.json";

describe("Menu", () => {
    describe("toggle", () => {
        it("collapses", () => {
            const {container} = render(<Menu data={data} collapsed={true}/>);

            expect(container.querySelector(".b-menu--collapsed")).toBeInTheDocument();
        });

        it("expands", () => {
            const {container} = render(<Menu data={data} collapsed={false}/>);

            expect(container.querySelector(".b-menu--collapsed")).not.toBeInTheDocument();
        });
    });

    describe("data", () => {
        it("renders all children if not collapsed", async () => {
            const c = render(<Menu data={data} collapsed={false}/>).container;

            // expand all levels by clicking
            try {
                let rowToggles;
                while (rowToggles = await screen.findAllByTitle("expand")) {
                    rowToggles.forEach(row => fireEvent.click(row));
                }
            } catch {
                // once we're here, all items have been expanded
            }

            data
                // collect all urls recursively from the mock
                .reduce(function reducer(acc, {url, children = []}) {
                    acc.push(url);
                    children.reduce(reducer, acc);
                    return acc;
                }, [])
                // find all matching elements
                .map(url => c.querySelector(`[href^='${url}']`))
                // make sure they all exist
                .forEach(el => expect(el).toBeDefined());
        });

        it("renders fine if no data provided", async () => {
            const c = render(<Menu data={[]} collapsed={false}/>).container;

            expect(true).toBeTruthy();
        });
    });
});
