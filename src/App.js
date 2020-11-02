import logo from "./logo.svg";
import dribbleLogo from "./dribbble-4.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="wrapper-1">
          <div className="wrapper-1-top">
            <div className="wrapper-1-top-left">
              <h3>touch4IT</h3>
            </div>
            <div className="wrapper-1-top-right">
              <h3>Step 15/23</h3>
            </div>
            <div className="wrapper-1-header">
              <h4>What other app features do you need?</h4>
            </div>
            <div className="wrapper-1-description">
              Select any or all other functions you may need for your mobile
              app.Some of these can always be added later, however others might
              be easier to design straight into the first offering of your app.
            </div>

            <div className="wrapper-1-bottom">
              <div className="wrapper-1-bottom-left">APPROXIMATELY COST</div>
              <div className="wrapper-1-bottom-right">23,000 EUR</div>
            </div>
          </div>
        </div>
        <div className="wrapper-column">
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">Rating and reviews</div>
            <div className="wrapper-column-item-description">
              Ability to add and view reviews/ratings and sort them by specific
              values.
            </div>
          </div>
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">Push notifications</div>
            <div className="wrapper-column-item-description">
              Ability to send push notifications to customers as an admin.
            </div>
          </div>
        </div>
        <div className="wrapper-column">
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">QR scanner coupons</div>
            <div className="wrapper-column-item-description">
              Create QR coupons for your customers to later redeem at your
              business.
            </div>
          </div>
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">Listing</div>
            <div className="wrapper-column-item-description">
              Listing of users, items, events with basic sorting functionality.
            </div>
          </div>
        </div>
        <div className="wrapper-column">
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">Search</div>
            <div className="wrapper-column-item-description">
              Search ability using natural language and expressions.
            </div>
          </div>
          <div className="wrapper-column-item">
            <div className="wrapper-column-item-header">Blog / News Feed</div>
            <div className="wrapper-column-item-description">
              List of blog posts(title, image, author, description, date),
              detailed view of specific post, and ability to sort by a value.
            </div>
          </div>
        </div>
        <div className="wrapper-right-column">
          <div className="wrapper-right-column-wrapper">
            <div className="wrapper-right-column-header">
              <h4>Next</h4>
            </div>
            <div className="wrapper-right-column-description">
              or press ENTER
            </div>
            <div className="wrapper-right-column-enter">⏎</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
