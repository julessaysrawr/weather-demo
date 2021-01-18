# Weather Demo

This is a demo of a simple weather app using the [open weather map API](https://openweathermap.org)

## Requirements

1 - Seed the app with top ten cities - this data is available on load

2 - When a city is clicked, it will load the current weather data with an image of the description

3 - Medium laptop screen size

4 - Fast 3g connection

## Assumptions

- Cities in the United States

- Cities were selected at random, but I did intentionally choose one with a zip code that has a leading 0 because that is an common edge case when dealing with zip codes that must be considered with your data structure.

- Since the images were a fixed set, I thought it better to download the images instead of linking to them on the openweather site. This is how it would be done for production.

## Opportunities for improvement

### API

I only spent a short time looking at this api. It is important to note that *not* all weather conditions descriptions have not been accounted for, only the main ones as seen [here](https://openweathermap.org/weather-conditions ).  This means that it is a possible edge case that if current weather description is returned from the api that is not handled in `location-details.js` a corresponding image may not be shown.  For production, it would be better to use the id range of the conditions as opposed to the string values implemented in this example.

### Data and caching

Depending on the data connection and speeds, it might make sense to pre-fetch the data for the top ten cities, even before the person clicks on one of the cities to get the weather details. Additionally, caching or storing the data once received from the server would save future network requests. There would also need to be thought put into the time to live (TTL) for the caching and when it would make sense to fetch new data. More detailed requirements would need to be provided to offer more specific recommendations or solutions.

### Accessibility

For production, this would need to be tested with a screen reader and keyboard-only navigation. Also, I would need to research the best way to communicate that the top ten cities are clickable and what to expect when a person clicks or selects one. There could be opportunities to improve the semantic html as well. I opted to use `aria-role="button"` because it's used for a user-triggered action when clicked or pressed [source: w3.org](https://www.w3.org/TR/wai-aria/#button)

Color contrast should be considered for the graphics, which are light colored, against a similar colored light background. While the graphics are decorative (not needed to understand the content on the page), it would be a good practice to have better color contrast.

### CSS

This example app uses css-in-js because I am most productive using it, but there are a lot of considerations for a production app. What approach for styles already exists in the app? Do team norms or preferences exist? Is the current approach working? Is there a theme or design system that needs to be considered? I would not presume that my preference would or should work for the team. This would be a team decision in my opinion. I can articulate my reasoning for the nuances of why I prefer this approach, but as with most technical decisions, it depends on context.

For production, there would be global styles like fonts, styling reset or normalizing, and other general defaults.

### Tests & Error handling

Any time you are working with an API, you want to have good error handling that communicates clear messages to the person using the app. What if the API is down, or returns something unexpected? What if there is an auth error? For production, this would need testing at minimum around the api and more robust error handling.

### User experience

A responsive app is table stakes for an app. Unless you are physically providing devices, you cannot assume what size screen a person will have, and there for must support everything from small phones to large monitors. This example works on screen sizes down to 550px width, at which point the UI starts to degrade.  That means that this would not work well on mobile, but would on monitors, laptops, and tablets.

A nice to have is loading placeholder graphics to show where the parts of the app will load (grey shapes that become the UI when data is filled in for example).

### Secrets

The API key is stored in an environment variable in the github pages env (in `.env` locally).  For production, this would probably use a secrets manager or preferably a back-end, since secrets are embedded in the build [Source: Create React App Documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/)

### Deployement

This app is deployed to github pages for the sole reason of I did not want to repeat the setup and configuration of eslint & prettier in a code sandbox 😅
