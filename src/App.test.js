import { render, screen } from '@testing-library/react';
import App from './App';

describe("content", () => {
  it("renders content container", () => {
    const {container} = render(<App/>);
    const nav = container.querySelector(".b-content");

    expect(nav).toBeInTheDocument();
  });
});

describe("navigation", () => {
  it("renders navigation organism", () => {
    const { container } = render(<App />);
    const nav = container.querySelector(".b-nav");

    expect(nav).toBeInTheDocument();
  });

  it("renders menu as collapsed", () => {
    const { container } = render(<App />);
    const nav = container.querySelector(".b-menu--collapsed");

    expect(nav).toBeInTheDocument();
  });

  it("renders menu toggle", () => {
    const { container } = render(<App />);
    const nav = container.querySelector(".b-nav__toggle");

    expect(nav).toBeInTheDocument();
  });

  it("renders a logo", () => {
    const { container } = render(<App />);
    const nav = container.querySelector("img[src$='/logo.svg']");

    expect(nav).toBeInTheDocument();
  });
});
