import renderer from "react-test-renderer"
import AccommodationDetails from "./AccommodationDetails"
import Props from "../../../app/App.props"
import { render, screen } from "@testing-library/react"

describe("Accommodation Details - Snapshot", () => {
  it("should render without throwing an error", () => {
    const tree = renderer
      .create(<AccommodationDetails data={Props.data.results} excludeRatings />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("Accomodation Details", () => {
  describe("with no data", () => {
    it("should not render accomodation details", () => {
      render(<AccommodationDetails />)
      expect(screen.queryByTestId("accommodation-details")).not.toBeInTheDocument()
    })
  })

  describe("with data", () => {
    it("should render accomodation details", () => {
      render(<AccommodationDetails data={Props.data.results} />)
      expect(screen.getByTestId("accommodation-details")).toBeInTheDocument()
    })
  })
})
