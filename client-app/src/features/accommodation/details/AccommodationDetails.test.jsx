import renderer from "react-test-renderer"
import AccommodationDetails from "./AccommodationDetails"
import Props from "../../../app/App.props"

describe("AccommodationDetails", () => {
  it("should render without throwing an error", () => {
    const tree = renderer
      .create(<AccommodationDetails data={Props.data.results} excludeRatings={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
